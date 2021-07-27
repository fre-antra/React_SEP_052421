import './viewStyle.css'
import {  Link } from "react-router-dom";
import { useContext } from 'react';
import { BlogContext } from '../blogContext/BlogContext';

const ViewArticle = () => {
    const { curBlogId, setCurBlogId } = useContext(BlogContext)

    console.log('View page ID: ', curBlogId, setCurBlogId);

    return (
        <div className='view'>
            <div className='viewHeader'>
                <header>Title title</header>
                <p className='header__time'> 2021/1/1</p>
                <div className='header__btns'>
                    <Link to='/blog'> All Articles </Link>
                    <Link to='/blog/edit'> Edit </Link>
                </div>
            </div>
            <div className='viewContent'>
                <h1>Pretend something here</h1>
            </div>
            
        </div>
    )
}

export default ViewArticle
