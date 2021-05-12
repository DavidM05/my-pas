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
            <MateriaTable title="ESE Carmen Emilia Ospina"
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
                    onClick:(event, rowData)=>window.confirm('Eliminar: '+rowData.name+'?')
                }
            ]}
            options={{
                actionsColumnIndex:-1
            }}
            localization={{
                header:{
                    actions: 'Acciones'
                }
            }}
            />
        </div>
    )
}   