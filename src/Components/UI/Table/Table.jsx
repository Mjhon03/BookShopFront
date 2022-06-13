import React from 'react'
import ReactTable from "react-table";  

export const Table = (data, colums) => {
    return (
    <div className='tableData'>
        <ReactTable
        data={data}
        columns={colums}
        />
    </div>
)
}
