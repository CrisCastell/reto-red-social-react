import React from 'react'
import { useSelector } from 'react-redux'
import SingleComment from './SingleComment'

function CommentsCard() {

    const comments = useSelector(state => state.postReducer.comments)

    return (
        <div>
            {comments.map(com =>  <SingleComment key={com.id} comment={com} /> )}
        </div>
    )
}

export default CommentsCard
