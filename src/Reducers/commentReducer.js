import * as actions from '../Actions/ActionTypes'

const initialState = {
    comments:[],
    commentsError:false,
    commentsLoading:false
}


export default function commentReducer(state=initialState, action){
    switch(action.type){
        case actions.GET_POST_COMMENTS_INIT:
            return{...state,
                commentsError:false,
                commentsLoading:true,
                comments:[]
            }
        case actions.GET_POST_COMMENTS_SUCCESS:
            return{...state,
                comments: action.payload,
                commentsError: false,
                commentsLoading: false,
            }
        case actions.GET_POST_COMMENTS_ERROR:
            return{...state,
                commentsError:true,
                commentsLoading:false
            }

        default:
            return state
    }
}