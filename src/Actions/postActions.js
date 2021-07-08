import * as actions from './ActionTypes'
import { customAxios } from '../Utils/customAxios'

export const getAllPostsAction = ({selectedTag ="", page=0, limit="10"}={}) => {
// export const getAllPostsAction = () => {

    
    
    return async (dispatch) =>{
        dispatch(getPostsInit())
        
        try {
            const prevUrl =  selectedTag !== "" ? `/tag/${selectedTag}/post` : '/post' 

            const url = `${prevUrl}/?page=${page}&limit=${limit}`
            
            const response = await customAxios.get(url)
            dispatch(getPostsSuccess(response.data))
            
            
        } catch (error) {

            console.log(error.response)
            getPostsError('error')
        }
    }
}

const getPostsInit = () => ({
    type: actions.GET_ALL_POSTS_INIT,
    payload: true
})

const getPostsSuccess = (results) => ({
    type: actions.GET_ALL_POSTS_SUCCESS,
    payload: results
})


const getPostsError = (message) => ({
    type: actions.GET_ALL_POSTS_ERROR,
    payload: message
})


export const setCommentsAction = (comments) => ({
    type: actions.SET_POST_COMMENTS,
    payload: comments
})
