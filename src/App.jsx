import './App.css';
import Abuelo from './componentes/Abuelo/Abuelo';
import { Contexto } from './context/context';

//Aprendimos en estas clases que podemos enviar información entre componentes a traves de las props. Pero estas se envian de forma unidireccional de un componente padre a un componente h ijo. 

//Esto en aplicaciones grandes con muchas capas de componentes se convierte en una tarea tediosa. 

//EJEMPLO "HERENCIA FAMILIAR".

//Para solucionar esto React presenta una nueva herramienta llamada Contexto. 
//En el contexto podemos almacenar datos o funciones que esten dispinibles para toda la app sin necesidad de pasar por todas las jerarquias de componentes de la APP. 

//El contexto trabaja con dos partes principales: el proveedor y el consumidor. 

//El provider es un componente que proporciona los datos que se van a compartir y el consumer es un componente que consume los datos proporcionados por el proveedor. 

function App() {
  const herencia = {
    efectivo: 10000000,
    propiedades: 8,
    vehiculos: 10
  }

  return (
    <>
      <Contexto.Provider value={herencia}>
        <Abuelo herencia={herencia} />
      </Contexto.Provider>

    </>
  );
}
//En el value paso la información que quiero transferir. 

export default App;
