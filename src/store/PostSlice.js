import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'

export const fetchPost = createAsyncThunk(
    'fetchposts',
    async (data, thunkAPI) => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        return response.json()
    }
);

export const addpost = createAsyncThunk(
    'addpost',
    async (data, thunkAPI) => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: 'foo',
                body: 'bar',
                userId: 1,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));
            return response.json();
    }
)

const postSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: []
    },
    // reducers: {
        // addPost: {
        //     reducer(state, action) {
        //         let temp = action.payload
        //         console.log(`${action.payload} in reducer ${action}`);
        //         // return {...state.posts, temp }
        //     },
        //     prepare(post) {
        //         console.log('in prepare', post)
        //         // return {payload: post}
        //         return {
        //             payload: {
        //                 id: uuidv4(), title: post.title, body: post.id
        //             }
        //         }

                // // // in prepare()
                // console.log(`${post} in prepare`)
                // return {
                // payload: {
                // id: uuidv4(), title: post.title, body: post.id
                // method: 'POST',
                // body: JSON.stringify({
                //     title: post.title,
                //     body: post.body,
                //     userId: 1,
                //     id: uuidv4(),
                // })
                // }
                // }



    //         }
    //     }
    // },
    extraReducers: {
        [fetchPost.fulfilled]: (state, action) => {
            console.log(action.payload.slice(0, 10))
            state.posts = action.payload.slice(0, 10)
        },
        [addpost.fulfilled]: (state, action) => {
            console.log(action, action.payload)
            // state.posts.push()
        }
    }

});

// export const {  addPost } = postSlice.actions;

export default postSlice.reducer;