import React, { useEffect, useContext, useState } from 'react'
import { Overlay, Modal, ProfileCardButton } from '../../StyledComponents/Overlay/StyledComponents.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';


export const ModalCreateUser = () => {

    const [visibility, setVisibility] = useState(false)

    const changeModal = () => {
        setVisibility(true)
    }
    
    const closeModal = () => {
        setVisibility(false)
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
                            <input className='create-content-item-input' type='text'></input>
                        </div>
                    </div>
                </div>
            </Modal>
        </Overlay>
        }
    </>
)
}
