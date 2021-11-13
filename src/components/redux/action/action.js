import { ActionType } from "../constants/actionType";

export const setImages=(images)=>{
    return{
        type:ActionType.SET_IMAGES,
        payload:images
    }
}

export const likeImage=(image)=>{
    return{
        type:ActionType.LIKE_IMAGE,
        payload:image
    }
}

export const disLikeImage=(image)=>{
    return{
        type:ActionType.DISLIKE_IMAGE,
        payload:image
    }
}