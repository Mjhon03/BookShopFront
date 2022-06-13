import React from 'react'
import { Footer } from '../../Layout/Footer/Footer.jsx';
import { Header } from '../../Layout/Header/Header.jsx';
import { DataTableUsers } from '../../Layout/DataTableUsers/DataTableUsers'
import { DataOpcion } from '../../Layout/DataOpcion/DataOpcion.jsx';

export const Datatable = () => {
    return(
    <div>
        <Header/>
        <DataOpcion/>
        <DataTableUsers/>
        <Footer/>
    </div>
)
}
