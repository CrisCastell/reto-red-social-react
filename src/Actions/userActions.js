import * as actions from './ActionTypes'
import { customAxios } from '../Utils/customAxios'

// export const getAllPostsAction = ({categoria_query ="", tipo_query ="", quantity ="", locacion}={}) => {
export const getUserAction = (userID) => {

    
    
    return async (dispatch) =>{
        dispatch(getUserInit())
        
        try {  

            const url = `/user/${userID}`
            
            const response = await customAxios.get(url)
            dispatch(getUserSuccess(response.data))
            
            
            
        } catch (error) {

            console.log(error.response)
            getUserError('error')
        }
    }
}

const getUserInit = () => ({
    type: actions.GET_USER_INIT,
    payload: true
})

const getUserSuccess = (result) => ({
    type: actions.GET_USER_SUCCESS,
    payload: result
})


const getUserError = (message) => ({
    type: actions.GET_USER_ERROR,
    payload: message
})
