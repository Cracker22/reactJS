import { ActionType } from "../constants/actionType";

const initialState={
    images:[],
    user:[]
}

export const imageReducer=(state=initialState,{type,payload})=>{
    switch(type){
        case ActionType.SET_IMAGES:
            return {...state,images:payload}
            case ActionType.CHANGE_LIKE_FLAG:
                console.log("ActionType.CHANGE_LIKE_FLAG")
                const index=state.images.findIndex(x=>x.id === payload.id)
                state.images[index]=payload;
                console.log("index, state",index,state)
                return state;
        case ActionType.USER_LIST:
            state.user.push(payload)
            return {...state,user:state.user} 

          case ActionType.USER_LOGOUT:
              state.images=[];
              //state.user=[]
          return state

        default:
            return state
    }
}

