let myLibrary = [{
  Titre: 'The Hobbit',
  Auteur: 'J. R. R. Tolkien',
  Pages: '287',
  Statut: 'Pas Lu'
},
{
  Titre: 'Da Vinci Code',
  Auteur: 'Dan Brown',
  Pages: '571',
  Statut: 'Lu'
}];

function Book(Titre, Auteur, Pages, Statut) {
    this.Titre = Titre;
    this.Auteur = Auteur;
    this.Pages = Pages;
    this.Statut = Statut;
}

function pushInMyLibrary(Titre, Auteur, Pages, Statut) {
  let aBook = new Book(Titre, Auteur, Pages, Statut);
  myLibrary.push(aBook);
  createCardItem();
}

function createCardItem() {  

let cardContainer = document.querySelector('.card-container');

const removeDivs = document.querySelectorAll(".card");
for (let i = 0; i < removeDivs.length; i++) {
  removeDivs[i].remove();
}

let index = 0;
myLibrary.forEach( Books =>  {
      let createCard = document.createElement('div');
      createCard.setAttribute('class', 'card');
      cardContainer.appendChild(createCard);


      for (key in Books) {
      let paragraph = document.createElement('p');
      let checkboxes = document.createElement('input');
      checkboxes.setAttribute('id', 'read')
      paragraph.textContent = `${key}: ${Books[key]}`;
      createCard.appendChild(paragraph);
  };

        // Create remove book button and add class attribute for each array card
      const removeBookButton = document.createElement("button");
      removeBookButton.classList.add("remove-book-button");
      removeBookButton.textContent = "Enlever de la Bibliothèque"; 
      removeBookButton.dataset.linkedArray = index;
      createCard.appendChild(removeBookButton);
      removeBookButton.addEventListener("click", removeBookFromLibrary);

     // Create read status button and add class attribute for each array card
      const readStatusButton = document.createElement("button");
      readStatusButton.classList.add("read-status-button");
      readStatusButton.textContent = "Lu / Pas Lu";

     // Link the data attribute of the toggle read button to the array and card
      readStatusButton.dataset.linkedArray = index;
      createCard.appendChild(readStatusButton);

     // Create event listener/toggle logic for array objects prototype for read status change
      readStatusButton.addEventListener("click", toggleReadStatus);

  function toggleReadStatus() {
    let retrieveBookToToggle = readStatusButton.dataset.linkedArray;
    Book.prototype = Object.create(Book.prototype);
    const toggleBook = new Book();

    // Run check to see what read value is present to toggle from
    if (myLibrary[parseInt(retrieveBookToToggle)].Statut == "Lu") {
      toggleBook.Statut = "Pas Lu";
      myLibrary[parseInt(retrieveBookToToggle)].Statut = toggleBook.Statut;
    } else if (myLibrary[parseInt(retrieveBookToToggle)].Statut == "Pas Lu") {
      toggleBook.Statut = "Lu";
      myLibrary[parseInt(retrieveBookToToggle)].Statut = toggleBook.Statut;
    }
    createCardItem();
  }

      function removeBookFromLibrary() {
        let retrieveBookToRemove = removeBookButton.dataset.linkedArray;
        myLibrary.splice(parseInt(retrieveBookToRemove), 1);
        createCard.remove();
        createCardItem();
      }
      index++;
}) 
}
// variables


// action to display the form, works
let displayForm = document.getElementById('show-form');
displayForm.addEventListener('click', ()=> {
let form = document.getElementById('form-block');

if (form.style.display === 'none') {

  form.style.display = 'block';
} else {

  form.style.display = 'none';
}
})

let submitData = document.getElementById('submitBtn');
submitData.addEventListener('click', formDatas);

function formDatas() {
let titleValue = document.getElementById('Titre').value;
let authorValue = document.getElementById('Auteur').value;
let pagesValue = document.getElementById('Pages').value;
let readOrNot = document.getElementById('Statut').value;

if (titleValue == "" || authorValue == "" || pagesValue == "" || readOrNot =="") {
  return;
}

pushInMyLibrary(titleValue,authorValue,pagesValue,readOrNot);

  // Reset the form after successful submission
  document.getElementById("form").reset();
}

createCardItem();