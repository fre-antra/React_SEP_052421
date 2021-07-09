// model handle all database work
import mongoose from "mongoose";

// Schema is the database structure
const subscriberSchma = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    subscribedToChannael: {
        type: String,
        require: true
    },
    subscribeDate: {
        type: Date,
        require: true,
        default: Date.now
    }
    
})

    // model takes the collection name; 
    // in this case the subsproj will be the collection save all data of subscriberSchma
const model = mongoose.model('subscriber', subscriberSchma)

export default model 