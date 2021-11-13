import React, { useState, useEffect } from 'react';
import './App.css';
import { memo } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import { BrowserRouter as Router, Routes, Route, Link, Switch } from 'react-router-dom';
import axios from 'axios'
import Button from '@restart/ui/esm/Button';
import logo from "./logo.svg"

function AllPotos(props) {

    const switchMode = props.switchVal;
    console.log(props, 'devil 2')
    let [image,setImage] = useState(props.resDataImage)
    const fund=(index)=>{
        image[index].id="dummy"
    }

    //  getData(30);

    if (switchMode == "browse") {
        //   getData(30);
        return (

            <Row >
                {image.map((car,i) =>
                    <Col className={"mt-2"} md="3">
                        <Card style={{ width: '100%', height: '15rem' }}>
                            <Card.Body onClick={()=>fund(i)}>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Card.Link href="#">Card Link</Card.Link>
                                <Card.Link href="#">Another Link</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                )}
            </Row>



        )
    }
    if (switchMode == "liked") {
        //  getData(5);
        return (

            <Row className={"mt-2"}>
                {image.map((car) =>
                    <Col md="3">
                        <Card style={{ width: '100%', height: '15rem' }}>
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Card.Link href="#">Card Link</Card.Link>
                                <Card.Link href="#">Another Link</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                )}
            </Row>



        )
    }
    if (switchMode == "disliked") {
        // getData(3);
        return (

            <Row className={"mt-2"}>
                {image.map((item) =>
                    <Col key={item.id} md="3">
                        <Card style={{ width: '100%', height: '15rem' }}>
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Card.Link href="#">Card Link</Card.Link>
                                <Card.Link href="#">Another Link</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                )}
            </Row>



        )
    }
}
function Hub() {
    // const isLoginApp=false
    const [switchVal, setSwitchVal] = useState("browse")
    let [resData, setResData] = useState([])
    let [isActive, setIsActive] = useState("browse")
    const getData = (amount, mode) => {
        console.log("demon called ")
        setSwitchVal(mode)
        setIsActive(mode)
        axios.get(`https://picsum.photos/v2/list?limit=${amount}`).then((response) => {
            console.log(response, 'devil')
            setResData(response.data)
        });

    }

    useEffect(() => {
        getData(30, "browse")
    }, [])

    return (
        <Container fluid>
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
                            <Nav.Link className={isActive == "browse" ? "active" : ""} href="#browse" onClick={() => getData(30, "browse")}>Browse</Nav.Link>
                            <Nav.Link href="#liked" onClick={() => getData(3, "liked")}>Liked</Nav.Link>
                            <Nav.Link href="#disliked" onClick={() => getData(5, "disliked")}>Disliked</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="/" >Log Out</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </Row>
            <Row>
                <AllPotos switchVal={switchVal} resDataImage={resData} />
            </Row>
        </Container>

    )

}

export default Hub;
