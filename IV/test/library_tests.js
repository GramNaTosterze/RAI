"use strict";
var expect = require('chai').expect;
const Book = require("../src/book");
const Library = require("../src/library");

describe('library-tests', function()
{
    let library;
    let book1
    let book2
    let book3

    beforeEach(function(){
        book1 = new Book("a1", "t1", 1, "pub1", ["k1", "k2", "k3"]);
        book2 = new Book("a2", "t2", 2, "pub2", ["k1", "k4", "k5"]);
        book3 = new Book("a3", "t3", 3, "pub1", ["k4", "k5", "k3"]);

        let books = [book1, book2, book3];
        library = new Library(books);
    });

    it('rent - do not throw', function()
    {
        expect(library.rent.bind(library, "KN", "t1")).not.throw("Cannot rent t1");
    });

    it('cannot rent - throw("Cannot rent")', function()
    {
        expect(library.rent.bind(library, "KN", "t6")).to.throw("Cannot rent t6");
    });


    it('return - do not throw', function()
    {
        library.rent("KN", "t1");
        library.rent("MN", "t2");
        expect(library.return.bind(library, "KN", "t1")).to.not.throw("Cannot return t1");
    });

    it('cannot return - throw("Cannot return")', function()
    {
        expect(library.return.bind(library, "KN", "t1")).to.throw("Cannot return t1");
    });

    it('who_rented - valid', function()
    {
        library.rent("KN", "t1");
        library.rent("MN", "t2");

        expect(library.who_rented(book2)).to.eq("MN");
    });

    it('who_rented - invalid', function()
    {
        expect(library.who_rented(book2)).to.undefined;
    });

    it('search', function()
    {
        let actual = library.search("k5");
        let expected = [book2, book3];
        expect(JSON.stringify(actual)).to.eq(JSON.stringify(expected));
    });

});