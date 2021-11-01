import React from 'react'
import {Spinner} from 'react-bootstrap'
const SpinnerLoad = () =>{
    return(<Spinner animation="border" role="status">
    <span className="visually-hidden">Loading...</span>
  </Spinner>)
}

export default SpinnerLoad