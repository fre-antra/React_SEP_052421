import React from 'react';
import './Card.css';

const Card = ({id, icon, title, content}) => {
    return (
        <div className="card" key={id}>
            <div className="card-left">
                <img src={icon} alt="icon" />
            </div>
            <div className="card-right">
                <div className="service-title">
                    {title}
                </div>
                <div className="service-content">
                    {content}
                </div>
            </div>

        </div>
    );
}

export default Card;