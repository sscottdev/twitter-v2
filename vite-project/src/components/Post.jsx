import classes from './Post.module.css'

function Post(props) {
    props.author
    props.body

    return (
        <li className={classes.post}>
        <h1 className={classes.author}>{props.author}</h1>
        <p className={classes.text}>{props.body}</p>
        </li>
      );
}

export default Post;