import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPost } from '../store/PostSlice';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: 'flex',
//     '& > * + *': {
//       marginLeft: theme.spacing(2),
//     },
//   },
// }));

function Posts() {
    // const classes = useStyles();
    const dispatch = useDispatch();
    const posts = useSelector(state => state.posts);
    useEffect(() => {
        dispatch(fetchPost())
    }, []);
    return (
        <div>
            {posts.length > 0 ? (
                posts.map(item => (
                    <div key={item.id}>

                        <Card className='card'>
                            <CardContent>
                                {/* <Typography className={classes.title} color="textSecondary" gutterBottom>
                                    Word of the Day
                                </Typography> */}
                                
                                <Typography className='card-heading' variant="h5" component="h2">
                                {item.title}
                                </Typography>
                                <Divider />
                                <Typography className='card-content' variant="body2" component="p">
                                {item.body}
                                </Typography>
                            </CardContent>
                            
                        </Card>

                    </div>
                ))
            ) : (
                // {classes.root}
                <div className='progress'>
                <CircularProgress style={{}} />
                </div>
                )}





        </div>
    )
}

export default Posts
