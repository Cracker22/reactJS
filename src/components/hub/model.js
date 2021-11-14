import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './hub.css'
const { forwardRef, useRef, useImperativeHandle } = React;

const Model=forwardRef((props, ref)=>{

   const imageStyle={
       "height":"35rem",
       "width":"100%"
   }


    const [show, setShow] = useState(false);
    let {image}=props;
    console.log(image)

    useImperativeHandle(ref, () => ({
         handleClose : () => setShow(false),
         handleShow :() => setShow(true)

    }))

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
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