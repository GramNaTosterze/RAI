module.exports = class Book {
    constructor(author, title, price = 10_000_000, publisher = "non", keywords = []) {
        this.author = author;
        this.title = title;
        this.price = price;
        this.publisher = publisher;
        this.keywords = keywords;
    }
}