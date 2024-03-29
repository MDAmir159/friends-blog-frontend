import React , {useState, useEffect} from 'react'
import PostView from './PostView';
import { useHistory } from 'react-router';
import axios from 'axios';
import {PORT} from '../../../../../backEndPort';
import { URL } from '../../../../../urls/url';



export default function Post(props) {

    // console.log(props);
    /// init post item
    const [item, setItem] = useState(props.value)
    const [authorisedUserDetails, setAuthorisedUserDetails] = useState(props.authorisedUserDetails)
    /// init menu
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const [noOfLikes, setNoOfLikes] = useState(item.likes_number)
    const [isLiked, setIsLiked] = useState(false)
    const [isAllSet, setIsAllSet] = useState(false)
    let history = useHistory();

    ////////////////////////////////////////////////////////////////////////////////////////////

    useEffect(() => {
        checkLikedStatus();
    }, [isAllSet])

    //check if the post is liked
    const checkLikedStatus = () => {
        axios.post(URL.CHECK_LIKED_URL, {item, authorisedUserDetails})
        .then((res) =>{
            if(res.data.length){
                setIsLiked(true)
                // console.log(isLiked)
            } else {
                setIsLiked(false)
            }
        })
    }

    // like the post
    const likeThePost = () => {
        axios.post(URL.LIKEPOST_URL, {item, authorisedUserDetails})
        .then((res) =>{
            console.log(res)
        })
    }

    //unlike the post
    const unLikeThePost = () => {
        axios.post(URL.UNLIKEPOST_URL,{item, authorisedUserDetails})
        .then((res) =>{
            console.log(res)
        })
    }

    const handleOptionSelectionOpener = (e) =>{
        setAnchorEl(e.currentTarget);
    }

    const selectedOptionHandler = () =>{
        /// selecting a post
        history.push({
            // pathname : `/newfile/${item.postId}`,
            pathname : `/newpage`,
            state : {data : item}
        })
        
    }

    const handleClose = (option) => {
        setAnchorEl(null);
    };

    //// handling action for like button
    const onClickLikeButtonHandler = (e) =>{
        checkLikedStatus()
        if(!isLiked) {
            likeThePost()
            setNoOfLikes(noOfLikes + 1)
        } else {
            unLikeThePost()
            setNoOfLikes(noOfLikes - 1)
        }
        setIsAllSet(true)
    }

    /// handling action for comment button
    const onClickCommentButtonHandler = (e) =>{
        history.push({
            pathname : `/fullpost/${item.postId}`,
            state : {
                data : item,
                userData : authorisedUserDetails
            }
        })
        console.log("comment button prossed");
        
    }

    const onClickShareButtonHandler = (e) =>{
        e.preventDefault();
        console.log("share button prossed");
        
    }

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////
    return (
        <div>
            <PostView
                item = {item}
                open = {open}
                anchorEl = {anchorEl}
                noOfLikes = {noOfLikes}
                isLiked = {isLiked}
                authorisedUserDetails = {props.authorisedUserDetails}
                comments_number = {item.comments_number}

                onClickLikeButtonHandler = {onClickLikeButtonHandler}
                onClickCommentButtonHandler = {onClickCommentButtonHandler}
                onClickShareButtonHandler = {onClickShareButtonHandler}
                handleOptionSelectionOpener = {handleOptionSelectionOpener}
                selectedOptionHandler = {selectedOptionHandler}
                handleClose = {handleClose}
            />
        </div>
    )
}
