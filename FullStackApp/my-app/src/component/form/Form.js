import React, { useState, useEffect } from "react";
import useStyle from "./style";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";
import { createPosts, updatePost } from "../../redux/ducks/posts";

const Form = ({ currentId, setCurrentId }) => {
  const classes = useStyle();
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);
  // const curPost = currentId ? posts.find((p) => p._id === currentId) : null
  const curPost = useSelector((state) =>
    currentId ? state.posts.posts.find((p) => p._id === currentId) : null
  );
  // console.log("ID + CurPost", currentId, useSelector((state) => state));

  const [postData, setPostdata] = useState({
    creater: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });

  useEffect(() => {
    if (curPost) setPostdata(curPost);
  }, [curPost]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form --- submit data", postData);

    if (currentId) {
      dispatch(updatePost(currentId, postData));
      clear(0);
    } else {
      // dispatch action
      dispatch(createPosts(postData));
      // need wait till the DB update then get new posts
      setTimeout(() => {
        clear(1);
      }, 0);
    }
  };

  const clear = (flage) => {
    // setCurrentId(null);
    if (flage === 1) {
    setCurrentId(null);
    }

    setPostdata({
      creater: "",
      title: "",
      message: "",
      tags: "",
      selectedFile: "",
    });
  };


  return (
    <>
      <Paper className={classes.paper}>
        <form
          className={`${classes.root} ${classes.form}`}
          autoComplete="off"
          noValidate
          onSubmit={handleSubmit}
        >
          <Typography variant="h6">
            {currentId ? "Editing" : "Creating"} your Memory
          </Typography>
          <TextField
            name="creater"
            variant="outlined"
            label="Creater"
            fullWidth
            value={postData.creater}
            onChange={(even) =>
              setPostdata({ ...postData, creater: even.target.value })
            }
          ></TextField>
          <TextField
            name="title"
            variant="outlined"
            label="Title"
            fullWidth
            value={postData.title}
            onChange={(even) =>
              setPostdata({ ...postData, title: even.target.value })
            }
          ></TextField>
          <TextField
            name="message"
            variant="outlined"
            label="Message"
            fullWidth
            value={postData.message}
            onChange={(even) =>
              setPostdata({ ...postData, message: even.target.value })
            }
          ></TextField>
          <TextField
            name="tags"
            variant="outlined"
            label="Tags"
            fullWidth
            value={postData.tags}
            onChange={(even) =>
              setPostdata({ ...postData, tags: even.target.value.split(", ") })
            }
          ></TextField>
          <div className={classes.fileInput}></div>
          <div className={classes.fileInput}>
            <FileBase
              type="file"
              multiple={false}
              onDone={({ base64 }) =>
                setPostdata({ ...postData, selectedFile: base64 })
              }
            />
          </div>
          <Button
            className={classes.buttonSubmit}
            variant="contained"
            color="primary"
            size="large"
            type="submit"
            fullWidth
          >
            Submit
          </Button>
          <Button
            variant="contained"
            color="secondary"
            size="small"
            onClick={()=>clear(1)}
            fullWidth
          >
            Clear
          </Button>
        </form>
      </Paper>
    </>
  );
};

export default Form;
