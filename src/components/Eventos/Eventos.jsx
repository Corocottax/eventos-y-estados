import React from 'react'
import "./Eventos.scss"

const Eventos = () => {

    const saludar = (nombre) => {
        console.log(`HOLA ${nombre}!`);
    }

  return (
    <div>
        <button onClick={() => saludar("DANIEL")} >Saludar</button>
        <input type="text" onInput={() => saludar ("FRANCISCO")}></input>
    </div>
  )
}

export default Eventos