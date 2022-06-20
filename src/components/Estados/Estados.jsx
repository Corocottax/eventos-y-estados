import React, { useState } from 'react'
import "./Estados.scss"

const Estados = () => {

  // Variable normal
  let contadorVariable = 0;

  //setter de mi variable contador
  /* contadorVariable = 5; */

  //getter de mi variable contador
  /* console.log(contadorVariable); */
  console.log("Me renderizo");

  const restarVariable = () => {
    contadorVariable--;
    console.log(contadorVariable);
  }

  const sumarVariable = () => {
    contadorVariable++;
    console.log(contadorVariable);
  }

  // Estado (variable react lo interpreta de tal manera que cuando su valor cambie se va a volver a renderizar mi componente) 
  const [contador, setContador] = useState(0);

  const restar = () => {
    setContador(contador - 1);
  }

  const sumar = () => {
    setContador(contador + 1);
  }

  return (
    <>
      <div className='estados'>
        <h4>Estado</h4>
        <button onClick={() => restar()}>-1</button>
        <h3>{contador}</h3>
        <button onClick={() => sumar()}>+1</button>
      </div>
      <div className='estados'>
        <h4>Variable</h4>
        <button onClick={() => restarVariable()}>-1</button>
        <h3>{contadorVariable}</h3>
        <button onClick={() => sumarVariable()}>+1</button>
      </div>
    </>
  )
}

export default Estados