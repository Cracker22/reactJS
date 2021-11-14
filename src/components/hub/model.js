import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './hub.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {   faHeart, faHeartBroken } from '@fortawesome/free-solid-svg-icons'
const { forwardRef, useImperativeHandle } = React;

const Model=forwardRef((props, ref)=>{

   const imageStyle={
       "height":"35rem",
       "width":"100%"
   }


    const [show, setShow] = useState(false);
    let {image,toggleLike,toggleDislike,mode}=props;
    console.log(image)
    const likedClass=image.isLiked
    const disLikedClass=image.isDisliked
    useImperativeHandle(ref, () => ({
         handleClose : () => setShow(false),
         handleShow :() => setShow(true)

    }))

console.log(likedClass,disLikedClass,'heart')

    const handleClose = () => setShow(false);
    return(<>
          <Modal  size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{image.author} <span className="authorClass">-author</span> </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Row>
    <Col>
      <Image style={imageStyle} src={image.download_url} thumbnail  />
    </Col>
  </Row>
        </Modal.Body>
        <Modal.Footer>
        <FontAwesomeIcon onClick={mode==="Browse"?()=>toggleLike():""} style={{"marginRight":"10%"}} className={"text-"+(likedClass?"danger":"secondary")} size="lg" icon={faHeart} />
        <FontAwesomeIcon onClick={mode==="Browse"?()=>toggleDislike():""} style={{"marginRight":"33%"}}  className={"text-"+(disLikedClass?"danger":"secondary")} size="lg" icon={faHeartBroken} />
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {/* <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button> */}
        </Modal.Footer>
      </Modal>
    </>)
})

export default Model