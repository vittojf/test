import React from 'react'
import {Table} from 'react-bootstrap'
const TableView =({children})=>{
    return(<Table striped bordered hover variant="dark">
    <thead className="text-white">
      <tr>
        <th>ID</th>
        <th>Contrato</th>
        <th>Escritura</th>
        <th>Estado</th>
        <th>Estado de Relaciones Publicas</th>
        <th>Fecha de Ingreso</th>
        <th>Indicacion</th>
        <th>Numero de Expiracion</th>
        <th>Requerimientos de Digitación</th>
      </tr>
    </thead>
    <tbody>
        {children}
    </tbody>
    </Table>
    )
}

export default TableView;