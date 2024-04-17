//IMPORTS DEL COMPONENTE:
import './App.css'
import { useState } from "react";
import Books from './componentes/books/Books';
import NewBook from "./components/newBook/NewBook";



// aca voy a estructucuturar mi app, por otro lado dentro de la carpeta components voy a tener subcarpetas
//con todos mis componentes, y cada uno de ellos va a tener un archivo .jsx y uno .css
//app es el COMPONENTE RAÍZ

const BOOKS = [
  {
    bookTitle: "100 años de soledad",
    bookAuthor: "Gabriel García Marquez",
    bookRating: Array(5),
    pageCount: 410,
    imageUrl:
      "https://images.cdn3.buscalibre.com/fit-in/360x360/61/8d/618d227e8967274cd9589a549adff52d.jpg",
  },
  {
    bookTitle: "Asesinato en el Orient Express",
    bookAuthor: "Agatha Christie",
    bookRating: Array(4),
    pageCount: 256,
    imageUrl:
      "https://m.media-amazon.com/images/I/71RFyM95qwL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    bookTitle: "Las dos torres",
    bookAuthor: "J.R.R Tolkien",
    bookRating: Array(5),
    pageCount: 352,
    imageUrl:
      "https://m.media-amazon.com/images/I/A1y0jd28riL._AC_UF1000,1000_QL80_.jpg",
  },

  {
    bookTitle: "50 sombras de Grey",
    bookAuthor: "E.L James",
    bookRating: Array(1),
    pageCount: 514,
    imageUrl:
      "https://prodimage.images-bn.com/pimages/9781728260839_p0_v2_s1200x630.jpg",
  },
];

function App() { //todo componente tiene sus imports (arriba) y:

  //parte de lógica y FUNCIONES
  const [books, setBooks] = useState(BOOKS);
  
  //PASOS PARA PASAR DATA DEL COMPONENTE HIJO (en este caso newbook) AL COMPONENTE PADRE (app):
  //1. Pasamos por props una función que declaramos en el componente padre.
  //2. Esa función va a recibir un parámetro, el cual va a ser enviado por el componente hijo en el momento que se invoque.
  //3. Agregar la invocación de la función en el componente hijo

  const saveBookDataHandler = (enteredBookData) => {
    //¿De dónde viene el parámetro enteredBookData? Eso es justamente lo que nos va a aportar el componente hijo. Nos dirigimos a "BookForm". Allí podremos realizar el destructuring de las props para obtener la función onBookDataSaved e invocarla dentro de la función que refiere al submit.
    const bookData = {
      ...enteredBookData,
      id: Math.random().toString(),
    };

    //con este set del array books agrego el nuevo libro al array a lo último.
    setBooks((prev) => [...prev, bookData]);
    //(prev) => [...]: Esto es una función de flecha que toma un parámetro llamado prev. El nombre prev es simplemente una convención utilizada para referirse al estado anterior o previo de la variable books.
    //[...prev, bookData]: Dentro de la función de flecha, esto crea un nuevo array que contiene todos los elementos del estado anterior (prev) y luego agrega bookData al final del array. Esto se hace mediante la expansión del array prev con ...prev y luego añadiendo bookData al final del array resultante.
  };


  //parte de return
  return ( //el return retorna un jsx, similar a un html
    <div >
      <h2>Books Champion App</h2>
      <p>¡Quiero leer libros!</p>
      <div>
        <NewBook onBookDataSaved={saveBookDataHandler} />
        <Books books = {books}/>
      </div>

    </div>
  );
}

export default App //lo exporta para poder abrirlo en cualquier parte, por ejemplo en index.html
