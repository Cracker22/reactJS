import React, { useState,Suspense } from 'react';
import Row from 'react-bootstrap/Col';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHeart, faHeartBroken } from '@fortawesome/free-solid-svg-icons'
import {changeFlagStatus} from "../redux/action/action"
import { useDispatch } from 'react-redux';
import { useSnackbar } from 'react-simple-snackbar'
import Model from "./model"
import './hub.css'
const ImageRender = React.lazy(() => import('./image'));

const { useRef } = React;

const HubItem = (props) => {
    const imageStyleFallback={
        "height":"17rem",
        "width":"100%",
        "padding":"25%"
    }
    const [openSnackbar] = useSnackbar({position:"bottom-right",style:{backgroundColor:"#AA14F0",color:"white"}})
    const dispatch = useDispatch();
    const { image,mode } = props;
    const [likedClass,setLikedClass]=useState(image.isLiked?true:false)
    const [disLikedClass,setdisLikedClass]=useState(image.isDisliked?true:false)
    const closeShowModel=useRef();
    
    const toggleLike=()=>{
 
        setLikedClass(!likedClass)
        image.isLiked=!image.isLiked;

        if(disLikedClass)
        {
            setdisLikedClass(false)
            image.isDisliked=false
        }

        dispatch(changeFlagStatus(image));
     
        openSnackbar(`User has liked the ${image.author}`)
    }
//B91646
//#AA14F0
    const toggleDislike=()=>{
        setdisLikedClass(!disLikedClass)
        image.isDisliked=!image.isDisliked;

        if(likedClass){
            setLikedClass(false)
            image.isLiked=false
        }
        dispatch(changeFlagStatus(image));
        openSnackbar(`User has disliked the ${image.author}`)
    }

    return (<>
   
    <Col xs={6} md={3} className="mt-2 " >
        <Row>
        <Suspense fallback={  <Col style={imageStyleFallback}>Loading......</Col> }>
        <div  onClick={() => closeShowModel.current.handleShow()}>
        <ImageRender image={image} />
        </div>
      
        </Suspense>
      
        {/* <Image onClick={() => closeShowModel.current.handleShow()}  style={imageStyle} className="mt-1 mx-1" src={image.download_url} alt={image.id} thumbnail /> */}
        </Row>
        <Row className="d-flex justify-content-evenly mt-1 colStyle ms-2">
        <FontAwesomeIcon onClick={mode==="Browse"?()=>toggleLike():""} className={"text-"+(likedClass?"danger":"secondary")} size="xs" icon={faHeart} />
        <FontAwesomeIcon onClick={mode==="Browse"?()=>toggleDislike():""} className={"text-"+(disLikedClass?"danger":"secondary")} size="xs" icon={faHeartBroken} />
        </Row>
  
    </Col>


    
    
{/*     
    <Col className="mt-2" md="3">
        <Card style={{ width: '100%', height: '15rem' }} >
            <Card.Title className="p-0">{image.id}
            <FontAwesomeIcon className="float-end"  size="xs" icon={faExpandAlt} />
            </Card.Title>
            <Card.Body className="p-0">
                
                <img onClick={() => closeShowModel.current.handleShow()} src={image.download_url} height="70%" width="100%" alt={image.id}/>
              

                <Card.Link href="#" onClick={()=>toggleLike()}><FontAwesomeIcon className={"text-"+(likedClass?"danger":"secondary")} size="xs" icon={faHeart} /></Card.Link>
                <Card.Link href="#" onClick={()=>toggleDislike()}><FontAwesomeIcon className={"text-"+(disLikedClass?"danger":"secondary")} size="xs" icon={faHeartBroken} /></Card.Link>
            </Card.Body>
        </Card>
    </Col> */}
    <Model ref={closeShowModel} image={image} mode={mode} toggleLike={toggleLike} toggleDislike={toggleDislike}/>
    </>)
}

export default HubItem;