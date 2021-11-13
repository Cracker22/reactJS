import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faExpandAlt, faHeart, faHeartBroken } from '@fortawesome/free-solid-svg-icons'
import {changeFlagStatus} from "../redux/action/action"
import { useDispatch } from 'react-redux';

const HubItem = (props) => {
    const dispatch = useDispatch();
    const { image } = props;
    const [likedClass,setLikedClass]=useState(image.isLiked?true:false)
    const [disLikedClass,setdisLikedClass]=useState(image.isDisliked?true:false)
    
    const toggleLike=()=>{
        
        setLikedClass(!likedClass)
        image.isLiked=!image.isLiked;

        if(disLikedClass)
        {
            setdisLikedClass(false)
            image.isDisliked=false
        }

        dispatch(changeFlagStatus(image));
    }

    const toggleDislike=()=>{
        setdisLikedClass(!disLikedClass)
        image.isDisliked=!image.isDisliked;

        if(likedClass){
            setLikedClass(false)
            image.isLiked=false
        }
        dispatch(changeFlagStatus(image));
    }

    return (<><Col className="mt-2" md="3">
        <Card style={{ width: '100%', height: '15rem' }}>
            {/* <Card.Title className="p-0">{image.id}
            <FontAwesomeIcon className="float-end"  size="xs" icon={faExpandAlt} />
            </Card.Title> */}
            <Card.Body className="p-0">
                
                <img src={image.download_url} height="70%" width="100%" alt={image.id}/>
                

                <Card.Link href="#" onClick={()=>toggleLike()}><FontAwesomeIcon className={"text-"+(likedClass?"danger":"secondary")} size="xs" icon={faHeart} /></Card.Link>
                <Card.Link href="#" onClick={()=>toggleDislike()}><FontAwesomeIcon className={"text-"+(disLikedClass?"danger":"secondary")} size="xs" icon={faHeartBroken} /></Card.Link>
            </Card.Body>
        </Card>
    </Col></>)
}

export default HubItem;