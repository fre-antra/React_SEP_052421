import { Typography, Divider, TextField, Button } from "@material-ui/core/";
import { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { commentPost } from "../../redux/ducks/posts";
import useStyle from "./style";

const Comment = ({ postID, postComments }) => {
  const classes = useStyle();
  const dispatch = useDispatch();
  const scrollEndRef = useRef(null)
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState(postComments);
  const userInfo = JSON.parse(localStorage.getItem("profile"));


  const handleComment = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = () => {
    const finalComment = `${userInfo?.result?.name}: ${comment}`;
    comments.push(finalComment)
    dispatch(commentPost(postID, comments))
    setComments(comments);
    setComment("");
    setTimeout(() => {
      scrollEndRef.current.scrollIntoView({ behavior: "smooth" })
    }, 0);
  };

  return (
    <>
      <Divider style={{ margin: "1rem 0" }} />

      <div className={classes.comment}>
          <Typography variant="h6">Comments:</Typography>
          <br />
        <div className={classes.showComment}>
          {comments?.map((comment, index) => (
            <Typography key={index} variant="body1">
              {comment}
            </Typography>
          ))}
        <div ref={scrollEndRef}></div>
        </div>

        {userInfo?(<div className={classes.writeComment}>
          <Typography variant="h6">Write comment below:</Typography>
          <br />
          <TextField
            row={6}
            fullWidth
            label="Comment"
            multiline
            value={comment}
            variant="outlined"
            onChange={handleComment}
          />
          <Button
            className={classes.comment__btn}
            color="primary"
            variant="contained"
            onClick={handleSubmit}
          >
            comment
          </Button>
        </div>):null}
      </div>
    </>
  );
};

export default Comment;
