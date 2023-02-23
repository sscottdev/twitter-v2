import { useState } from "react";
import classes from "./NewPost.module.css";
import {TextField} from "@mui/material";
import React from 'react';
import ReactDOM from 'react-dom';
/*
const { MongoClient } = require("mongodb");
const url = "mongodb+srv://admin:adminpassword@twitter-v2.3xspctb.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(url);
*/

function NewPost(props) {
    const [enteredBody, setEnteredBody] = useState("");
    const [enteredAuthor, setEnteredAuthor] = useState("");
  
  
  
    function bodyChangeHandler(event) {
      setEnteredBody(event.target.value);
    }
  
    function authorChangeHandler(event) {
      setEnteredAuthor(event.target.value);
    }

    function submitHandler(event) {
        event.preventDefault();
        const postData = {
            body: enteredBody,
            author: enteredAuthor
        };
        props.onAddPost(postData)
        props.onCancel()
    }


  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={bodyChangeHandler} />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required  onChange={authorChangeHandler}/>
      </p>
      <p className={classes.actions}>
        <button type="button" onClick={props.onCancel}>Cancel</button>
        <button>Submit</button>
      </p>
    </form>
  );
}

export default NewPost;
