import React from 'react';
import './Title.css';

export default class Title extends React.Component {
    render () {
        const {style} = this.props;
        return (
            <h1 style={style}>
                Breaking News, Latest News and Current News from FOXNews.com. Breaking news and video.
                View the latest news and breaking news today for U.S., world, weather, entertainment, politics and health at CNN.com.
            </h1>
        );
    }
}