import './Books.css'
import PropTypes from "prop-types";
import BookItem from "../bookItem/BookItem"

const Books = ({ books }) => {

  //MUY IMPORTANTE: es necesario que no haya mucho código en el jsx, es decir en el return.
  return (
    <div className="books-container">
      {/*llamo al componente BookItem, donde voy a crear cada componente de book, y mediante un map recorro el arreglo books pasado como prop*/}
      {books.map((book, index) => (
        <BookItem 
          key={index}
          title={book.bookTitle} //aca estoy pasando las propiedades que se reciben en bookitem, para ser impresas en el jxs
          author={book.bookAuthor}
          pageCount={book.pageCount}
          rating={book.bookRating}
          imageUrl={book.imageUrl} />
      ))}
    </div>
  )
}

Books.propTypes = {
  books: PropTypes.array,
};

export default Books
