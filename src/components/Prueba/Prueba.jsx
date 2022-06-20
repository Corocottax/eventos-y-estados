import React, { useState } from 'react'
import "./Prueba.scss"

const Prueba = () => {

    console.log("hola soy prueba");

    const alumnos1 = [
        "Adrian",
        "Daniel Jara",
        "Daniel Moreno",
        "Dulce"
    ]

    const alumnos2 = [
        "Gabriela",
        "Diego Castillo",
        "Raquel",
        "Esther"
    ]

    let listadoAlumnos = 1;

    const [alumnos, setAlumnos] = useState(1);
    const [estadoPrueba, setEstadoPrueba] = useState("valor inicial de mi estado estadoPrueba");

    const cambiarListado = () => {
        if (alumnos === 1) {
            setAlumnos(2);
        } else {
            setAlumnos(1);
        }
    }

    return (
        <>
            <div className='botones'>
                <button onClick={() => cambiarListado()}>CAMBIAR LISTADO DE ALUMNOS</button>
            </div>
            <p>{alumnos1[0]}</p>
            {(alumnos === 1) ? <div className='listaAlumnos'>
                {alumnos1.map((alumno) => {
                    return (<p key={alumno}>{alumno}</p>)
                })}
            </div> : <div className='listaAlumnos2'>
                {alumnos2.map((alumno) => {
                    return (<p key={alumno}>{alumno}</p>)
                })}
            </div>}
        </>

    )
}

export default Prueba