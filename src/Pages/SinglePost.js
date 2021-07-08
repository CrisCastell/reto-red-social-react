import React, {useEffect, useState} from 'react'
import {useDispatch} from 'react-redux'
import Like from './Icons/Like'
import { customAxios } from '../Utils/customAxios'
import {getUserAction} from '../Actions/userActions'
import {setCommentsAction} from '../Actions/postActions'
import UserInfoBar from './UserInfoBar'

function SinglePost({post, selectTag, handleModalOpen, handleShowUser}) {

    const dispatch = useDispatch()
    const {owner, text, likes, tags, publishDate, id, image, link} = post
    const date = new Date(publishDate).toDateString()
    console.log(date)
    const [totalComments, setTotalCommets] = useState([])


    useEffect(()=>{

        if(post.id){
            const getPostComments = () => {
                customAxios.get(`/post/${id}/comment`)
                .then(res => setTotalCommets(res.data.data))
                .catch(err => console.log(err))
            }
            getPostComments()
        }
        
    }, [post])

    const handleCommentSelect = () => {
        
        dispatch(setCommentsAction(totalComments))
        handleShowUser(false)
        handleModalOpen()
    }


    const handleUserSelect = () => {
        dispatch(getUserAction(owner.id))
        handleShowUser(true)
        handleModalOpen()
    }

    const handleTagSelect = (e) => {
        const tag = e.target.id
        selectTag(tag)
    }




    return (
        <div className="container single-post p-3">

            <UserInfoBar handleUserSelect={handleUserSelect} owner={owner} />

            <p className="text">{text} </p>
            <p className="date">{date} </p>
            <div className="post-content">
                {link && <a href={link} target="__blank">Link here</a>}
                {image && <img src={image} alt="post image" className="post-image" />}
                <div>
                    {tags.map((tag, index) => <button key={index} id={tag} className="tag" onClick={handleTagSelect}>#{tag} </button> )}
                </div>
                <div className="likes-and-comments">
                    <button className="no-btn"  onClick={handleCommentSelect}>Comments {totalComments.length}</button>
                    <p className="mb-0">{likes} <Like /></p>
                </div>
                
                
                
            </div>
            
                
            
            
        </div>
    )
}

export default SinglePost
