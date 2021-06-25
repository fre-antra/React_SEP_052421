import React from 'react';
import './CardContainer.css';
import Card from '../Card/Card';

export default class CardContainer extends React.Component {
    render () {
        const {color, handleButtonClick} = this.props;
        const cardStyle = (targetColor) => {
            return {
                "box-shadow": (targetColor === color ? "0 0 10px " + color : "0 0 0")
            };
        };
        return (
            <div className="card-container">
            <Card
                handleButtonClick={handleButtonClick}
                title="Man in custody in connection to NYC shooting inches away from kids: police"
                content="A man is in custody in connection to the broad-daylight Bronx shooting inches away from two terrified children, police sources told the New York Post on Friday.The suspect was being questioned at the 44th Precinct on Friday morning in connection to the June 17 caught-on-video shooting on Sheridan Avenue near Mt. Eden Parkway — in which a 24-year-old man was struck and two siblings, a 10-year-old girl and a 5-year-old boy, were trampled as the bullets flew, according to the sources.Miraculously, neither child was struck by the gunfire."
                color="red"
                style={cardStyle("red")}
            ></Card>
            <Card
                handleButtonClick={handleButtonClick}
                title="Man in custody in connection to NYC shooting inches away from kids: police"
                content="A man is in custody in connection to the broad-daylight Bronx shooting inches away from two terrified children, police sources told the New York Post on Friday.The suspect was being questioned at the 44th Precinct on Friday morning in connection to the June 17 caught-on-video shooting on Sheridan Avenue near Mt. Eden Parkway — in which a 24-year-old man was struck and two siblings, a 10-year-old girl and a 5-year-old boy, were trampled as the bullets flew, according to the sources.Miraculously, neither child was struck by the gunfire."
                color="blue"
                style={cardStyle("blue")}
            ></Card>
            <Card
                handleButtonClick={handleButtonClick}
                title="Man in custody in connection to NYC shooting inches away from kids: police"
                content="A man is in custody in connection to the broad-daylight Bronx shooting inches away from two terrified children, police sources told the New York Post on Friday.The suspect was being questioned at the 44th Precinct on Friday morning in connection to the June 17 caught-on-video shooting on Sheridan Avenue near Mt. Eden Parkway — in which a 24-year-old man was struck and two siblings, a 10-year-old girl and a 5-year-old boy, were trampled as the bullets flew, according to the sources.Miraculously, neither child was struck by the gunfire."
                color="green"
                style={cardStyle("green")}
            ></Card>
            <Card
                handleButtonClick={handleButtonClick}
                title="Man in custody in connection to NYC shooting inches away from kids: police"
                content="A man is in custody in connection to the broad-daylight Bronx shooting inches away from two terrified children, police sources told the New York Post on Friday.The suspect was being questioned at the 44th Precinct on Friday morning in connection to the June 17 caught-on-video shooting on Sheridan Avenue near Mt. Eden Parkway — in which a 24-year-old man was struck and two siblings, a 10-year-old girl and a 5-year-old boy, were trampled as the bullets flew, according to the sources.Miraculously, neither child was struck by the gunfire."
                color="orange"
                style={cardStyle("orange")}
            ></Card>
            </div>
        );
    }
}