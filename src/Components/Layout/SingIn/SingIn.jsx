import React, { useState } from 'react';
import './SingIn.css'
import axios from 'axios'
import {useNavigate } from 'react-router-dom'
import validator from 'validator';
import { Alert } from '../../../Alert';



export const SingIn = () => {

    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailError, setemailError] = useState("")

    const setEventToEmail = ((event) => {
        setEmail(event.target.value)
        if(validator.isEmail(event.target.value)){
            setemailError("")
        }
        else{
            setemailError("El correo no es valido.")
        }
        if (event.target.value === "") {
            setemailError("")
        }
    })

    const SetEventToPassword = ((event) => {
        setPassword(event.target.value)
    })

    const login = ((e) => {
        e.preventDefault();
        axios.post('http://bookshopnew.somee.com/api/Login', {
            "correo" : email,
            "contrasenna" : password
        })
            .then(response => {
                console.log(response.data);
                localStorage.setItem("userInfo", JSON.stringify(response.data))
                navigate('/home') 
                window.location.reload()
            })
            .catch(ex => {
                Alert("Fallo al iniciar sesión","El correo o la contraseña no son correctos.","error", "Ok")
            })
    })

    const validateDataInput = ((e ) => {
        e.preventDefault();
        if(email === "" || password === ""){
            Alert("Inicio de sesión", "Por favor ingrese todos los campos.", "error", "Ok")
        }
        else{
            login(e)
        }
    })
    const enterLogin=(event)=>{
        let charCode = event.keyCode;
        if (charCode===13){
            login()
        }
    }

    return (
        <div className="singIn">
            <div className='singinContainerImg'>
                <img src="https://th.bing.com/th/id/R.f49524a58b6c29ed03e5dcd9269131cf?rik=Xg7sLGLSLqrVlg&riu=http%3a%2f%2fwww.phaidon.com%2fresource%2fbookstore1.jpg&ehk=gtIvzopx57JvFBnGHvr3OdM9jpxkuYyPseKu6ksHTKY%3d&risl=&pid=ImgRaw&r=0" alt="" srcset="" />
                <div className='textImg'>BookShop</div>
            </div>
            <div className='singinContainer'>
                <div className='singinInputs'>
                <div className='logo'>
                    <h2>Inicio de sesión</h2>
                </div>
                <div className='inputs'>
                <input type="email" max="80" required autoFocus className='info-input-login' placeholder="Correo electrónico" onChange={setEventToEmail}></input><br></br>
                    <span style={{color: "red",}}>{emailError}</span>
                    <br></br>
                    <input type="password" minLength='8' required className='info-input-login' placeholder="Contraseña" onChange={SetEventToPassword} onKeyUp={e=>(enterLogin(e))} ></input>
                </div>
                <div className='buttonAcces'>
                <button className="register-submit" onClick={(e) => validateDataInput(e)}>Iniciar sesión</button>
                </div>
                </div>
            </div>
        </div>
)
}
