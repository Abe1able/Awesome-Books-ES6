const form = document.querySelector ('form');
const addBookForm = document.querySelector('.add-book-form');
const contactInfo = document.querySelector('.contact-info');
const books = document.querySelector('.books');
const listBtn = document.querySelector('.list-btn');
const addNewBtn = document.querySelector('.add-new-btn');
const contactBtn = document.querySelector('.contact-btn');
const listColor = document.querySelector('.list-color');
const addColor = document.querySelector('.add-color');
const contactColor = document.querySelector('.contact-color')
const dateTimeDiv = document.querySelector('.date');

class BookObj {
  constructor (title, author, id) {
    this.title = title;
    this.author = author;
    this.id = id;
  }
}

class Actions {
  static addBookToDom (book) {
    const books = document.querySelector ('.books');
    const bookItem = document.createElement ('div');
    bookItem.className = 'book-item';
    bookItem.innerHTML = `
      <article>
      <p class="display">"${book.title}" by ${book.author}</p>
      <article>
    `
    const button = document.createElement ('button');
    button.type = 'submit';
    button.className = 'delete-btn';
    button.id = book.id;
    button.addEventListener ('click', this.deleteBook);
    button.innerText = 'Delete';
    bookItem.appendChild (button);
    books.appendChild (bookItem);
  }

  static displaySavedBooks () {
    const allBooks = JSON.parse (localStorage.getItem ('allBooks'));
    Array.from(allBooks).forEach (book => {
      this.addBookToDom (book);
    });
  }

  static deleteBook (e) {
    const parentEle = e.target.parentElement;
    parentEle.remove ();

    const {id} = e.target;
    let allBooks = JSON.parse (localStorage.getItem ('allBooks'));
    allBooks.map ((book, index) => {
      let strId = String (book.id);
      if (strId === id) {
        allBooks.splice (index, 1);
      }
    });
    localStorage.setItem ('allBooks', JSON.stringify (allBooks));
  }
}

form.addEventListener ('submit', e => {
  e.preventDefault ();

  const title = document.querySelector ('#title').value;
  const author = document.querySelector ('#author').value;
  const id = Math.floor (Math.random () * 1005000);

  const newBook = new BookObj (title, author, id);

  Actions.addBookToDom (newBook);

  let previousBooks = JSON.parse (localStorage.getItem ('allBooks')) || [];
  let allBooks = [...Array.from(previousBooks), newBook];
  localStorage.setItem ('allBooks', JSON.stringify (allBooks));

  form.reset ();
});

listBtn.addEventListener('click', () => {
  listColor.style.color = 'blue';
  addColor.style.color = 'black';
  contactColor.style.color = 'black';
  addBookForm.style.display = 'none';
  books.style.display = 'block';
  contactInfo.style.display = 'none';
});

addNewBtn.addEventListener('click', () => {
  listColor.style.color = 'black';
  addColor.style.color = 'blue';
  contactColor.style.color = 'black';
  addBookForm.style.display = 'block';
  books.style.display = 'none';
  contactInfo.style.display = 'none';
});

contactBtn.addEventListener('click', () => {
  listColor.style.color = 'black';
  addColor.style.color = 'black';
  contactColor.style.color = 'blue';
  addBookForm.style.display = 'none';
  books.style.display = 'none';
  contactInfo.style.display = 'block';
});

onload = () => {
  if (localStorage.getItem ('allBooks')) {
    Actions.displaySavedBooks ();
  }
  var today = new Date();
  var date = (today.getMonth()+1)+'-'+today.getDate()+'th-'+ today.getFullYear();
  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  var dateTime = date+', '+time;
  
  dateTimeDiv.innerHTML = dateTime;
};