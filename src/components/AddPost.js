import React, { useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useDispatch } from 'react-redux';
// import { addPost } from '../store/PostSlice';
import { addpost } from '../store/PostSlice';

function AddPost() {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [post, setPost] = useState({});

    const dispatch = useDispatch();

    const handleTitle = (e) => {
        setTitle(e.target.value);
    }

    const handleBody = (e) => {
        setBody(e.target.value);
        // console.log(body)
    }

    const handleSubmit = (e) => {
        // e.preventDefault();
        setPost({
            title: title,
            body: body
        });
        // post returning undefined        
        console.log(title, body, post)
        dispatch(addpost('some post object'));

        // can't use useEffect in handlesubmit???
        // useEffect( () => {
        //     dispatch(addpost(post));

        // }, []);

    }

    return (
        <div>
            <form className='add-form' onSubmit={handleSubmit}>
                <br />
                <TextField className='input-field' fullWidth onChange={handleTitle} id="outlined-basic" label="Title" variant="outlined" />
                <br />
                <br />
                <TextField className='input-field' fullWidth onChange={handleBody} id="outlined-basic" label="Body" variant="outlined" multiline={true} rows='8' />
                <br />
                <br />
                <Button type='submit' variant="contained" color="primary">
                    Post
                </Button>
            </form>
        </div>
    )
}

export default AddPost
