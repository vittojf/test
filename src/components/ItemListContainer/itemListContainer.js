import React, { useEffect, useState } from "react";
import SpinnerLoad from "../SpinnerLoad/SpinnerLoad";
import ItemList from "../ItemList/ItemList";
import TableView from "../TableView/TableView";

import { Link, useParams } from "react-router-dom";

export default function ItemListContainer() {
  const { ap } = useParams();
  const [loading, setLoading] = useState(false);
  const [item, setItem] = useState([]);

  function getData(url) {
    setLoading(false);
    fetch(url)
      .then((res) => res.json())
      .then(
        (data) => {
          setItem(data);
          setLoading(true);
        },
        (error) => {
          setItem([]);
          setLoading(true);
          console.log(error);
        }
      );
  }

  useEffect(() => {
    if (ap === "2") {
      getData(
        "http://bloomcker.com:5757/api/kardcloud/mantenimiento/filtro/%7B%7D/2"
      );
    } else {
      getData(
        "http://bloomcker.com:5757/api/kardcloud/mantenimiento/filtro/%7B%7D/1"
      );
    }
  }, [ap]);

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

      {ap==2?<Link className="btn btn-primary" to="/">Atras</Link> :<Link to="/2" className="btn btn-primary">Siguiente</Link>
      }
    </React.Fragment>
  );
}
