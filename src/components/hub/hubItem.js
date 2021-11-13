import React, { useState, useEffect } from 'react';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faExpandAlt, faHeart, faHeartBroken } from '@fortawesome/free-solid-svg-icons'

const HubItem = (props) => {
    const { image } = props;
    // const { image, setImage } = useState({})

    // useEffect(() => {
    //     console.log(urldata)
    //          axios.get(urldata.download_url).then(res=>{
    //             console.log("response",res);
    //             setImage(res);
    //             console.log("image",image);
    //          })           
        
    // }, [])

    return (<><Col className="mt-2" md="3">
        <Card style={{ width: '100%', height: '15rem' }}>
            <Card.Title className="p-0">{image.id}
            <FontAwesomeIcon className="float-end"  size="xs" icon={faExpandAlt} />
            </Card.Title>
            <Card.Body className="p-0">
                
                <img src={image.download_url} height="70%" width="100%"/>
                <Card.Link href="#"><FontAwesomeIcon size="xs" icon={faHeart} /></Card.Link>
                <Card.Link href="#"><FontAwesomeIcon size="xs" icon={faHeartBroken} /></Card.Link>
            </Card.Body>
        </Card>
    </Col></>)
}

export default HubItem;