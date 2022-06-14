import React, {useEffect, useState} from 'react'
import axios from 'axios'
import './DataTableUsers.css'
import { ModalCreateUser } from '../../Modal/ModalCreateUser/ModalCreateUser'
import { ModalUpdateUser } from '../../Modal/ModalUpdateUser/ModalUpdateUser'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import swal from 'sweetalert'



export const DataTableUsers = () => {

    const [data, setData] = useState([])

    const dataUsers = (() => {
        axios.get('http://bookshopnew.somee.com/api/Clientes')
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
        console.log(e.target.id);
        swal({
            title: "¿Estás seguro?",
            text: "Una vez eliminado no podrás recuperarlo",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
        .then((willDelete) => {
            if (willDelete) {
            axios.delete(`http://bookshopnew.somee.com/api/Clientes/${e.target.id}`)
                .then(response => {
                    dataUsers()
                }).catch(ex => {
                    console.log(ex);
                })
            swal("Eliminado", {
                icon: "success",
            });
            } 
        });
    })


    return (
        <div className='totalInfo'>
            <div className='addnewuser'>
                <ModalCreateUser />
            </div>
            <div className='tableData'>
                <table className='tableUsers'>
                        <tr>
                            <th>Id</th>
                            <th>Nombres</th>
                            <th>Apellidos</th>
                            <th>Documento</th>
                            <th>Correo</th>
                            <th>Direccion</th>
                            <th>Fecha nacimiento</th>
                            <th>Libros encargados</th>
                            <th>Prestamo</th>
                            <th>Actualizar</th>
                            <th>Eliminar</th>
                        </tr>
                        {data.map((user) => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.nombres}</td>
                                <td>{user.apellidos}</td>
                                <td>{user.documento}</td>
                                <td>{user.correo}</td>
                                <td>{user.direccion}</td>
                                <td>{user.fechaNacimiento}</td>
                                <td>{user.librosEncargados}</td>
                                <td>{user.prestamo}</td>
                                <td><ModalUpdateUser idUser={user.id}/></td>
                                <td><button className='btn-delete' id={user.id} onClick={deleteUser}><FontAwesomeIcon icon={faTrash} /></button></td>
                            </tr>
                        ))}
                </table>
            </div>
        </div>
)
}
