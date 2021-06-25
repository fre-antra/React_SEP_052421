import React, { Component, useState } from 'react';
import Tab from './Tab';
import './App.css';

const title = 'card title';
const text = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentColor: 'black',
    };
  }

  render() {
    return (
      <div className='App'>
        <h1 className={`${this.state.currentColor} header`}>
          the header
        </h1>
        <div className='flex-box'>
          <Tab
            title={title}
            text={text}
            color='blue'
            currentColor={this.state.currentColor}
            setColor={() =>
              this.setState({
                currentColor: 'blue',
              })
            }
          />
          <Tab
            title={title}
            text={text}
            color='black'
            currentColor={this.state.currentColor}
            setColor={() =>
              this.setState({
                currentColor: 'black',
              })
            }
          />
          <Tab
            title={title}
            text={text}
            color='red'
            currentColor={this.state.currentColor}
            setColor={() =>
              this.setState({
                currentColor: 'red',
              })
            }
          />
          <Tab
            title={title}
            text={text}
            color='green'
            currentColor={this.state.currentColor}
            setColor={() =>
              this.setState({
                currentColor: 'green',
              })
            }
          />
        </div>
      </div>
    );
  }
}

export default App;
