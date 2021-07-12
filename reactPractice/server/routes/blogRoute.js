import express from 'express'
import { getArticles,viewArticle,creatArticle,editArticle } from '../controller/blog.js'

const router = express.Router()

router.get('/', getArticles)
router.get('/view', viewArticle)
router.patch('/edit', editArticle)
router.post('/create', creatArticle)

export default router