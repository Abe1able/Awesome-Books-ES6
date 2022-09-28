const addBookForm = document.querySelector ('.add-book-form');
const contactInfo = document.querySelector ('.contact-info');
const books = document.querySelector ('.book-list');
const listColor = document.querySelector ('.list-color');
const addColor = document.querySelector ('.add-color');
const contactColor = document.querySelector ('.contact-color');

export default class Listeners {
  static ListBtn () {
    listColor.style.color = 'blue';
    addColor.style.color = 'black';
    contactColor.style.color = 'black';
    addBookForm.style.display = 'none';
    books.style.display = 'block';
    contactInfo.style.display = 'none';
  }

  static AddBtn () {
    listColor.style.color = 'black';
    addColor.style.color = 'blue';
    contactColor.style.color = 'black';
    addBookForm.style.display = 'block';
    books.style.display = 'none';
    contactInfo.style.display = 'none';
  }

  static contactBtn () {
    listColor.style.color = 'black';
    addColor.style.color = 'black';
    contactColor.style.color = 'blue';
    addBookForm.style.display = 'none';
    books.style.display = 'none';
    contactInfo.style.display = 'block';
  }
}