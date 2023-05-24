//UTILIZANDO PROPS
/*
const Nieto = ({herencia}) => {
  return (
    <div>
        <p>Mi herencia en efectivo es de:  {herencia.efectivo} </p>
        <p>Recibi estos vehiculos: {herencia.vehiculos} </p>
        <p>Y esta cantidad de propiedades: {herencia.propiedades} </p>
    </div>
  )
}

export default Nieto

*/
//UTILIZANDO EL CONSUMER
/*
import React from 'react'
import { Contexto } from '../../context/context'

const Nieto = () => {
  return (
    <Contexto.Consumer>
        {
            (herencia) => (
                <div>
                    <p>En efectivo recibi: {herencia.efectivo} </p>
                    <p>Todos estos vehiculos: {herencia.vehiculos} </p>
                    <p>Y estas casas: {herencia.propiedades} </p>
                </div>
            )
        }
        
    </Contexto.Consumer>
  )
}
//Para poder acceder a la información tenemos que usar una función de renderizado. 

export default Nieto
*/

//UTILIZANDO EL HOOK useContext
//En lugar de usar el Consumer y una función de renderizado yo puedo utilizar un hook llamado useContext. 

//1) Importamos el contexto. 
//2) Importamos el Hook useContext. 
//3) Creamos una variable que almacene el valor del contexto. Llamo al Hook y le paso el contexto como argumento. 

import { Contexto } from "../../context/context"
import { useContext } from "react"

const Nieto = () => {
    const herencia = useContext(Contexto);

  return (
    <div>
        <p>Mi abuelo me dejo: {herencia.efectivo} </p>
        <p>Choque todos estos autos: {herencia.vehiculos} </p>
        <p>Y estas casas estoy usando: {herencia.propiedades} </p>
        <p>Soy soltero</p>
    </div>
  )
}

export default Nieto
