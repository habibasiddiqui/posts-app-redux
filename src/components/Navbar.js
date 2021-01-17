// import React from 'react'
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     Link
// } from "react-router-dom";
// import Home from './Home';
// import Posts from './Posts';
// import AddPost from './AddPost';
// import { Navbar } from ''

// function Navbar() {
//     return (
//         <Router >
//             <div className='navbar'>
//                 <ul className='main-menu'>
//                     <li >
//                         <Link className='menu-item' to='/'>Home</Link>
//                     </li>
//                     <li >
//                         <Link className='menu-item' to='/posts'>Posts</Link>
//                     </li>
//                     <li >
//                         <Link className='menu-item' to='/add-post'>Add Post</Link>
//                     </li>
//                 </ul>
//             </div>

//             <Switch>
//                 <Route path='/posts'><Posts /></Route>
//                 <Route path='/add-post'><AddPost /></Route>
//                 <Route path='/'><Home /></Route>

//             </Switch>
//         </Router>

//     )
// }

// export default Navbar




import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
import { Link } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        textDecoration: 'none',
        color: 'white'
    },
}));

export default function ButtonAppBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar className='navbar' position="static">
                <Toolbar>
                    {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton> */}
                    <Typography variant="h6" className={classes.title} component={Link} to='/'>
                        My Posts
                    </Typography>
                    <Button color="inherit" component={Link} to='/posts'>Posts</Button>
                    <Button color="inherit" component={Link} to='/add-post'>Add Post</Button>
                    {/* <Button color="inherit" component={Link} to='/'>Home</Button> */}
                </Toolbar>
            </AppBar>
        </div>
    );
}
