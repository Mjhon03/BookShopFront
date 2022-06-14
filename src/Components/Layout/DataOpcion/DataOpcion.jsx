import React from 'react';
import {useNavigate } from 'react-router-dom';
import './DataOpcion.css';
export const DataOpcion = () => {

    const navigate = useNavigate();

    const changePage = () => {
        navigate('/home');
    }
    const changePageBook = () => {
        navigate('/book');
    }

    return (
    <div className='dataoption'>
        <div className='userdata'>
            <button className='btn-user' onClick={changePage}>Clientes</button>
        </div>
        <div className='bookdata'>
            <button className='btn-user' onClick={changePageBook}>Libros</button>
        </div>
    </div>
)
}
