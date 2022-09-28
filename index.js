import BookObj from './modules/bookObj.js';
import displaySavedBooks from './modules/displaySavedBooks.js';
import addBookToDom from './modules/addBookToDom.js';
import Listeners from './modules/topNavListeners.js';
import { DateTime } from './modules/luxon.min.js';

const form = document.querySelector ('form');
const dateTimeDiv = document.querySelector ('.date');
const listBtn = document.querySelector ('.list-btn');
const addNewBtn = document.querySelector ('.add-new-btn');
const contactBtn = document.querySelector ('.contact-btn');

form.addEventListener ('submit', e => {
  e.preventDefault ();

  const title = document.querySelector ('#title').value;
  const author = document.querySelector ('#author').value;
  const id = Math.floor (Math.random () * 1005000);

  const newBook = new BookObj (title, author, id);

  addBookToDom (newBook);

  let previousBooks = JSON.parse (localStorage.getItem ('allBooks')) || [];
  let allBooks = [...Array.from (previousBooks), newBook];
  localStorage.setItem ('allBooks', JSON.stringify (allBooks));

  form.reset ();
});

listBtn.addEventListener ('click', () => {
  Listeners.ListBtn ();
});

addNewBtn.addEventListener ('click', () => {
  Listeners.AddBtn ();
});

contactBtn.addEventListener ('click', () => {
  Listeners.contactBtn ();
});

onload = () => {
  if (localStorage.getItem ('allBooks')) {
    displaySavedBooks ();
  }

};

document.addEventListener('DOMContentLoaded', () => {
   // const { DateTime } = luxon;
    const now = DateTime.now();
    dateTimeDiv.innerHTML = now.toLocaleString(DateTime.DATETIME_MED);
  });