import React from 'react';
import './PortfolioCard.css';

const PortfolioCard = ({id, icon, title, content}) => {
    return (
        <div className="portfolio-card">
            <div className="portfolio-card-title">
                {title}
            </div>
            <div className="portfolio-card-content">
                {content}
            </div>
            <div className="button-container">
                <button className="more-button">More</button>
            </div>              
        </div>
    );
}

export default PortfolioCard;