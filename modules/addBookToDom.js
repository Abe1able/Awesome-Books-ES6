import deleteBook from './deleteBook.js';

const addBookToDom = book => {
  const books = document.querySelector ('.books');
  const bookItem = document.createElement ('div');
  bookItem.className = 'book-item';
  bookItem.innerHTML = `
      <article>
      <p class="display">"${book.title}" by ${book.author}</p>
      <article>
    `;
  const button = document.createElement ('button');
  button.type = 'submit';
  button.className = 'delete-btn';
  button.id = book.id;
  button.addEventListener ('click', deleteBook);
  button.innerText = 'Delete';
  bookItem.appendChild (button);
  books.appendChild (bookItem);
};

export default addBookToDom;