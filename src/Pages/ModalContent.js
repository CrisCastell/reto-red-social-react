import React from 'react'
import UserCard from './UserCard'
import CommentsCard from './CommentsCard'

function ModalContent({showUser}) {

    

    return (
        <div>
            
            {showUser ?

                <UserCard />

                :
                <CommentsCard />
            }
        </div>
    )
}

export default ModalContent
