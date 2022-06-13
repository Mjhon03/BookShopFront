import React, { useEffect, useContext, useState } from 'react'
import { Overlay, Modal, ProfileCardButton } from '../../StyledComponents/Overlay/StyledComponents.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { Alert } from '../../../Alert';
import axios from 'axios';

export const ModalCreateUser = () => {

    const [visibility, setVisibility] = useState(false)

    const [nombres, setnombres] = useState("")
    const [apellidos, setapellidos] = useState("")
    const [documento, setdocumento] = useState()
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
        axios.post('https://localhost:44352/api/Clientes', {
            "nombres":{nombres},
            "apellidos":{apellidos},
            "documento":{documento},
            "correo":{correo},
            "contrasenna":{contrasenna},
            "direccion":{direccion} ,
            "fechaNacimiento":{fechaNacimiento}
        }).then(response => {
            console.log(response.data);
            Alert("El cliente se ha creado correctamente","", "success","Ok")
            closeModal()
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
                            <label className='create-content-item-label'> Documento</label>
                            <input className='create-content-item-input' type='number' onChange={(e)=>{setdocumento(e.target.value)}}></input>
                            <label className='create-content-item-label'>Correo</label>
                            <input className='create-content-item-input' type='email' onChange={(e)=>{setcorreo(e.target.value)}}></input>
                            <label className='create-content-item-label'>Contraseña</label>
                            <input className='create-content-item-input' type='password' onChange={(e)=>{setcontrasenna(e.target.value)}}></input>
                            <label className='create-content-item-label'>Dirección</label>
                            <input className='create-content-item-input' type='text' onChange={(e)=>{setdireccion(e.target.value)}}></input>
                            <label className='create-content-item-label'>Fecha nacimiento</label>
                            <input className='create-content-item-input' type='date' onChange={(e)=>{setfechaNacimiento(e.target.value)}}></input>
                        </div>
                        <div className='create-content-item'>
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