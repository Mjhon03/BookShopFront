import React, { useState } from 'react'
import { Overlay, Modal, ProfileCardButton } from '../../StyledComponents/Overlay/StyledComponents.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { Alert } from '../../../Alert.js';
import axios from 'axios';

export const ModalUpdateBook = ({idBook}) => {

    const [visibility, setVisibility] = useState(false)

    const [nombre, setnombre] = useState("")
    const [autor, setautor] = useState("")
    const [cantPaginas, setcantPaginas] = useState(0)
    const [fechaLanzamiento, setfechaLanzamiento] = useState("")
    const [genero, setgenero] = useState("")


    const changeModal = () => {
        setVisibility(true)
    }
    
    const closeModal = () => {
        setVisibility(false)
    }

    const createBook = () =>{
        axios.put(`https://localhost:44352/api/Libro/${idBook}`, {
            "nombre":nombre,
            "autor":autor,
            "cantPaginas":cantPaginas,
            "fechaLanzamiento":fechaLanzamiento,
            "genero":genero
        }).then(response => {
            console.log(response.data);
            Alert("El libro se ha creado correctamente","", "success","Ok")
            closeModal()
            window.location.reload()
        })
        .catch(ex => {
            console.log(ex);
        })
    }

    return (
        <>
        <ProfileCardButton onClick={() => changeModal()}>Actualizar libro</ProfileCardButton>
        {visibility &&
            <Overlay>
            <Modal>
            <div className="header-modal">
                <FontAwesomeIcon className='header-modal-icon' onClick={closeModal} icon={faArrowRightFromBracket}></FontAwesomeIcon>
            </div>
                <div className="modal-content-item">
                    <h1 className='create-title'>Actualizar libro</h1>
                    <div className='create-content'> 
                        <div className='create-content-item'>
                            <label className='create-content-item-label'>Nombre</label>
                            <input className='create-content-item-input' type='text' onChange={(e)=>{setnombre(e.target.value)}}></input>
                            <label className='create-content-item-label'>Autor</label>
                            <input className='create-content-item-input' type='text' onChange={(e)=>{setautor(e.target.value)}}></input>
                            <label className='create-content-item-label'>Cantidad de paginas</label>
                            <input className='create-content-item-input' type='numbers' onChange={(e)=>{setcantPaginas(parseInt(e.target.value))}}></input>
                            <label className='create-content-item-label'>Fecha de lanzamiento</label>
                            <input className='create-content-item-input' type='email' onChange={(e)=>{setfechaLanzamiento(e.target.value)}}></input>
                            <label className='create-content-item-label'>Genero</label>
                            <input className='create-content-item-input' type='text' onChange={(e)=>{setgenero(e.target.value)}}></input>
                        </div>
                        <div className='create-content-item'>
                            <button className='create-content-item-button' onClick={()=>{createBook()}}>Actualizar libro</button>
                        </div>
                    </div>
                </div>
            </Modal>
        </Overlay>
        }
    </>
)
}