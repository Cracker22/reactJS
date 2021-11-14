import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

import logo from './logo.svg';


const NavbarComponent = (props) => {
    const {handleLoginFlag}=props
   // let toggleActive;

    const setLoginFlag=(loginFlag)=>{
        handleLoginFlag(loginFlag);
       // toggleActive=loginFlag
    }

    return (
        <Navbar bg="light" variant="light">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    Photo Hub
                </Navbar.Brand>

                <Nav>
                    <Nav.Link  onClick={() => setLoginFlag(true)}>
                        Login
                    </Nav.Link>
                    <Nav.Link    onClick={() => setLoginFlag(false)}>
                        Signup
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavbarComponent;