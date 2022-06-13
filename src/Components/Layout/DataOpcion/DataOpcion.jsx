import React from 'react';
import {useNavigate } from 'react-router-dom';

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
            <button onClick={changePage}>Clientes</button>
        </div>
        <div className='bookdata'>
            <button onClick={changePageBook}>Libros</button>
        </div>
    </div>
)
}
