import React, { useState, useEffect, Suspense } from 'react';
import Row from 'react-bootstrap/Row';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from '../../logo.svg';
import { useSelector } from 'react-redux';
import Container from 'react-bootstrap/Container';

const HubItem = React.lazy(() => import('./hubItem'));


const Hub = () => {
    let images = useSelector(state => state);
    console.log(images,'images');
    let imagesAllData=images.allImages.images

    console.log("imagesNew  ",images)

    return (<>
        <Row>
            <Navbar bg="dark" variant="dark">
                <Container fluid>
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
                    <Nav className="me-auto">
                        <Nav.Link>Browse</Nav.Link>
                        <Nav.Link >Liked</Nav.Link>
                        <Nav.Link >Disliked</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="/" >Log Out</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </Row>

        <Row className={"mt-2"}>

            {imagesAllData.map(image =>
                <Suspense fallback={<div>Loading......</div>}>
                    <HubItem  image={image}/>
                </Suspense>)}

        </Row>
    </>)
}

export default Hub;