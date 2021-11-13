import { ActionType } from "../constants/actionType";

export const setImages=(images)=>{
    return{
        type:ActionType.SET_IMAGES,
        payload:images
    }
}

export const changeFlagStatus=(image)=>{
    console.log("I am here")
    return{
        type:ActionType.CHANGE_LIKE_FLAG,
        payload:image
    }
}

export const userList=(user)=>{
    return{
        type:ActionType.USER_LIST,
        payload:user
    }
}