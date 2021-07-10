import React from 'react';
import "./card.css";

export default class Card extends React.Component{
    render(){
        return (
            <div className="card-container">
                <h1 > this is the card's header </h1>
                <p>this is card paragraph:Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius incidunt
        cupiditate, aspernatur consequuntur porro excepturi dolore, velit
        possimus atque repellat unde veritatis sed odit modi. Optio corporis
        repudiandae labore maiores placeat, nostrum illum modi nam dicta
        dignissimos beatae ad porro? </p>
                <button 
                    className="button" 
                    onClick={this.props.setColor}
                    style={{backgroundColor: this.props.color}}
                >
                    Click me
                </button>
            </div>
        );
    }
}