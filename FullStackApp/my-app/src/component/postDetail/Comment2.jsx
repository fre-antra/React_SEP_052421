// 1. create new component,component  display comments: writ comment
// 2. need to dispatch action , we need craete action, action creator, add hanlder on reducer to handle the action
// 3. create a api to connent with server
// 4. update model
// 5. added more route for  comment post request
// 6. need a hanlde the request data and add into db

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  TextField,
  Button,
  Typography,
  Divider,
  ButtonBase,
} from "@material-ui/core";
import useStyle from "./style";
import { newComments2 } from "../../redux/ducks/posts";

const Comment2 = ({ postID, postComments }) => {
  const classes = useStyle();
  const dispatch = useDispatch();
  const [comments, setComments] = useState(postComments);
  const [comment, setComment] = useState("");
  const userInfo = JSON.parse(localStorage.getItem("profile"));

  const hanldeChange = (e) => {
    setComment(e.target.value);
  };
  const hanldeSubmit = () => {
    const newComment = `${userInfo.result.name}:${comment}`;
    comments.push(newComment);
    console.log("updated comments", comments);
      dispatch(newComments2(postID, comments));
      setComment('')
  };
  return (
    <>
      <Divider style={{ margin: "1em 0" }} />
      <div className={classes.comment}>
        <Typography variant="h6" gutterBottom>
          Comments 2:
        </Typography>
        <div className={classes.showComment}>
          {comments.map((comment, index) => (
            <Typography variant="body1" key={index}>
                {comment}
            </Typography>
          ))}
        </div>
        {userInfo ? (
          <div className={classes.writeComment}>
            <Typography variant="h6" gutterBottom>
              Write a Comment 2:
            </Typography>
            <TextField
              row={6}
                          fullWidth
                          multiline
              label="Comment"
              variant="outlined"
              value={comment}
              onChange={hanldeChange}
            />
            <Button onClick={hanldeSubmit} color="primary" variant="contained">
              Submit
            </Button>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Comment2;
