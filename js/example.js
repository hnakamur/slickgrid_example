$(function () {
  var columns = [
    {id: "id", name: "ID", field: "id", minWidth: 24, width: 24, editor: Slick.Editors.Text},
    {id: "title", name: "書名", field: "title", width: 200, editor: Slick.Editors.Text},
    {id: "authors", name: "著者", field: "authors", width: 160, editor: Slick.Editors.Text},
    {id: "publisher", name: "出版社", field: "publisher", editor: Slick.Editors.Text},
    {id: "published-on", name: "出版日", field: "publishedOn", width: 70, editor: Slick.Editors.Text},
    {id: "book-type", name: "書籍種別", field: "bookType", width: 40, editor: Slick.Editors.Text},
    {id: "book-info-url", name: "書籍情報URL", field: "bookInfoURL", editor: Slick.Editors.Text},
    {id: "purchase-url", name: "購入URL", field: "purchaseURL", editor: Slick.Editors.Text},
    {id: "reading-status", name: "読書状態", field: "readingStatus", width: 46, editor: Slick.Editors.Text}
  ];

  var data = [
    {
      id: 1,
      title: "パーフェクトRuby",
      authors: "Rubyサポーターズ, すがわら まさのり, 寺田 玄太郎, 三村 益隆, 近藤 宇智朗, 橋立 友宏, 関口 亮一",
      publisher: "技術評論社",
      publishedOn: "2013-08-10",
      bookType: "紙",
      bookInfoURL: "http://www.amazon.co.jp/dp/4774158798",
      purchaseURL: "http://www.yodobashi.com/%E3%83%91%E3%83%BC%E3%83%95%E3%82%A7%E3%82%AF%E3%83%88Ruby-%E5%8D%98%E8%A1%8C%E6%9C%AC/pd/100000009001925295/",
      readingStatus: "読書中"
    },
    {
      id: 2,
      title: "Sphinxをはじめよう",
      authors: "清水川貴之, 小宮健, 山田剛, 若山史郎",
      publisher: "O'Reilly Japan",
      publishedOn: "2013-09-01",
      bookType: "mobi",
      bookInfoURL: "http://www.oreilly.co.jp/books/9784873116488/",
      purchaseURL: "http://www.oreilly.co.jp/books/9784873116488/",
      readingStatus: "読了"
    },
    {
      id: 3,
      title: "Programming in Lua, Third Edition",
      authors: "Roberto Ierusalimschy",
      publisher: "Lua.org",
      publishedOn: "2013-01-03",
      bookType: "mobi",
      bookInfoURL: "http://www.amazon.co.jp/dp/859037985X",
      purchaseURL: "http://store.feistyduck.com/products/programming-in-lua",
      readingStatus: "読了"
    },
    {
      id: 4,
      title: "Programming in Lua, Second Edition",
      authors: "Roberto Ierusalimschy",
      publisher: "Lua.org",
      publishedOn: "2006-03-05",
      bookType: "mobi",
      bookInfoURL: "http://www.amazon.co.jp/dp/8590379825",
      purchaseURL: "http://store.feistyduck.com/products/programming-in-lua",
      readingStatus: "読了"
    },
    {
      id: 5,
      title: "Programming Erlang: Software for a Concurrent World",
      authors: "Joe Armstrong",
      publisher: "Pragmatic Bookshelf",
      publishedOn: "2007-07-02",
      bookType: "mobi",
      bookInfoURL: "http://www.amazon.co.jp/dp/193435600X",
      purchaseURL: "http://pragprog.com/book/jaerlang/programming-erlang",
      readingStatus: "読了"
    },
    {
      id: 6,
      title: "Erlang Programming",
      authors: "Francesco Cesarini, Simon Thompson",
      publisher: "Oreilly & Associates Inc",
      publishedOn: "2009-06-26",
      bookType: "mobi",
      bookInfoURL: "http://www.amazon.co.jp/dp/0596518188",
      purchaseURL: "http://www.amazon.com/dp/B002L4EXHY",
      readingStatus: "読了"
    },
    {
      id: 7,
      title: "Agile Web Development with Rails 4",
      authors: "Sam Ruby",
      publisher: "Pragmatic Bookshelf",
      publishedOn: "2013-10-01",
      bookType: "mobi",
      bookInfoURL: "http://pragprog.com/book/rails4/agile-web-development-with-rails-4",
      purchaseURL: "http://pragprog.com/book/rails4/agile-web-development-with-rails-4",
      readingStatus: "読了"
    },
    {
      id: 8,
      title: "入門Chef Solo - Infrastructure as Code",
      authors: "伊藤直也",
      publisher: "伊藤直也",
      publishedOn: "2013-03-11",
      bookType: "mobi",
      bookInfoURL: "http://www.amazon.co.jp/dp/B00BSPH158",
      purchaseURL: "http://www.amazon.co.jp/dp/B00BSPH158",
      readingStatus: "読了"
    },
    {
      id: 9,
      title: "実践Vim",
      authors: "Drew Neil, 新丈径(翻訳)",
      publisher: "KADOKAWA/アスキー・メディアワークス",
      publishedOn: "2013-08-30",
      bookType: "pdf",
      bookInfoURL: "http://www.amazon.co.jp/dp/4048916599",
      purchaseURL: "http://tatsu-zine.com/books/practical-vim",
      readingStatus: "読了"
    },
    {
      id: 10,
      title: "ガベージコレクションのアルゴリズムと実装",
      authors: "中村 成洋, 相川 光, 竹内 郁雄(監修)",
      publisher: "秀和システム",
      publishedOn: "2013-03-18",
      bookType: "epub",
      bookInfoURL: "http://www.amazon.co.jp/dp/4798025623",
      purchaseURL: "http://tatsu-zine.com/books/gcbook",
      readingStatus: "読書中"
    },
    {
      id: 11,
      title: "エキスパートObjective-Cプログラミング -iOS/OS Xのメモリ管理とマルチスレッド",
      authors: "坂本一樹",
      publisher: "インプレスジャパン",
      publishedOn: "2011-11-18",
      bookType: "epub",
      bookInfoURL: "http://www.amazon.co.jp/dp/4844331094",
      purchaseURL: "http://tatsu-zine.com/books/objc",
      readingStatus: "読了"
    },
    {
      id: 12,
      title: "Effective Android",
      authors: "TechBooster",
      publisher: "インプレスジャパン",
      publishedOn: "2013-08-29",
      bookType: "epub",
      bookInfoURL: "http://www.amazon.co.jp/dp/4844335340",
      purchaseURL: "http://tatsu-zine.com/books/effective-android",
      readingStatus: "読了"
    },
    {
      id: 13,
      title: "上を目指すプログラマーのためのiPhoneアプリ開発テクニック iOS 7編",
      authors: "加藤 寛人 (著), 西方 夏子 (著), 藤川 宏之 (著), 鈴木 晃 (著), 高丘 知央 (著), 丸山 弘詩 (編集)",
      publisher: "インプレスジャパン",
      publishedOn: "2013-12-20",
      bookType: "紙",
      bookInfoURL: "http://www.amazon.co.jp/dp/4844335200",
      purchaseURL: "http://www.amazon.co.jp/dp/4844335200",
      readingStatus: "読書中"
    },
    {
      id: 14,
      title: "詳解 Objective-C 2.0 第3版",
      authors: "荻原 剛志",
      publisher: "ソフトバンククリエイティブ",
      publishedOn: "2011-12-28",
      bookType: "紙",
      bookInfoURL: "http://www.amazon.co.jp/dp/4797368276",
      purchaseURL: "http://www.amazon.co.jp/dp/4797368276",
      readingStatus: "読了"
    },
    {
      id: 15,
      title: "iPhoneアプリ開発エキスパートガイド iOS 6対応",
      authors: "加藤 寛人 (著), 藤川 宏之 (著), 高丘 知央 (著), 西方 夏子 (著), 吉田 悠一 (著), 関川 雄介 (著), 丸山 弘詩 (編集)",
      publisher: "インプレスジャパン",
      publishedOn: "2013-04-04",
      bookType: "紙",
      bookInfoURL: "http://www.amazon.co.jp/dp/4844333852",
      purchaseURL: "http://www.amazon.co.jp/dp/4844333852",
      readingStatus: "読了"
    },
    {
      id: 16,
      title: "iPhone/iPad グラフィックスプログラミング",
      authors: "STUDIO SHIN (著)",
      publisher: "ソフトバンククリエイティブ",
      publishedOn: "2013-05-28",
      bookType: "紙",
      bookInfoURL: "http://www.amazon.co.jp/dp/479735819X",
      purchaseURL: "http://www.amazon.co.jp/dp/479735819X",
      readingStatus: "読了"
    },
    {
      id: 17,
      title: "iOS Core Frameworksテクニカルガイド",
      authors: "Shawn Welch (著), 柴田 文彦 (翻訳)",
      publisher: "インプレスジャパン",
      publishedOn: "2012-09-26",
      bookType: "紙",
      bookInfoURL: "http://www.amazon.co.jp/dp/4844332724",
      purchaseURL: "http://www.amazon.co.jp/dp/4844332724",
      readingStatus: "読了"
    },
    {
      id: 18,
      title: "iOS 7 App Development Essentials",
      authors: "Neil Smyth",
      publisher: "Amazon Services International, Inc.",
      publishedOn: "2013-10-09",
      bookType: "mobi",
      bookInfoURL: "http://www.amazon.co.jp/dp/B00FPT5BKK",
      purchaseURL: "http://www.amazon.co.jp/dp/B00FPT5BKK",
      readingStatus: "読了"
    },
    {
      id: 19,
      title: "The Nature of Code",
      authors: "Daniel Shiffman",
      publisher: "Amazon Services International, Inc.",
      publishedOn: "2012-12-13",
      bookType: "mobi",
      bookInfoURL: "http://www.amazon.co.jp/dp/B00BPFT8D4",
      purchaseURL: "http://www.amazon.co.jp/dp/B00BPFT8D4",
      readingStatus: "読了"
    },
    {
      id: 20,
      title: "Working With Unix Processes",
      authors: "Jesse Storimer",
      publisher: "Amazon Services International, Inc.",
      bookType: "mobi",
      bookInfoURL: "http://www.amazon.co.jp/dp/B0078VSRUE",
      purchaseURL: "http://www.amazon.co.jp/dp/B0078VSRUE",
      readingStatus: "読書中"
    }
  ];

  var options = {
    editable: true
  };

  var grid = new Slick.Grid("#myGrid", data, columns, options);
});
