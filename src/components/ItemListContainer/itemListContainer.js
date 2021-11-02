import React, { useEffect, useState } from "react";
import SpinnerLoad from "../SpinnerLoad/SpinnerLoad";
import ItemList from "../ItemList/ItemList";
import TableView from "../TableView/TableView";

import { Link } from "react-router-dom";

export default function ItemListContainer() {
  
  const [loading, setLoading] = useState(false);
  const [item, setItem] = useState([]);
  const [nPoint, setNPoint] = useState(1);

  function getData(url) {
    setLoading(false);
    fetch(url)
      .then((res) => res.json())
      .then(
        (data) => {
          setItem(data);
          setLoading(true);
          console.log(data)
        },
        (error) => {
          setItem([]);
          setLoading(true);
          console.log(error);
        }
      );
  }


const addPoint =()=>{
    setNPoint(nPoint+1)
}
  useEffect(() => {
  
      getData(  `http://bloomcker.com:5757/api/kardcloud/mantenimiento/filtro/%7B%7D/${nPoint}`  );
   
  }, [nPoint]);

  return (
    <React.Fragment>
      <TableView>
        {!loading ? (
          <tr className="text-center">
            <td colSpan="9">
              <SpinnerLoad />
            </td>
          </tr>
        ) : (
          <ItemList result={item.data} />
        )}
      </TableView>

      <Link to={`/${nPoint+1}`} onClick={addPoint} className="btn btn-primary" >siguiente</Link> 
    </React.Fragment>
  );
}
