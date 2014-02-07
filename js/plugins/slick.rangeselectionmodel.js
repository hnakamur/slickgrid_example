(function ($) {
  // register namespace
  $.extend(true, window, {
    "Slick": {
      "RangeSelectionModel": RangeSelectionModel
    }
  });

  function RangeSelectionModel(options) {
    var _grid;
    var _ranges = [];
    var _self = this;
    var _handler = new Slick.EventHandler();
    var _inHandler;
    var _options;
    var _defaults = {
      selectActiveCell: true
    };

    function init(grid) {
      _options = $.extend(true, {}, _defaults, options);
      _grid = grid;
      _handler.subscribe(_grid.onActiveCellChanged, handleActiveCellChange);
      _handler.subscribe(_grid.onKeyDown, handleKeyDown);
      _handler.subscribe(_grid.onClick, handleClick);
    }

    function destroy() {
      _handler.unsubscribeAll();
    }

    function rangesToRows(ranges) {
      var rows = [];
      for (var i = 0; i < ranges.length; i++) {
        for (var j = ranges[i].fromRow; j <= ranges[i].toRow; j++) {
          rows.push(j);
        }
      }
      return rows;
    }

    function rowsToRanges(rows) {
      var ranges = [];
      var lastCell = _grid.getColumns().length - 1;
      for (var i = 0; i < rows.length; i++) {
        ranges.push(new Slick.Range(rows[i], 0, rows[i], lastCell));
      }
      return ranges;
    }

    function getRowsRange(from, to) {
      var i, rows = [];
      for (i = from; i <= to; i++) {
        rows.push(i);
      }
      for (i = to; i < from; i++) {
        rows.push(i);
      }
      return rows;
    }

    function getSelectedRows() {
      return rangesToRows(_ranges);
    }

    function setSelectedRows(rows) {
      setSelectedRanges(rowsToRanges(rows));
    }

    function setSelectedRanges(ranges) {
      _ranges = ranges;
      _self.onSelectedRangesChanged.notify(_ranges);
    }

    function getSelectedRanges() {
      return _ranges;
    }

    function handleActiveCellChange(e, args) {
      console.log("handleActiveCellChange");
      if (_options.selectActiveCell && args.row != null && args.cell != null) {
        setSelectedRanges([new Slick.Range(args.row, args.cell)]);
      }
    }

    function updateSelection(from, to) {
      if (to === undefined) {
        _ranges = [new Slick.Range(from.row, from.cell)];
        _grid.setActiveCell(from.row, from.cell);
      } else {
        _ranges = [new Slick.Range(from.row, from.cell, to.row, to.cell)];
      }
      setSelectedRanges(_ranges);
    }

    function getOtherCornerOfRange(range, corner) {
      if (corner.row === range.fromRow) {
        if (corner.cell === range.fromCell) {
          return {row: range.toRow, cell: range.toCell};
        } else if (corner.cell == range.toCell) {
          return {row: range.toRow, cell: range.fromCell};
        }
      } else if (corner.row === range.toRow) {
        if (corner.cell === range.fromCell) {
          return {row: range.fromRow, cell: range.toCell};
        } else if (corner.cell == range.toCell) {
          return {row: range.fromRow, cell: range.fromCell};
        }
      }
      return null;
    }

    function handleKeyDown(e) {
      console.log("handleKeyDown");
      /***
       * Кey codes
       * 37 left
       * 38 up
       * 39 right
       * 40 down                     
       */                                         
      var activeCell = _grid.getActiveCell();
      if (activeCell && e.shiftKey && !e.ctrlKey && !e.altKey && !e.metaKey &&
          (e.which == 37 || e.which == 38 || e.which == 39 || e.which == 40)) {
        var range = _ranges[0];
        var to = getOtherCornerOfRange(range, activeCell);
        console.log("activeCell", activeCell, "to", to);
        // TODO: deal with colspan, rowspan and whether cell is selectable.
        if (e.which == 37) {
          if (to.cell - 1 >= 0) {
            to.cell--;
          }
        } else if (e.which == 38) {
          if (to.row - 1 >= 0) {
            to.row--;
          }
        } else if (e.which == 39) {
          if (to.cell + 1 < _grid.getColumns().length) {
            to.cell++;
          }
        } else if (e.which == 40) {
          if (to.row + 1 < _grid.getDataLength()) {
            to.row++;
          }
        }
        _ranges = [new Slick.Range(activeCell.row, activeCell.cell, to.row, to.cell)];
        setSelectedRanges(_ranges);
        _grid.scrollCellIntoView(to.row, to.cell, false);

        e.preventDefault();
        e.stopPropagation();
      }
    }

    function handleClick(e) {
      console.log("handleClick");
      var cell = _grid.getCellFromEvent(e);
      if (!cell || !_grid.canCellBeActive(cell.row, cell.cell)) {
        return false;
      }

      if (!e.ctrlKey && !e.altKey && !e.metaKey) {
        var activeCell = _grid.getActiveCell();
        if (e.shiftKey && activeCell) {
          updateSelection(activeCell, cell);
        } else {
          updateSelection(cell);
        }
      }
      e.stopImmediatePropagation();

      return true;
    }

    $.extend(this, {
      "getSelectedRows": getSelectedRows,
      "setSelectedRows": setSelectedRows,

      "getSelectedRanges": getSelectedRanges,
      "setSelectedRanges": setSelectedRanges,

      "init": init,
      "destroy": destroy,

      "onSelectedRangesChanged": new Slick.Event()
    });
  }
})(jQuery);
