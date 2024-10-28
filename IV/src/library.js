
module.exports = class Library {
    #rented = [];
    #available = [];

    get num_of_books() {
        return this.#rented.length;
    }

    constructor(books) {
        this.#available = books.map( (book) => {
            return {
                book: book,
                last_rented: null
            }
        });
    }

    #rent_book(person, book) {
        let available_books = this.#available.map((b) => {
            return b.book;
        })
        if (available_books.includes(book)) {
            delete this.#available.find((b) => { return b.book === book; });
            this.#rented.push({person: person, book: book});
            return;
        }
        throw Error(`Cannot rent ${book.title}`);
    }
    #return_book(book_info) {
        let {book: book, person: person} = book_info;
        if (this.#rented.includes(book_info)) {
            this.#available.push({
                book: book,
                last_rented: person
            });
            return;
        }
        throw Error(`Cannot return ${book.title}`);
    }


    rent(person, title) {
        let available_books = this.#available.map((b) => {
            return b.book;
        })
        let book_to_rent = available_books.find((b) => {
            return b.title === title;
        });

        if (book_to_rent !== undefined) {
            return this.#rent_book(person, book_to_rent);
        } else {
            throw Error(`Cannot rent ${title}`);
        }
    }
    return(person, title) {
        let book_to_return = this.#rented.find((b) => {
            return b.book.title === title;
        });

        if (book_to_return !== undefined) {
            return this.#return_book(book_to_return);
        } else {
            throw Error(`Cannot return ${title}`)
        }
    }
    who_rented(book) {
        return this.#rented.find((b) => {
            return b.book === book;
        })?.person;
    }
    search(keywords = []) {
        let available_books = this.#available.map((b) => {
            return b.book;
        })
        return available_books.filter((book) => {
            return book.keywords.includes(keywords);
        });
    }
}

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