import React from 'react'

function UserInfoBar({owner, handleUserSelect, emailWhite}) {
    return (
        <div className="post-user-info">
            <img src={owner.picture} className="small-pic rounded-circle " alt={`${owner.firstName} profile picture`}/>
            <div className="text">
                <button onClick={handleUserSelect} className="no-btn" >{owner.title} {owner.firstName} {owner.lastName}</button>
                <p className={`email-graded ${emailWhite && 'text-light'}`}>{owner.email} </p>

            </div>
            
        </div>
    )
}

export default UserInfoBar
