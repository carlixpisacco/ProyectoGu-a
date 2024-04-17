import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

//ESTE ARCHIVO ES UN COMPONENTE!!
//se accede al div del index.html, mediante el id (ver en notas del apunte que funcion cumple el index.html)
//es el punto de conexión entre el html y todo nuestro código
//se pasa el elemento (en este caso el div del index.html) donde vamos a querer rendelizar (mostrar por pantalla) toda nuestra aplicación

ReactDOM.createRoot(document.getElementById('root')).render(
  //react.strictmode tmb es un componente con etiqueta de apertura y cierre, si no estuviera el progama funciona, pero es una buena práctica encapsular a toda la app dentro de ese componente. 
  //app tmb es otro componente (app.jsx) 
  <React.StrictMode> 
    <App />
  </React.StrictMode>,
)
