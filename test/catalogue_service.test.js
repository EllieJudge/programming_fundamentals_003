const catalogueService = require("../app/catalogue_service");

describe("catalogueService", () => {
  describe("catalogueService.countBooksByAuthor", () => {
    test("returns the total number of books written by the given author", () => {
      expect(catalogueService.countBooksByAuthor("Hilary Mantel")).toBe(5);
      expect(catalogueService.countBooksByAuthor("Celeste Ng")).toBe(1);
      expect(catalogueService.countBooksByAuthor("Charles Dickens")).toBe(3);
    });
  });
});


describe("catalogueService", () => {
  describe("catalogueService.checkBookByTitle", () => {
    test("returns true if the book is in the catalogue and false if it is not", () => {
      expect(catalogueService.checkBookByTitle("Dracula")).toBe(true);
      expect(catalogueService.checkBookByTitle("The Adventures of Ellie")).toBe(false);
    });
  });
});

describe("catalogueService", () => {
  describe("catalogueService.countBooksByFirstLetter", () => {
    test("returns number of books beginning with letter", () => {
      expect(catalogueService.countBooksByFirstLetter("D")).toBe(1);
      expect(catalogueService.countBooksByFirstLetter("T")).toBe(5);
    });
  });
});

describe("catalogueService", () => {
  describe("catalogueService.countBooksByFirstLetter", () => {
    test("returns number of books beginning with letter", () => {
      expect(catalogueService.countBooksByFirstLetter("D")).toBe(1);
      expect(catalogueService.countBooksByFirstLetter("T")).toBe(5);
      expect(catalogueService.countBooksByFirstLetter("d")).toBe(1);
      expect(catalogueService.countBooksByFirstLetter("t")).toBe(5);
    });
  });
});

describe("catalogueService", () => {
  describe("catalogueService.getQuantity", () => {
    test("returns number of books beginning with letter", () => {
      expect(catalogueService.getQuantity("Dracula")).toBe(0);
      expect(catalogueService.getQuantity("2666")).toBe(17);
    });
  });
});

describe.only("catalogueService", () => {
  describe("catalogueService.getBooksByAuthor", () => {
    test("returns an array of books by given author", () => {
      expect(catalogueService.getBooksByAuthor("Robert Bolaño")).toEqual([
        { title: "2666", author: "Robert Bolaño", quantity: "17" },
        { title: "By Night In Chile", author: "Robert Bolaño", quantity: "8" }
      ]);
      expect(catalogueService.getBooksByAuthor("Bram Stoker")).toEqual([
        {title: "Dracula", author: "Bram Stoker", quantity: "0"}]);
    });
  });
});


