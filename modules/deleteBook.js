const deleteBook = e => {
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
  };
  
  export default deleteBook;