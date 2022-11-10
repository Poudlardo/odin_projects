let myLibrary = [];

function Book(title, author, pages, isRead) {
    this.title = title
    this.author = author
    this.pages = pages
    this.isRead = isRead
    this.info = function() {
        console.log(title + " by " + author + ", " + pages + " pages, " + isRead);
    }
}

const theHobbit = new Book('The Hobbit','J. R. R. Tolkien','287', 'Not Read yet');
const daVinciCode = new Book('Da Vinci Code','Dan Brown','571','Read');
theHobbit.info() ;
daVinciCode.info();

function addBookToLibrary() {
  const button = document.getElementById('submit');

  // take user's inputs
  const title = document.getElementById("title");
  const author = document.getElementById("author");
  const isRead = document.getElementById("isRead");
  const pages = document.getElementById("pages");

  // store new book objects in array button onclick 
button.addEventListener('click', () => {
     myLibrary.push({
        title: title.value,
        author: author.value,
        pages: pages.value,
        isRead: isRead.value
     })
})

}

for (i=0;i < myLibrary.length;i++) {

}

console.log(myLibrary);