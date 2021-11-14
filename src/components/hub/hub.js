import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from '../../logo.svg';
import { useSelector, useDispatch } from 'react-redux';
import Container from 'react-bootstrap/Container';
import { useNavigate } from "react-router-dom";
import { setImages } from "../redux/action/action"
import axios from 'axios';
import HubItem from './hubItem'
import './hub.css'


const Hub = () => {
    let images = useSelector(state => state);
    console.log(images, 'images');
    let imagesAllData = images.allImages.images;
  
    const [mode, setMode] = useState("Browse");

    let dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        console.log("useEffect called devil  3744  5616")
        axios.get(`https://picsum.photos/v2/list?limit=30`).then((res) => {
            console.log("data called devil")
            let responseDatas = res.data.map(responseData => {
                responseData.isLiked = false;
                responseData.isDisliked = false;
                return responseData
            })
            //.filter(img=>img.height>3000 && img.height<7000 )
            console.log("Response data", responseDatas)
            dispatch(setImages(responseDatas))
        })

    }, [dispatch])

    let likeData = imagesAllData.filter((image) => image.isLiked);
    let dislikeData = imagesAllData.filter((image) => image.isDisliked);

    console.log("imagesNew  ", images)
    const logOut = () => {
        navigate('/')
        dispatch({ type: "USER_LOGOUT", payload: {} })
        setTimeout(() => {
            alert("Logged Out")
        }, 500)
    }

    return (<>
        <Row>
            <Navbar  fixed="top" bg="dark" variant="dark">
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
                        <Nav.Link onClick={() => setMode("Browse")}>Browse</Nav.Link>
                        <Nav.Link onClick={() => setMode("Liked")}>Liked</Nav.Link>
                        <Nav.Link onClick={() => setMode("DisLiked")}>Disliked</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link onClick={logOut} >Log Out</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </Row>

        <Row className="rowPlacement">
            {mode === "Browse" ? (
                imagesAllData && imagesAllData.length > 0 ? (
                    imagesAllData.map((image) => (
                
                            <HubItem image={image} key={image.id} mode={mode} />
                     
                    ))
                ) : (
                    <div className="text-center mt-4">Nothing to show</div>
                )
            ) : mode === "Liked" ? (
                likeData && likeData.length > 0 ? (
                    likeData.map((image) => (
                    
                            <HubItem image={image} key={image.id} mode={mode} />
                        
                    ))
                ) : (
                    <div className="text-center mt-4">Nothing to show</div>
                )
            ) : mode === "DisLiked" ? (
                dislikeData && dislikeData.length > 0 ? (
                    dislikeData.map((image) => (
                    
                            <HubItem image={image} key={image.id} mode={mode} />
                       
                    ))
                ) : (
                    <div className="text-center mt-4">Nothing to show</div>
                )
            ) : (
                <></>
            )}
        </Row>
    </>)
}

export default Hub;