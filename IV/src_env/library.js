"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _rented, _available, _Library_brand;
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classPrivateMethodInitSpec(e, a) { _checkPrivateRedeclaration(e, a), a.add(e); }
function _classPrivateFieldInitSpec(e, t, a) { _checkPrivateRedeclaration(e, t), t.set(e, a); }
function _checkPrivateRedeclaration(e, t) { if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object"); }
function _classPrivateFieldSet(s, a, r) { return s.set(_assertClassBrand(s, a), r), r; }
function _classPrivateFieldGet(s, a) { return s.get(_assertClassBrand(s, a)); }
function _assertClassBrand(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }
module.exports = (_rented = /*#__PURE__*/new WeakMap(), _available = /*#__PURE__*/new WeakMap(), _Library_brand = /*#__PURE__*/new WeakSet(), /*#__PURE__*/function () {
  function Library(books) {
    _classCallCheck(this, Library);
    _classPrivateMethodInitSpec(this, _Library_brand);
    _classPrivateFieldInitSpec(this, _rented, []);
    _classPrivateFieldInitSpec(this, _available, []);
    _classPrivateFieldSet(_available, this, books.map(function (book) {
      return {
        book: book,
        last_rented: null
      };
    }));
  }
  return _createClass(Library, [{
    key: "num_of_books",
    get: function get() {
      return _classPrivateFieldGet(_rented, this).length;
    }
  }, {
    key: "rent",
    value: function rent(person, title) {
      var available_books = _classPrivateFieldGet(_available, this).map(function (b) {
        return b.book;
      });
      var book_to_rent = available_books.find(function (b) {
        return b.title === title;
      });
      if (book_to_rent !== undefined) {
        return _assertClassBrand(_Library_brand, this, _rent_book).call(this, person, book_to_rent);
      } else {
        throw Error("Cannot rent ".concat(title));
      }
    }
  }, {
    key: "return",
    value: function _return(person, title) {
      var book_to_return = _classPrivateFieldGet(_rented, this).find(function (b) {
        return b.book.title === title;
      });
      if (book_to_return !== undefined) {
        return _assertClassBrand(_Library_brand, this, _return_book).call(this, book_to_return);
      } else {
        throw Error("Cannot return ".concat(title));
      }
    }
  }, {
    key: "who_rented",
    value: function who_rented(book) {
      var _classPrivateFieldGet2;
      return (_classPrivateFieldGet2 = _classPrivateFieldGet(_rented, this).find(function (b) {
        return b.book === book;
      })) === null || _classPrivateFieldGet2 === void 0 ? void 0 : _classPrivateFieldGet2.person;
    }
  }, {
    key: "search",
    value: function search() {
      var keywords = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var available_books = _classPrivateFieldGet(_available, this).map(function (b) {
        return b.book;
      });
      return available_books.filter(function (book) {
        return book.keywords.includes(keywords);
      });
    }
  }]);
}());

/*
function Library(books) {
    let rented = [];
    let available = books.map(function(book) {
        return {
            book: book,
            last_rented: null
        }
    });

    let rent_book =  function(person, book) {
        let available_books = available.map(function(b) {
            return b.book;
        })
        if (available_books.includes(book)) {
            delete available.find(function(b) { return b.book === book; });
            rented.push({person: person, book: book});
            return;
        }
        throw Error("Cannot rent");
    };
    let return_book = function(book_info) {
        if (rented.includes(book_info)) {
            available.push({
                book: book_info.book,
                last_rented: book_info.person
            });
            return;
        }
        throw Error("Cannot return");
    };

    return {
        rent: function(person, title) {
            let available_books = available.map(function(b) {
                return b.book;
            })
            let book_to_rent = available_books.find(function(b) {
                return b.title === title;
            });

            if (book_to_rent !== undefined) {
                return rent_book(person, book_to_rent);
            } else {
                throw Error("Cannot rent");
            }
        },
        return: function(person, title) {
            let book_to_return = rented.find(function(b) {
               return b.book.title === title;
            });

            if (book_to_return !== undefined) {
                return return_book(book_to_return);
            } else {
                throw Error("Cannot return")
            }
        },
        who_rented: function(book) {
            return rented.find(function(b) {
                return b.book === book;
            })?.person;
        },
        search: function(keywords) {
            let available_books = available.map(function(b) {
                return b.book;
            })
            return available_books.filter(function(book) {
                return book.keywords.includes(keywords);
            });
        },
    }
}
*/
function _rent_book(person, book) {
  var available_books = _classPrivateFieldGet(_available, this).map(function (b) {
    return b.book;
  });
  if (available_books.includes(book)) {
    delete _classPrivateFieldGet(_available, this).find(function (b) {
      return b.book === book;
    });
    _classPrivateFieldGet(_rented, this).push({
      person: person,
      book: book
    });
    return;
  }
  throw Error("Cannot rent ".concat(book.title));
}
function _return_book(book_info) {
  var book = book_info.book,
    person = book_info.person;
  if (_classPrivateFieldGet(_rented, this).includes(book_info)) {
    _classPrivateFieldGet(_available, this).push({
      book: book,
      last_rented: person
    });
    return;
  }
  throw Error("Cannot return ".concat(book.title));
}