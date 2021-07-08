import React from 'react'
import {useSelector} from 'react-redux'
import {Spinner, Alert} from 'react-bootstrap'


function UserCard() {

    const user          = useSelector(state => state.userReducer.user)
    const userError     = useSelector(state => state.userReducer.userError)
    const userLoading   = useSelector(state => state.userReducer.userLoading)
    return (
        <div className="container user-card">

            {userLoading &&    <Spinner animation="border" role="status">
                                    <span className="sr-only">Loading...</span>
                                </Spinner> 
            }
            {userError &&      <Alert variant="danger">
                                    Lo sentimos, hubo un error.
                                </Alert>
            }
            {!userError && !userLoading && 'id' in user ?
                
                <div className="">
                    <div className="pic-wrapper">
                        <img src={user.picture} className="rounded-circle big-pic" alt={`${user.firstName} profile image`} />
                        <h2>{user.title} {user.firstName} {user.lastName}</h2>

                    </div>

                    <p> <span>Email:</span> {user.email} </p>
                    <p> <span>Phone:</span> {user.phone} </p>
                    <p> <span>Gender:</span> {user.gender} </p>
                    <p> <span>Location:</span> {user.location.street}, {user.location.city}, {user.location.state}, {user.location.country} </p>
                </div>
            
            :null }
        </div>
    )
}

export default UserCard
