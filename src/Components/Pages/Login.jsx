import React from 'react';
import { Footer } from '../Layout/Footer/Footer.jsx';
import { Header } from '../Layout/Header/Header.jsx';
import { SingIn } from '../Layout/SingIn/SingIn.jsx';

export const Login = () => {
    return (
    <div className='loginContainer'>
        <Header/>
        <SingIn/>
        <Footer/>
    </div>
)
}
