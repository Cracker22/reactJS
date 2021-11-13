import { ActionType } from "../constants/actionType";

const initialState={
    images:[]
}

export const imageReducer=(state=initialState,{type,payload})=>{
    switch(type){
        case ActionType.SET_IMAGES:
            return {...state,images:payload}
        case ActionType.LIKE_IMAGE:
            return state
        case ActionType.DISLIKE_IMAGE:
            return state
        default:
            return state
    }
}

