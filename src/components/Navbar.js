import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from './Home';
import Posts from './Posts';
import AddPost from './AddPost';

function Navbar() {
    return (
        <Router >
            <div className='navbar'>
                <ul className='main-menu'>
                    <li >
                        <Link className='menu-item' to='/'>Home</Link>
                    </li>
                    <li >
                        <Link className='menu-item' to='/posts'>Posts</Link>
                    </li>
                    <li >
                        <Link className='menu-item' to='/add-post'>Add Post</Link>
                    </li>
                </ul>
            </div>
            <Switch>
                <Route path='/posts'><Posts /></Route>
                <Route path='/add-post'><AddPost /></Route>
                <Route path='/'><Home /></Route>
                
            </Switch>
        </Router>

    )
}

export default Navbar
