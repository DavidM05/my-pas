import React from 'react'
import MateriaTable from 'material-table'

export const Table=()=>{
    const data=[
        {name:'David', lastName:'Mosquera', email:'123456@7890', password:'#'},
        {name:'German', lastName:'Garzon', email:'123456@7899', password:'#'},
        
    ]
    const columns=[
        {
        title:'Nombre',field:'name'
        },
        {
        title:'Apellido', field:'lastName'
        },
        {
        title:'Email',field:'email'
        },
        {
        title:'Contraseña', field:'password'
        }
        
    ]
    return(
        <div>
            <MateriaTable title="ESe Carmen Emilia Ospina Tabla2"
            data={data}
            columns={columns}
            actions={[
                {
                    icon: 'edit',
                    tooltip: 'Editar Usuario',
                    onClick:(event, rowData)=>alert('Editar: '+rowData.name)
                },
                {
                    icon: 'delete',
                    tooltip: 'Eliminar',
                    onClick:(event, rowData)=>alert('Eliminar: '+rowData.name)
                }
            ]}
            />
        </div>
    )
}   