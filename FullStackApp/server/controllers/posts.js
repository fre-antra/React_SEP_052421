// controller contains all logic function for route

import mongoose from 'mongoose'
import PostMessage from '../models/postMessage.js'

// get responds from db for existed post info
export const getPosts = async (req, res) => {
    // res.send('Getting post from db')
    try {
        // cannot find the info immediately, therefore, async fn
        const postMessage = await PostMessage.find()
        res.status(200).json(postMessage)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
 }


// sending request to db for adding new post info
export const createPost = async (req, res) => {
    // res.send('POST request to the homepage')
    const { title, message, selectedFile, creater, tags } = req.body;
    const newPost = new PostMessage({ title, message, selectedFile, creater, tags })

    try {
        const post = await newPost.save()
        res.status(201).json(post)
        console.log('New Post Upload');
    } catch (error) {
        res.status(409).json({message: error.message})
        
    }
 }
  

export const updatePost = async (req, res) => {
    const { id: _id } = req.params
    const post = req.body

    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).json({message: 'No post with that id'})
    }

    console.log(_id, ' updated');
    // console.log('--------/n', { ...post, _id }, '--------/n', { ...post }, '--------/n', post); // all are same 
    // { ...post } : App not rerender
    // post:
    // { ...post, _id } :
    const updatedPost = await PostMessage.findByIdAndUpdate(_id, {...post}, { new: true })
     
    res.json(updatedPost)
}
 

export const deletePost = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({message: 'No post with that id'})
    }

    await PostMessage.findByIdAndRemove(id)
    res.json('Post Deleted.')
}


export const likePost = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({message: 'No post with that id'})
    }

    console.log('LIKE + 1');
    const post =  await PostMessage.findById(id)
    const updateLike =  await PostMessage.findByIdAndUpdate(id, { likeCount: post.likeCount + 1}, {new:true})
    res.json(updateLike)
}

 export default getPosts