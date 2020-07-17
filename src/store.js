import { createStore, applyMiddleware  } from "redux"
import thunk from 'redux-thunk';
import axios from 'axios'

export const DELETE_POST='DELETE_POST';
export const ADD_POST='ADD_POST';
export const POST_LIST='POST_LIST';
export const FILTERING_POSTS='FILTERING_POSTS';

export const postList=()=>{
    return dispatch=> {
        return axios.get('http://localhost:5000/posts')
         .then(response=>{
             dispatch({
                    type:POST_LIST,
                    posts:response.data
            })
         });
    }
}

export const addPost=(post)=>{
    return dispatch=> {
        return axios.post('http://localhost:5000/post', {
            name: post.name,
            description: post.description
          })
         .then(response=>{
             dispatch({
                    type:ADD_POST,
                    post:response.data.body.post
            })
         });
    }
}

export const deletePost=(post)=>{
    return dispatch=> {
        return axios.delete('http://localhost:5000/post/'+post.id, {
            name: post.name,
            description: post.description
          })
         .then(response=>{
             dispatch({
                    type:DELETE_POST,
                    post:response.data.body.post
            })
         });
    }
}

const initialState = {
    posts: [],
    filteredPosts: [],
    nameSearched:''
}

const reducerPost= (state =initialState, action) =>{
    switch(action.type){
        case DELETE_POST: 
        let posts=state.posts.filter(post=> post.id !== action.post.id)
        return{
            ...state,
            posts:posts,
            filteredPosts:posts.filter(post=> post.name.toUpperCase().includes(state.nameSearched))
        }
        case ADD_POST: 
        let postsUpdated=state.posts.concat(action.post);
            return {
                ...state,
                posts:postsUpdated,
                filteredPosts:postsUpdated.filter(post=> post.name.toUpperCase().includes(state.nameSearched))
            }
        case POST_LIST:
            return{
                ...state,
                posts:action.posts,
                filteredPosts:action.posts
            }
        case FILTERING_POSTS:
            let nameSearched= action.name.trim().toUpperCase()
            return{
                ...state,
                nameSearched:nameSearched,
                filteredPosts:state.posts.filter(post=> post.name.toUpperCase().includes(nameSearched))
            }
        default:
            return state
    }
   
}

export default createStore(reducerPost,initialState,applyMiddleware(thunk))