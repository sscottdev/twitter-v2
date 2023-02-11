import { useState, useEffect } from "react";

import NewPost from "./NewPost";
import Post from "./Post";
import Modal from "./Modal";
import classes from "./PostList.module.css";

function PostsList(props) {


  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const response = await fetch('http://localhost:8080/posts')
      const resData = await response.json();
      setPosts(resData.posts)
    }

    fetchPosts()
  })
  function addPostHandler(postData) {
    fetch('http://localhost:8080/posts', {
      method: 'POST',
      body: JSON.stringify(postData),
      headers: {
        'Content-type': 'application/json'
      }
    })
    setPosts((existingPosts) => [postData, ...existingPosts]);
  }

  let modalContent;

  if (props.isPosting) {
    modalContent = (
      <Modal onClose={props.onStopPosting}>
        <NewPost onCancel={props.onStopPosting} />
      </Modal>
    );
  }

  return (
    <>
      {props.isPosting && (
        <Modal onClose={props.onStopPosting}>
          <NewPost onCancel={props.onStopPosting} onAddPost={addPostHandler} />
        </Modal>
      )}
      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post key={post.body} author={post.author} body={post.body} />
          ))}
        </ul>
      )}
      {posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
            <h2>There are no posts yet</h2>
            <p>Start adding some!</p>
        </div>
      )}
    </>
  );
}

export default PostsList;
