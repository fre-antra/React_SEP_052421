import blogDB from '../model/blogModel.js'


export const getArticles = (req, res) =>{
    res.send('hello get')
}

export const viewArticle = (req, res) =>{
    res.send('hello view')
}

export const editArticle = (req, res) =>{
    res.send('hello edit')
}

export const creatArticle = (req, res) =>{
    res.send('hello create')
}
