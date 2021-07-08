import React, { useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {Spinner} from 'react-bootstrap'
import {Alert} from 'react-bootstrap'
import {getAllPostsAction} from '../Actions/postActions'
import SinglePost from './SinglePost'
import {Modal} from 'react-bootstrap'
import ModalContent from './ModalContent'
import { Pagination } from 'react-bootstrap'

function Dashboard() {
    const dispatch = useDispatch()

    const [showModal, handleShowModal]  = useState(false)
    const [showUser, setShowUser]       = useState(false)
    const [selectedTag, setSelectedTag] = useState("")
    const [pageNum, setPageNum]            = useState(0)
    const limit = 10

    const handleModalOpen   = ()    => handleShowModal(true)
    const handleModalClose  = ()    => handleShowModal(false)    
    const selectTag         = tag   => setSelectedTag(tag)
    
    const handleShowUser = op => setShowUser(op)


    const posts         = useSelector(state => state.postReducer.posts)
    const postsError    = useSelector(state => state.postReducer.postsError)
    const postsLoading  = useSelector(state => state.postReducer.postsLoading)
    const total         = useSelector(state => state.postReducer.total)
    const page          = useSelector(state => state.postReducer.page)



    useEffect(() => {

        const getPosts = () => dispatch(getAllPostsAction({selectedTag, page}))
        getPosts()

    }, [selectedTag])

    useEffect(() => {

        if(pageNum !== page){
            const getPosts = () => dispatch(getAllPostsAction({selectedTag, page: pageNum}))
            getPosts()
        }

    }, [pageNum])


    

    return (
        <>
        <Modal 
            show={showModal} 
            onHide={handleModalClose}
            aria-labelledby="contained-modal-title-vcenter-lg"
            centered
            >
            <Modal.Header closeButton>
            </Modal.Header>
            <Modal.Body>
                <ModalContent 
                    showUser={showUser}
                />
            </Modal.Body>
            
        </Modal>
        <div className="container content">

            {selectedTag !== "" &&
            <div className="p-3">
                <button onClick={()=>setSelectedTag("")}>Delete filters</button>
                <strong className="tag">#{selectedTag} </strong>
            </div>
            }
            
            
            {postsLoading &&    <Spinner animation="border" role="status">
                                    <span className="sr-only">Loading...</span>
                                </Spinner> 
            }
            {postsError &&      <Alert variant="danger">
                                    Lo sentimos, hubo un error.
                                </Alert>
            }
            
            {!postsLoading && !postsError && posts.length !== 0 ?
                <div className="row">
                    
                    {posts.map(post => 
                        <div className="col-md-6">
                            <SinglePost key={post.id} selectTag={selectTag} post={post} handleShowUser={handleShowUser} handleModalOpen={handleModalOpen} />    
                        </div>
                    )}
                    
                </div>
                
            :
            null
            }
            <div className="pagination-wrapper">
                <Pagination size="lg">
                    {Array.from({length: total/limit }).map((elem, index )=> 
                        <Pagination.Item key={index} onClick={()=> setPageNum(index)} active={index === page}>
                            {index + 1}
                        </Pagination.Item>
                    )}
                </Pagination>

            </div>
            
            
        </div>
        </>
    )
}

export default Dashboard
