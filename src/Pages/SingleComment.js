import React from 'react'
import UserInfoBar from './UserInfoBar'

function SingleComment({comment}) {
    const {owner} = comment

    const handleUserSelect = () => {
        return
    }
    return (
        <div className="border border-light rounded mb-3 p-3">
            <UserInfoBar handleUserSelect={handleUserSelect} owner={owner} emailWhite={true} />
            
            <p key={comment.id} >{comment.message} </p>
        </div>
    )
}

export default SingleComment
