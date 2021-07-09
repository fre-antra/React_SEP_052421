// Router handle all request


import express from 'express'
import subscriberModel from '../models/subscribe.js'

const router = express.Router()

router.get('/', async (req, res) => {
    try {
        const subscribers = await subscriberModel.find()
        res.json(subscribers)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
 })

//  apply middle ware: dont need to call, just pass in as props
router.get('/:id', getID, (req, res) => {
    // res.send(body) body只能有一个参数
    res.json(res.subscriber)
})

router.post('/', async (req, res) => {
    const subscriber = new subscriberModel({
        name: req.body.name,
        subscribedToChannael: req.body.subscribedToChannael
    })
    try {
        const newSubscriber = await subscriber.save()
        res.status(201).json(newSubscriber)
    } catch (error) {
        res.status(400).json({message: err.message})
        
    }
})


router.patch('/:id', getID, async (req, res) => {

    // compare the change
    if (req.body.name != null) {
        res.subscriber.name = req.body.name
    }
    if (req.body.subscribedToChannael != null) {
        res.subscriber.subscribedToChannael = req.body.subscribedToChannael
    }

    // once changes confirm, then save the subscriber to DB
    try {
        const updatedSubscriber = await res.subscriber.save()
        res.json(updatedSubscriber)
    } catch (error) {
        res.status(400).json({message: error.message})
        
    }
})

router.delete('/:id', getID, async (req, res) => {
    try {
        await res.subscriber.remove()
        res.json({message:'subscriber delete'})
    } catch (error) {
        res.json({message: error.message})
    }
})



// get id middel ware, different methods needs utilize the user ID
// therefore apply middleware for all methods to get ID
async function getID(req, res, next) {
    let subscriber
    try {
        // Find user by ID from database 
        subscriber = await subscriberModel.findById(req.params.id)
        if (subscriber == null) {
            return res.status(404).json({message: 'not found'})
        }
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
    // add subscriber property to the respond
    res.subscriber = subscriber

    // continue for next middlware
    next()
}


export default router