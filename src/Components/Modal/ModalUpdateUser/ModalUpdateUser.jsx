import React, { useState, useEffect } from 'react'
import { Overlay, Modal, ProfileCardButton } from '../../StyledComponents/Overlay/StyledComponents.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { Alert } from '../../../Alert';
import axios from 'axios';

export const ModalUpdateUser = ({idUser}) => {

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
    const updateUser = () =>{
        axios.put(`http://bookshopnew.somee.com/api/Clientes/${idUser}`, {
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
            Alert("La informacion se ha actualizado","", "success","Ok")
            closeModal()
            window.location.reload()
        })
        .catch(ex => {
            console.log(ex);
        })
    }

    const actualInfo = () =>{
        axios.get(`http://bookshopnew.somee.com/api/Clientes/${idUser}`)
        .then(response => {
            setnombres(response.data[0].nombres)
            setapellidos(response.data[0].apellidos)
            setdocumento(response.data[0].documento)
            setcontrasenna('')
            setcorreo(response.data[0].correo)
            setdireccion(response.data[0].direccion)
            setfechaNacimiento(response.data[0].fechaNacimiento)
        })
        .catch(ex => {
            console.log(ex);
        })
    }

    useEffect(() => {actualInfo()},[visibility===true])

    const validpassword = () =>{
        if (contrasenna==='') {
            Alert("Debe ingresar la contraseña", "Para realizar un cambio es necesario la contraseña", "warning","Ok")
        }
        else{
            updateUser()
        }
    }
    
    return (
        <>
        <ProfileCardButton onClick={() => changeModal()}>Actualizar información</ProfileCardButton>
        {visibility &&
            <Overlay>
            <Modal>
            <div className="header-modal">
                <FontAwesomeIcon className='header-modal-icon' onClick={closeModal} icon={faArrowRightFromBracket}></FontAwesomeIcon>
            </div>
                <div className="modal-content-item">
                    <h1 className='create-title'>Actualizar información</h1>
                    <div className='create-content'> 
                        <div className='create-content-item'>
                            <label className='create-content-item-label'>Nombre</label>
                            <input className='create-content-item-input' type='text'  onChange={(e)=>{setnombres(e.target.value)}} value={nombres}></input>
                            <label className='create-content-item-label'>Apellidos</label>
                            <input className='create-content-item-input' type='text' onChange={(e)=>{setapellidos(e.target.value)}} value={apellidos}></input>
                            <label className='create-content-item-label'> Documento</label>
                            <input className='create-content-item-input' type='numbers' onChange={(e)=>{setdocumento(parseInt(e.target.value));}} value={documento}></input>
                            <label className='create-content-item-label'>Correo</label>
                            <input className='create-content-item-input' type='email' onChange={(e)=>{setcorreo(e.target.value)}} value={correo}></input>
                            <label className='create-content-item-label'>Contraseña</label>
                            <input className='create-content-item-input' type='password' onChange={(e)=>{setcontrasenna(e.target.value)}} value={contrasenna} ></input>
                            <label className='create-content-item-label'>Dirección</label>
                            <input className='create-content-item-input' type='text' onChange={(e)=>{setdireccion(e.target.value)}} value={direccion}></input>
                            <label className='create-content-item-label'>Fecha nacimiento</label>
                            <input className='create-content-item-input' type='text' onChange={(e)=>{setfechaNacimiento(e.target.value)}} placeholder='aa-dd-mm' value={fechaNacimiento}></input>
                        </div>
                        <div className='create-content-updateItem'>
                            <button className='create-content-item-button' onClick={()=>{validpassword()}}>Actualizar información</button>
                        </div>
                    </div>
                </div>
            </Modal>
        </Overlay>
        }
    </>
)
}