// eslint-disable-next-line no-unused-vars
const catalogue = [
  {title: "The Catcher in the Rye", author: "J.D. Salinger", quantity: "10"},
  {title: "Dracula", author: "Bram Stoker", quantity: "0"},
  {title: "Between the Assassinations", author: "Aravind Adiga", quantity: "9"},
  {title: "Wolf Hall", author: "Hilary Mantel", quantity: "33"},
  {title: "Bring Up The Bodies", author: "Hilary Mantel", quantity: "31"},
  {title: "A Place of Greater Safety", author: "Hilary Mantel", quantity: "11"},
  {title: "Giving Up the Ghost", author: "Hilary Mantel", quantity: "8"},
  {title: "The Assassination of Margaret Thatcher", author: "Hilary Mantel", quantity: "43"},
  {title: "The Yellow Wallpaper", author: "Charlotte Perkins Gilman", quantity: "12"},
  {title: "Conversations With Friends", author: "Sally Rooney", quantity: "1"},
  {title: "Normal People", author: "Sally Rooney", quantity: "2"},
  {title: "Everything I Never Told You", author: "Celeste Ng", quantity: "6"},
  {title: "2666", author: "Robert Bolaño", quantity: "17"},
  {title: "By Night In Chile", author: "Robert Bolaño", quantity: "8"},
  {title: "A Tale of Two Cities", author: "Charles Dickens", quantity: "3"},
  {title: "Oliver Twist", author: "Charles Dickens", quantity: "7"},
  {title: "Great Expectations", author: "Charles Dickens", quantity: "1"},
  {title: "The Blind Assassin", author: "Margaret Atwood", quantity: "8"},
  {title: "Why Be Happy When You Could Be Normal?", author: "Jeanette Winterson", quantity: "19"},
  {title: "The Origin of Species", author: "Charles Darwin", quantity: "50"}
];

function countBooksByAuthor(author) {
  let count = 0;
  catalogue.map(el => el.author == author && count++);
  return count;
}

function checkBookByTitle(title) {
  if (catalogue.some(el => el.title === title)) return true;
  return false;
}

function countBooksByFirstLetter(letter) {
  let count = 0;
  catalogue.forEach(el => el.title.charAt(0).toLowerCase() == letter.toLowerCase() && count++)
  return count;
}

function getQuantity(title) {
  let res = [];
  catalogue.forEach(el => {
    if (el.title == title) res.push(el.quantity);
  });
  return Number(res[0]);
}

function getBooksByAuthor(author) {
  let res = [];
   catalogue.map(el => {
    if(el.author == author) res.push(el)
  });
  return res;
}

function checkQuantity(title, quantity) {
  return catalogue.some(el => (el.title === title && el.quantity >= quantity))
  ? true : false;
}

module.exports = {
  countBooksByAuthor,
  checkBookByTitle,
  countBooksByFirstLetter,
  getQuantity,
  getBooksByAuthor,
  checkQuantity
};
