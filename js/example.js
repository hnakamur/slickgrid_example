$(function () {
  function TagsEditor(args) {
    var $input;
    var defaultValue;
    var scope = this;

    this.init = function () {
      $input = $('<INPUT type="text" id="tagEditor">');
      $input.appendTo(args.container);
    };

    this.destroy = function () {
      console.log("TagsEditor.destroy called");
      $(".select2-container").remove();
      $(".select2-sizer").remove();
      $(".select2-drop").remove();
      $(".select2-drop-mask").remove();
      $input.remove();
    };

    this.focus = function () {
      console.log("TagsEditor.focus called");
    };

    this.loadValue = function (item) {
      defaultValue = item[args.column.field];
      console.log("TagsEditor.loadValue called. defaultValue=", defaultValue);
      $input.val(defaultValue);
      $input.select2({
        tags: defaultValue.split(","),
        tokenSeparators: [",", " "],
        width: "resolve"
      });
      $input.on("select2-blur", function(e) {
        console.log("select2-blur", e);
        args.commitChanges();
      });
      $input.select2("open");
    };

    this.serializeValue = function () {
      console.log("TagsEditor.serializeValue called. value=", $input.val());
      return $input.val();
    };

    this.applyValue = function (item, state) {
      console.log("TagsEditor.applyValue called. state=", state);
      item[args.column.field] = state;
    };

    this.isValueChanged = function () {
      console.log("TagsEditor.isValueChanged called");
      return $input.val() != defaultValue;
    };

    this.validate = function () {
      return {
        valid: true,
        msg: null
      };
    };

    this.init();
  }

  var columns = [
    {id: "name", name: "Name", field: "name", width: 200, sortable: true, editor: Slick.Editors.Text},
    {id: "tags", name: "Tags", field: "tags", width: 300, sortable: true, editor: TagsEditor}
  ];

  var data = [
    {
      name: "row1",
      tags: "foo,bar"
    },
    {
      name: "row2",
      tags: "bar,baz"
    }
  ];

  var options = {
    editable: true,
    autoEdit: false
  };

  var grid = new Slick.Grid("#myGrid", data, columns, options);
});
