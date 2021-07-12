import { Mongoose } from "mongoose";

const blogSchema = Mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    description:  {
        type: String
    },
    markdown: {
        type: String,
        require: true
    },
    createAt: {
        type: Date,
        default: new Date()
    }
})

const blogDB = Mongoose.model('blogInfo', blogSchema)

export default blogDB