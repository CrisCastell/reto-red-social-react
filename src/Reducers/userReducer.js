import * as actions from '../Actions/ActionTypes'

const initialState = {
    user:{},
    userError:false,
    userLoading:false
}


export default function userReducer(state=initialState, action){
    switch(action.type){
        case actions.GET_USER_INIT:
            return{...state,
                userError:false,
                userLoading:true,
                user:{}
            }
        case actions.GET_USER_SUCCESS:
            return{...state,
                user: action.payload,
                userError: false,
                userLoading: false,
            }
        case actions.GET_USER_ERROR:
            return{...state,
                userError:true,
                userLoading:false
            }

        default:
            return state
    }
}