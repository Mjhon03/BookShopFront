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

    const [actualnombres, setactualnombres] = useState("")
    const [actualapellidos, setactualapellidos] = useState("")
    const [actualdocumento, setactualdocumento] = useState(0)
    const [actualcorreo, setactualcorreo] = useState("")
    const [actualdireccion, setactualdireccion] = useState("")
    const [actualfechaNacimiento, setactualfechaNacimiento] = useState("")

    const changeModal = () => {
        setVisibility(true)
    }
    
    const closeModal = () => {
        setVisibility(false)
    }

    const updateUser = () =>{
        axios.put(`https://localhost:44352/api/Clientes/${idUser}`, {
            "nombres":nombres,
            "apellidos":apellidos,
            "documento":documento,
            "correo":correo,
            "contrasenna":contrasenna,
            "direccion":direccion,
            "fechaNacimiento":fechaNacimiento,
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
        axios.get(`https://localhost:44352/api/Clientes/${idUser}`)
        .then(response => {
            console.log(response.data);
            setactualnombres(response.data.nombres)
            setactualapellidos(response.data.apellidos)
            setactualdocumento(response.data.documento)
            setactualcorreo(response.data.correo)
            setactualdireccion(response.data.direccion)
            setactualfechaNacimiento(response.data.fechaNacimiento)
        })
        .catch(ex => {
            console.log(ex);
        })
    }

    useEffect(() => {actualInfo()},[idUser])

    return (
        <>
        <ProfileCardButton onClick={() => changeModal()}>Actualizar informacion</ProfileCardButton>
        {visibility &&
            <Overlay>
            <Modal>
            <div className="header-modal">
                <FontAwesomeIcon className='header-modal-icon' onClick={closeModal} icon={faArrowRightFromBracket}></FontAwesomeIcon>
            </div>
                <div className="modal-content-item">
                    <h1 className='create-title'>Actualizar informacion</h1>
                    <div className='create-content'> 
                        <div className='create-content-item'>
                            <label className='create-content-item-label'>Nombre</label>
                            <input className='create-content-item-input' type='text'  onChange={(e)=>{setnombres(e.target.value)}} value={actualnombres}></input>
                            <label className='create-content-item-label'>Apellidos</label>
                            <input className='create-content-item-input' type='text' onChange={(e)=>{setapellidos(e.target.value)}} value={actualapellidos}></input>
                            <label className='create-content-item-label'> Documento</label>
                            <input className='create-content-item-input' type='numbers' onChange={(e)=>{setdocumento(parseInt(e.target.value));}} value={actualdocumento}></input>
                            <label className='create-content-item-label'>Correo</label>
                            <input className='create-content-item-input' type='email' onChange={(e)=>{setcorreo(e.target.value)}} value={actualcorreo}></input>
                            <label className='create-content-item-label'>Contraseña</label>
                            <input className='create-content-item-input' type='password' onChange={(e)=>{setcontrasenna(e.target.value)}} ></input>
                            <label className='create-content-item-label'>Dirección</label>
                            <input className='create-content-item-input' type='text' onChange={(e)=>{setdireccion(e.target.value)}} value={actualdireccion}></input>
                            <label className='create-content-item-label'>Fecha nacimiento</label>
                            <input className='create-content-item-input' type='text' onChange={(e)=>{setfechaNacimiento(e.target.value)}} placeholder='aa-dd-mm' value={actualfechaNacimiento}></input>
                        </div>
                        <div className='create-content-updateItem'>
                            <button className='create-content-item-button' onClick={()=>{updateUser()}}>Actualizar informacion</button>
                        </div>
                    </div>
                </div>
            </Modal>
        </Overlay>
        }
    </>
)
}