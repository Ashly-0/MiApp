import { useState } from 'react';
import './Miapp.css';

const App = () => {

  const [Contador, setContador] = useState(0) //Se almacena un valor, Valor(first)-Función que modifica valor(setfirst)

  return (
 //Fragment <> </>
  <> 
    <h1>Hola mundo</h1>
    <p>Ashly Bairan</p>
    <h3>Contador: {Contador}</h3>
    <button id="btnIncrementa" className="btns" onClick={ () => setContador(Contador+1)}>Incrementa</button>
    <button id="btnDecrementa" className="btns" onClick={ () => setContador(Contador-1)}>Decrementa</button>
    <button id="btReinicia" className="btns" onClick={ () => setContador(0)}>Reinicia</button>
  </>
  )
}

export default App;