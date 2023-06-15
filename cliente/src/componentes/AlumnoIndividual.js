import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'

function AlumnoIndividual({ alumno }) {

    const navegar = useNavigate();

    function borrarAlumno(_id) {

        axios.post('/borraralumno', { _id: _id })
            .then(res => {
                console.log(res.data)
                Swal.fire('LISTO!', 'El usuario fue ELIMINADO')
                navegar('/home');
            }).catch(error => console.log(error))
    }

    return (

        <tr key={alumno._id}>
            <td>{alumno.nombre}</td>
            <td>{alumno.apellido}</td>
            <td>{alumno.dni}</td>
            <td>{alumno.direccion.calle}</td>
            <td>{alumno.direccion.numero}</td>
            <td>{alumno.direccion.codigo_postal}</td>
            <td>{alumno.tutor}</td>
            <td>{alumno.genero}</td>
            <td className="text-end">
                <Link to={`/editaralumno/${alumno._id}`}>
                    <button type="button" className="btn btn-success me-2">
                        EDITAR
                    </button>
                </Link>
                <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => {
                        borrarAlumno(alumno._id);
                    }}
                >
                    BORRAR
                </button>
            </td>
        </tr>

    )
}

export default AlumnoIndividual