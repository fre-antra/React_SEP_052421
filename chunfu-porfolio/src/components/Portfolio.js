import React from 'react';
import './Portfolio.css';
import PortfolioCard from './PortfolioCard';

const Portfolio = () => {
    const cards_content = [
        {
            id: 1,
            icon: "/images/luvtalklogo.png",
            title: "LUV TALK Website",
            content: "Website, created during my first internship, which utilized HTML, CSS, PHP, Ajax, Javascript/jQuery, and Wordpress."
        },
        {
            id: 2,
            icon: "/images/logo.svg",
            title: "Personal Website",
            content: "Enjoyable side project that was created to experiment with more HTML and CSS, but also provided an outlet to showcase my abilities and interests."
        },
        {
            id: 3,
            icon: "/images/mlbproject.png",
            title: "Strike Zone Analysis",
            content: "Data analytics project completed during my time at the Illinois Math and Science Academy which studied the baseball strike zone based on the state of the game."
        },
    ]

    return (
        <div className="portfolio-container">
            <div className="portfolio-title">
                <div>Projects and Portfolio</div>
                <p><em>Sharing my endeavors and passions... </em></p>
            </div>
            <div className="portfolio-cards">
                <PortfolioCard key={cards_content[0].id} id={cards_content[0].id} icon={cards_content[0].icon} title={cards_content[0].title} content={cards_content[0].content} />
                <PortfolioCard key={cards_content[1].id} id={cards_content[1].id} icon={cards_content[1].icon} title={cards_content[1].title} content={cards_content[1].content} />
                <PortfolioCard key={cards_content[2].id} id={cards_content[2].id} icon={cards_content[2].icon} title={cards_content[2].title} content={cards_content[2].content} />
            </div>
            <div className="button-container">
                <button className="portfolio-button">More Projects</button>
            </div>  
        </div>

    );
}

export default Portfolio;