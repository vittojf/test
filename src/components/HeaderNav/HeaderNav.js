import React from 'react'
import { Container, Navbar } from 'react-bootstrap';


function HeaderNav() {
    return (<Navbar bg="secondary" className="mb-5" expand="lg">
    <Container>
      <Navbar.Brand href="#home" className="text-white m-auto">Test</Navbar.Brand>
      
    </Container>
  </Navbar>  );
}

export default HeaderNav;