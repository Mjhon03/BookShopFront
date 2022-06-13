import React, {useEffect, useState} from 'react'
import axios from 'axios'


export const DataTableBook = () => {

    const [data, setData] = useState([])

    const dataUsers = (() => {
        axios.get('https://localhost:44352/api/Libro')
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
        axios.delete(`https://localhost:44352/api/Libro/${e.target.id}`)
            .then(response => {
                console.log(response.data);
                dataUsers()
            }).catch(ex => {
                console.log(ex);
            })
    })
    return (
        <div>
            <div className='addnewbook'>
                <button className='btnAddNewBook'>Agregar nuevo libro</button>
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
                                <td><button id={book.idLibro}>Actualizar</button></td>
                                <td><button id={book.idLibro} onClick={deleteUser}>Eliminar</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
)
}
