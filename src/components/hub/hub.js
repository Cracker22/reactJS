import React, { useState, useEffect, Suspense } from 'react';
import Row from 'react-bootstrap/Row';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from '../../logo.svg';
import { useSelector, useDispatch } from 'react-redux';
import Container from 'react-bootstrap/Container';
import { useNavigate } from "react-router-dom";
import { setImages } from "../redux/action/action"
import axios from 'axios';

const HubItem = React.lazy(() => import('./hubItem'));


const Hub = () => {
    let images = useSelector(state => state);
    console.log(images, 'images');
    let imagesAllData = images.allImages.images;
  
    const [mode, setMode] = useState("Browse");

    let dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        console.log("useEffect called devil")
        axios.get(`https://picsum.photos/v2/list?limit=30`).then((res) => {
            console.log("data called devil")
            let responseDatas = res.data.map(responseData => {
                responseData.isLiked = false;
                responseData.isDisliked = false;
                return responseData
            })
            console.log("Response data", responseDatas)
            dispatch(setImages(responseDatas))
        })

    }, [])

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

        <Row className={"mt-2"}>
            {mode === "Browse" ? (
                imagesAllData && imagesAllData.length > 0 ? (
                    imagesAllData.map((image) => (
                        <Suspense fallback={<div>Loading......</div>}>
                            <HubItem image={image} key={image.id} />
                        </Suspense>
                    ))
                ) : (
                    <div className="text-center">Nothing to show</div>
                )
            ) : mode === "Liked" ? (
                likeData && likeData.length > 0 ? (
                    likeData.map((image) => (
                        <Suspense fallback={<div>Loading......</div>}>
                            <HubItem image={image} key={image.id} />
                        </Suspense>
                    ))
                ) : (
                    <div className="text-center">Nothing to show</div>
                )
            ) : mode === "DisLiked" ? (
                dislikeData && dislikeData.length > 0 ? (
                    dislikeData.map((image) => (
                        <Suspense fallback={<div>Loading......</div>}>
                            <HubItem image={image} key={image.id} />
                        </Suspense>
                    ))
                ) : (
                    <div className="text-center">Nothing to show</div>
                )
            ) : (
                <></>
            )}
        </Row>
    </>)
}

export default Hub;