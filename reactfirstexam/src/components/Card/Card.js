import React from 'react';
import './Card.css';

export default class Card extends React.Component {
    render() {
        const {title, content, color, style, handleButtonClick} = this.props;
        return (
            <div className="card" style={style}>
            <h2>{title}</h2>
            <p>{content}</p>
            <button className="set-color" color={color} onClick={handleButtonClick}>{"Set " + color}</button>
            </div>
        );
    }
}