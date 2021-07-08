import { combineReducers } from 'redux'
import userReducer from './userReducer'
import postReducer from './postReducer'
import commentReducer from './commentReducer'

const rootReducer = combineReducers({
    userReducer,
    postReducer,
    commentReducer
})

export default rootReducer