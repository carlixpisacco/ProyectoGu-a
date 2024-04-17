import './BookItem.css'
import PropTypes from "prop-types";
import { useState } from "react"; //useState es una función del tipo "hook" o "gancho". También se llaman "estados". React brinda muchisimos hooks, todos comienzan con "use"
//IMPORTANTE!! para cambiar la data que posee un componente debemos recurrir si o si al state. Nunca podremos hacer cambios directos en los componentes sin state.
import { Card, Button } from "react-bootstrap"; //defino todo lo que voy a usar en card


//si pongo rafce me construye el componente automáticamente gracias a la extensión
const BookItem = ({ title, author, pageCount, rating, imageUrl }) => {

    const [newTitle, setNewTitle] = useState(title); //lo que buscamos con useState es cambiar el título de los libros es decir lo que sea que vino por props a la cadena de texto "actualizado", para eso debemos tomar lo que está en "title" y reemplazarlo de alguna manera, luego react debe re renderizar el componente y mostrar la nueva cadena para que el usuario lo vea en su pantalla
    //llamamos a useState dentro del componente, en la parte de "lógica", useState va a recibir como parámetro el valor inicial que le queremos dar a la variable que creará React, en este caso le pasamos "title".
    //useState va a retornar un arreglo con dos valores "[newTitle, setNewTitle]" --> 
    //newTitle es nuestra nueva variable ya inicializada (con el valor que pasamos por parámetro)
    //setNewTitle es una función que permite setear (cambiar) el valor de newTitle.
    //Podemos utilizar array destructuring para obtener ambos, ya que en array destructuring solo importa la posición de los elementos
    //Es común que el primer elemento tenga un nombre representativo de lo que es, y el segundo sea la palabra set seguida del nombre del primer elemento.

    const handleClick = () => {
        setNewTitle("Aglo")
        //asi en la función relacionada al onClick llamamos al set del state, y le pasamos como parámetro el nuevo título que queremos actualizar.
      }

      //MUY IMPORTANTE: es necesario que no haya mucho código en el jsx, es decir en el return.
    return (
            <Card className="mx-2" style={{ width: "18rem" }}>
                <Card.Img
                    height={400}
                    variant="top"
                    src={imageUrl !== "" ? imageUrl : "https://bit.ly/47NylZk"}
                />
                <Card.Body>
                    <Card.Title>{newTitle}</Card.Title> {/* aquí imprimo la nueva variable creada por el state */}
                    <Card.Subtitle>{author}</Card.Subtitle>
                    <div>{rating?.length} estrellas</div>
                    <p>{pageCount} páginas</p>
                    <Button className="btn btn-warning" onClick={handleClick}> Actulizar titulo </Button>
                     {/* en los eventos paso como referencia una función que voy a desarrollar en la parte de arriba del componente
                     en donde está toda la lógica, como referencia quiere decir que irá entre llaves sin párentesis, esto hace que 
                     la función handleClick se ejecute cuando el usuario haga click y no en el momento en que la lea el compilador.
                     Por otro lado a todos los eventos es necesario ponerle la palabra HANDLE, ya sea al inicio o al final */}
                </Card.Body>
            </Card>
        
    );
};

BookItem.propTypes = {
    title: PropTypes.string,
    author: PropTypes.string,
    pageCount: PropTypes.number,
    rating: PropTypes.array,
    imageUrl: PropTypes.string,
};

export default BookItem

