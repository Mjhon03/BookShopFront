import React, {useEffect, useState} from 'react'
import axios from 'axios';
import { ModalCreateBook } from '../../Modal/ModalCreateBook/ModlaCreateBook';
import { ModalUpdateBook } from '../../Modal/ModalUpdateBook/ModalUpdateBook';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import swal from 'sweetalert'

export const DataTableBook = () => {

    const [data, setData] = useState([])

    const dataUsers = (() => {
        axios.get('https://localhost:44352/api/Libro')
            .then(response => {
                setData(response.data)
            }).catch(ex => {
                console.log(ex);
            })
    })

    useEffect(() => {
        dataUsers()
    },[])


    const deleteUser = ((e) => {
        swal({
            title: "¿Estás seguro?",
            text: "Una vez eliminado no podrás recuperarlo.",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
        .then((willDelete) => {
            if(willDelete){
            axios.delete(`https://localhost:44352/api/Libro/${e.target.id}`)
            .then(response => {
                console.log(response.data);
                dataUsers()
            }).catch(ex => {
                console.log(ex);
            })
            }
        })
        
    })
    return (
        <div className='totalInfo'>
            <div className='addnewuser'>
                <ModalCreateBook />
            </div>
            <div>
                <table className='tableUsers'>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Nombre</th>
                            <th>Autor</th>
                            <th>Cantidad de paginas</th>
                            <th>Fecha de lanzamiento</th>
                            <th>Genero</th>
                            <th>Actualizar</th>
                            <th>Eliminar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((book) => (
                            <tr key={book.idLibro}>
                                <td>{book.idLibro}</td>
                                <td>{book.nombre}</td>
                                <td>{book.autor}</td>
                                <td>{book.cantPaginas}</td>
                                <td>{book.fechaLanzamiento}</td>
                                <td>{book.genero}</td>
                                <td><ModalUpdateBook idBook={book.idLibro}/></td>
                                <td><button className='btn-delete' id={book.idLibro} onClick={deleteUser}><FontAwesomeIcon icon={faTrash} onClick={deleteUser} /></button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
)
}
