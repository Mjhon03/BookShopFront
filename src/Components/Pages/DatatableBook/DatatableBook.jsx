import React from 'react'
import { Footer } from '../../Layout/Footer/Footer.jsx';
import { Header } from '../../Layout/Header/Header.jsx';
import { DataTableBook } from '../../Layout/DataTableBook/DataTableBook.jsx';
import { DataOpcion } from '../../Layout/DataOpcion/DataOpcion.jsx';

export const DatatableBook = () => {
    return(
    <div>
        <Header/>
        <DataOpcion/>
        <DataTableBook/>
        <Footer/>
    </div>
)
}