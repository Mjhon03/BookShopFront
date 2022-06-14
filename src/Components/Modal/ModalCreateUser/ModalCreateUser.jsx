import React, { useState } from 'react'
import './ModalCreateUser.css'
import { Overlay, Modal, ProfileCardButton } from '../../StyledComponents/Overlay/StyledComponents.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { Alert } from '../../../Alert';
import axios from 'axios';

export const ModalCreateUser = () => {

    const [visibility, setVisibility] = useState(false)

    const [nombres, setnombres] = useState("")
    const [apellidos, setapellidos] = useState("")
    const [documento, setdocumento] = useState(0)
    const [correo, setcorreo] = useState("")
    const [direccion, setdireccion] = useState("")
    const [contrasenna, setcontrasenna] = useState("")
    const [fechaNacimiento, setfechaNacimiento] = useState("")


    const changeModal = () => {
        setVisibility(true)
    }
    
    const closeModal = () => {
        setVisibility(false)
    }

    const createUser = () =>{
        axios.post('http://bookshopnew.somee.com/api/Clientes', {
            "nombres":nombres,
            "apellidos":apellidos,
            "documento":documento,
            "correo":correo,
            "contrasenna":contrasenna,
            "direccion":direccion,
            "fechaNacimento":fechaNacimiento,
            "librosEncargados":0
        })
        .then(response => {
            console.log(response.data);
            Alert("El cliente se ha creado correctamente","", "success","Ok")
            closeModal()
            window.location.reload()
        })
        .catch(ex => {
            console.log(ex);
        })
    }

    return (
        <>
        <ProfileCardButton onClick={() => changeModal()}>Agregar nuevo cliente</ProfileCardButton>
        {visibility &&
            <Overlay>
            <Modal>
            <div className="header-modal">
                <FontAwesomeIcon className='header-modal-icon' onClick={closeModal} icon={faArrowRightFromBracket}></FontAwesomeIcon>
            </div>
                <div className="modal-content-item">
                    <h1 className='create-title'>Nuevo cliente</h1>
                    <div className='create-content'> 
                        <div className='create-content-item'>
                            <label className='create-content-item-label'>Nombre</label>
                            <input className='create-content-item-input' type='text' onChange={(e)=>{setnombres(e.target.value)}}></input>
                            <label className='create-content-item-label'>Apellidos</label>
                            <input className='create-content-item-input' type='text' onChange={(e)=>{setapellidos(e.target.value)}}></input>
                            <label className='create-content-item-label'>Documento</label>
                            <input className='create-content-item-input' type='numbers' onChange={(e)=>{setdocumento(parseInt(e.target.value));}}></input>
                            <label className='create-content-item-label'>Correo</label>
                            <input className='create-content-item-input' type='email' onChange={(e)=>{setcorreo(e.target.value)}}></input>
                            <label className='create-content-item-label'>Contraseña</label>
                            <input className='create-content-item-input' type='password' onChange={(e)=>{setcontrasenna(e.target.value)}}></input>
                            <label className='create-content-item-label'>Dirección</label>
                            <input className='create-content-item-input' type='text' onChange={(e)=>{setdireccion(e.target.value)}}></input>
                            <label className='create-content-item-label'>Fecha nacimiento</label>
                            <input className='create-content-item-input' type='text' onChange={(e)=>{setfechaNacimiento(e.target.value)}} placeholder='aa-dd-mm'></input>
                        </div>
                        <div className='create-content-createItem'>
                            <button className='create-content-item-button' onClick={()=>{createUser()}}>Crear cliente</button>
                        </div>
                    </div>
                </div>
            </Modal>
        </Overlay>
        }
    </>
)
}