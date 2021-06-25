import React from 'react';
import './Layout.css';
import Title from '../Title/Title';
import CardContainer from '../CardContainer/CardContainer';

export default class Layout extends React.Component {
    state = {
        color: "",
    };

    handleButtonClick = (event) => {
        const color = event.target.attributes.color.value;
        this.setState({
            color: color,
        });
    };

    render () {
        const style_color = {color: (this.state.color === "" ? "black" : this.state.color)};
        return (
            <>
            <Title style={style_color}></Title>
            <CardContainer handleButtonClick={this.handleButtonClick} color={this.state.color}></CardContainer>
            </>
        );
    }
}