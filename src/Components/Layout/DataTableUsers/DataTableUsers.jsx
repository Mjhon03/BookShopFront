import React, {useEffect, useState} from 'react'
import axios from 'axios'
import './DataTableUsers.css'
import { ModalCreateUser } from '../../Modal/ModalCreateUser/ModalCreateUser'



export const DataTableUsers = () => {

    const [data, setData] = useState([])

    const dataUsers = (() => {
        axios.get('https://localhost:44352/api/Clientes')
            .then(response => {
                console.log(response.data);
                setData(response.data)
            }).catch(ex => {
                console.log(ex);
            })
    })

    useEffect(() => {
        dataUsers()
    },[])


    const deleteUser = ((e) => {
        axios.delete(`https://localhost:44352/api/Clientes/${e.target.id}`)
            .then(response => {
                console.log(response.data);
                
            }).catch(ex => {
                console.log(ex);
            })
    })
    return (
        <div>
                <div className='addnewuser'>
                <ModalCreateUser />
            </div>
            <div>
                <table className='tableUsers'>
                    <thead>
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
                    </thead>
                    <tbody>
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
                                <td><button id={user.id}>Actualizar</button></td>
                                <td><button id={user.id} onClick={deleteUser}>Eliminar</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
    </div>
)
}
