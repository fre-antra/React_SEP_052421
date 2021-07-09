import React from 'react';
import './About.css'

const About = () => {
    return (
        <div className="about">
            <div className="about-title">
                <h1>About Me</h1>
                <p><em>Sharing a little bit of my story... </em></p>
            </div>
            <div className="about-content">
                <h2>General Overview</h2>
                <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <h2>Statistics</h2>
                <p><em>And for those that don't fancy reading:</em></p>
                <div>
                    <p>Male, 200 years old.</p>
                    <p>Five feet 110 inches</p>
                    <p>Favorite fonts:Roboto</p>
                    <p>Loves to learn new things</p>
                </div>                   
            </div>
            <div className="button-container">
                <button className="contact-button">Contact</button>
            </div>            
        </div>
    );
}

export default About;