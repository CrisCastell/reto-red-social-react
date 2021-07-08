import * as actions from '../Actions/ActionTypes'

const initialState = {
    posts:[],
    postsError:false,
    postsLoading:false,
    total:null,
    page:0,
    
    comments:[]
}


export default function postReducer(state=initialState, action){
    switch(action.type){
        case actions.GET_ALL_POSTS_INIT:
            return{...state,
                postsError:false,
                postsLoading:true,
                posts:[]
            }
        case actions.GET_ALL_POSTS_SUCCESS:
            return{...state,
                posts: action.payload.data,
                total: action.payload.total,
                page:  action.payload.page,
                postsError: false,
                postsLoading: false,
            }
        case actions.GET_ALL_POSTS_ERROR:
            return{...state,
                postsError:true,
                postsLoading:false
            }

        case actions.SET_POST_COMMENTS:
            return{...state,
                comments: action.payload
            }

        default:
            return state
    }
}