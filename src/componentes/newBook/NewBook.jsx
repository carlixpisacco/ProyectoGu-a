import { useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import PropTypes from "prop-types";

//La prop onBookDataSaved contendrá a la función saveBookDataHandler (la cual está en el componente padre App), la cual se encargará de recibir el objeto con el nuevo libro, copiar los contenidos de ese objeto en otro, que además le agregue un id random
const NewBook = ({ onBookDataSaved }) => {

    //creo los useState de cada item del formulario, es decir los "estados". Esto nos permitirá llevar un registro interno del "event.target.value" en el componente mismo
    //inicializamos a cada uno de los estados con una cadena de texto vacía. Esto es debido a que los valores obtenidos en elementos input siempre van a ser guardados en el objeto event como strings, incluso si el valor guardado es un número.
    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredAuthor, setEnteredAuthor] = useState("");
    const [enteredRating, setEnteredRating] = useState("");
    const [enteredPageCount, setEnteredPageCount] = useState("");
    const [enteredImageUrl, setEnteredImageUrl] = useState("");

    //aqui van todas las funciones asociadas a los onChange
    const changeTitleHandler = (event) => {
        setEnteredTitle(event.target.value);
        //event.target.value va a guardar siempre el último valor que se encuentra en el input en este momento.. De esta manera, siempre podremos acceder a lo último que ingresó el usuario.
        // el objeto event nos aporta MUCHISIMA información (si ponemos console.log (event) podemos verlo) sobre el evento sucedido, pero a nosotros nos interesa lo guardado dentro de target, en la propiedad value.
    };

    const changeAuthorHandler = (event) => {
        setEnteredAuthor(event.target.value);
    };

    const changeRatingHandler = (event) => {
        setEnteredRating(event.target.value);
    };

    const changePageCountHandler = (event) => {
        setEnteredPageCount(event.target.value);
    };

    const changeImageUrlHandler = (event) => {
        setEnteredImageUrl(event.target.value);
    };

    //esta función es la que está asociada al onsubmit del formulario, es decir al submit.
    const submitBookHandler = (event) => {
        event.preventDefault(); // event.preventDefault() previene que se dispare un evento automático, en el cuál la página luego de realizar submit vuelve a recargarse. Como no queremos realizar un reload, preventDefault() nos permite evitar ese comportamiento.

        //luego creamos el objeto con los valores actuales del formulario, este objeto es el que se pasará como parámetro a la función "onBookDataSaved", pasada como prop al componente, esta función esta en el componente App y es la encargada de agregar el nuevo objeto "book" al array books
        const bookData = {
            bookTitle: enteredTitle,
            bookAuthor: enteredAuthor,
            bookRating: enteredRating !== "" ? Array(parseInt(enteredRating, 10)).fill("*") : Array(0), /* chequea que no esté vacía la cadena y lo crea conforme al array books */
            pageCount: parseInt(enteredPageCount, 10), /*convierte lo ingresado en numero entero ya que los input nos devuelven cadenas de texto, y le pone base 10, es decir lo trata como número decimal */
            imageUrl: enteredImageUrl,
        };

        onBookDataSaved(bookData); //aqui llamo a la función pasada como prop en el componente y le paso el objeto creado con los valores ingresados por el usuario. Esta es la forma en que le voy a pasar la data de NewBook (componente hijo) a App (componente padre)
        setEnteredTitle(""); //vuelvo a vaciar los input para que no quede el último valor ingresado por el usuario. 
        setEnteredAuthor("");
        setEnteredRating("");
        setEnteredPageCount("");
        setEnteredImageUrl("");
    }

    const [showForm, setShowForm] = useState(false); // se declara un estado llamado showForm utilizando el hook useState. Inicialmente, se establece en false. Este estado se utilizará para controlar si el formulario debe mostrarse o no.

    //Se define una función handleClick. Esta función se ejecutará cuando se haga clic en el botón.
    // Cuando se llama a handleClick, cambia el estado de showForm al contrario del estado actual. Si showForm es false, se establecerá como true, y viceversa.
    
    const handleClick = () => {
        setShowForm(!showForm); //aqui cambio al estado contrario mediante !
      }

    return (
        <>
      <Button onClick={handleClick /*acá asocio el boton a la función */}> 
        {showForm ? "Esconder" : "Agregar libro" /*El texto del botón está condicionado por el valor de showForm. Si showForm es true, el texto del botón será "Esconder"; de lo contrario, será "Agregar libro". */} 
      </Button>

      {showForm && (/* Esta es una expresión condicional en JSX. Si showForm es true, se renderiza el contenido que sigue a continuación. De lo contrario, no se renderiza. En este caso si showForm es true, significa que el botón ha sido clicado y se desea mostrar el formulario, así que se renderizará el contenido que sigue. */
        <Card className="m-4 w-50" bg="success">
            <Card.Body>
                <Form className="text-white" onSubmit={submitBookHandler}>
                    <Row>
                        <Col md={6}>
                            <Form.Group className="mb-3" controlId="bookTitle">
                                <Form.Label>Título</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Ingresar título"
                                    onChange={changeTitleHandler /*esta función al igual que todas las siguientes se van a ejecutar cada vez que ingresemos una letra, número o seleccionemos algo dentro del formulario */}
                                    value={enteredTitle} /* en el value irá el valor de la variable generada por el UseState*/
                                />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group className="mb-3" controlId="bookAuthor">
                                <Form.Label>Autor</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Ingresar autor"
                                    onChange={changeAuthorHandler}
                                    value={enteredAuthor}
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <Form.Group className="mb-3" controlId="bookRating">
                                <Form.Label>Puntuación</Form.Label>
                                <Form.Control
                                    type="number"
                                    placeholder="Ingresar cantidad de estrellas"
                                    max={5}
                                    min={0}
                                    onChange={changeRatingHandler}
                                    value={enteredRating}
                                />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group className="mb-3" controlId="bookPageCount">
                                <Form.Label>Cantidad de páginas</Form.Label>
                                <Form.Control
                                    type="number"
                                    placeholder="Ingresar cantidad de páginas"
                                    min={1}
                                    onChange={changePageCountHandler}
                                    value={enteredPageCount}
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="justify-content-between">
                        <Form.Group className="mb-3" controlId="bookImageUrl">
                            <Form.Label>URL de imagen</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Ingresar url de imagen"
                                onChange={changeImageUrlHandler}
                                value={enteredImageUrl}
                            />
                        </Form.Group>
                    </Row>
                    <Row className="justify-content-end">
                        <Col md={3} className="d-flex justify-content-end">
                            <Button variant="primary" type="submit">
                                Agregar lectura
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </Card.Body>
        </Card>
      )}
      </>
    );
  };


NewBook.propTypes = {
    onBookDataSaved: PropTypes.func.isRequired,
};



export default NewBook;