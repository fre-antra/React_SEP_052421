import React from 'react';
import Button from './Button';

const Article = (props) => {
    return (
        <div className="article">
            <h3 className="article-title">{props.title}</h3>
            <p className="article-content">{props.content}</p>
            <Button color={props.color} onClick={props.handleClick} />
        </div>
    )
}

export default Article;