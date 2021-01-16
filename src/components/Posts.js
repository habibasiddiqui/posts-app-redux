import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPost } from '../store/PostSlice';



function Posts() {
    const dispatch = useDispatch();
    const posts = useSelector(state => state.posts);
    useEffect( () => {
        dispatch(fetchPost())
    }, []);
    return (
        <div>
            {posts.length > 0 ? (
                posts.map(item => (
                    <div key={item.id}>
                        <h2>{item.title}</h2>
                        <p>{item.body}</p>
                    </div>
                ))
            ) : (
                <p>Loading...</p>
            )}
            
        </div>
    )
}

export default Posts
