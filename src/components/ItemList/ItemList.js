import React from 'react';



export default function ItemList({result}){
    
    

    return(<>

  
      {
      result.map( (res,index) => (
          
        <tr key={index}>
            <td >{res.KarCod}</td>
            <td >{res.contrato}</td>
            <td >{res.escritura}</td>
            <td >{res.estado}</td>
            <td >{res.estadoRRPP}</td>
            <td >{res.fechaIngreso}</td>
            <td >{res.indicacion}</td>
            <td >{res.nroExp}</td>
            <td >{res.reqDigitacion}</td>
            
           
        </tr>
      ))
    }

    
    </>)
}