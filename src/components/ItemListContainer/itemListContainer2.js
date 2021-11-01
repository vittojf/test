import React,{useEffect,useState} from 'react'
import SpinnerLoad from '../SpinnerLoad/SpinnerLoad'
import ItemList from '../ItemList/ItemList';
import TableView from '../TableView/TableView';
import { Button } from 'react-bootstrap';
import { Link} from 'react-router-dom'

export default function ItemListContainer2 (){

   
const [loading, setLoading] = useState(false);
const [item, setItem] = useState([]);

const url ='http://bloomcker.com:5757/api/kardcloud/mantenimiento/filtro/%7B%7D/2';



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
        
          <Button>
              
                <Link to={ `/`}> Atras</Link>
              </Button>
           

    </React.Fragment>
    )
}