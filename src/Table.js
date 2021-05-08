import React from 'react'
import MateriaTable from 'material-table'

export const Table=()=>{
    const data=[
        {name:'David', cedula:'1234567890'},
        {name:'German', cedula:'1234567899'},
        
    ]
    const columns=[
        {
        title:'Nombre',field:'name'
        },
        {
        title:'Cedula',field:'cedula'
        }
    ]
    return(
        <div>
            <MateriaTable title="ESe Carmen Emilia Ospina"
            data={data}
            columns={columns}
            />
        </div>
    )
}   