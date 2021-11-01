import React,{useEffect,useState} from 'react'
import SpinnerLoad from '../SpinnerLoad/SpinnerLoad'
import ItemList from '../ItemList/ItemList';
import TableView from '../TableView/TableView';

import { Link} from 'react-router-dom'


export default function ItemListContainer (){

   
const [loading, setLoading] = useState(false);
const [item, setItem] = useState([]);

const url = 'http://bloomcker.com:5757/api/kardcloud/mantenimiento/filtro/%7B%7D/1'



useEffect(() => {
    setLoading(false)
    fetch(url)
    .then(res=> res.json())
    .then(data=>{
        setItem(data) 
        setLoading(true)
        
    }, (error)=>{
        setItem([])
        setLoading(true)
         console.log(error)
    })

}, [url]);

    return(
    <React.Fragment>
        <TableView>
        {
            !loading? <tr className="text-center"><td colSpan="9"><SpinnerLoad/></td></tr>:<ItemList result={item.data}/>
        }
        
        </TableView>
        
                <Link to='/pag/2' className="btn btn-primary "> Siguiente</Link>
              
           

    </React.Fragment>
    )
}