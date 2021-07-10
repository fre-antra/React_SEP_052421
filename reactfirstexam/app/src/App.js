import logo from './logo.svg';
import './App.css';
import Card from "./components/card/card";
import React from 'react';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {color: 'purple'};
    this.changeColor = this.changeColor.bind(this);
    this.addBorder = this.addBorder.bind(this);
  }
  changeColor(new_color) {
    console.log("this is changeColor function");
    this.setState({color:new_color});
  }
  addBorder(){
    console.log("addBorder");
  }
  render(){
    console.log(this);
    return (
      <div className="App">
        <header className="App-header" style={{color:this.state.color}}>lorem: when an unknown printer took a galley of type and scrambled it to make</header>
        <section>
            <Card color={'blue'} setColor={()=>{this.changeColor("blue"); this.addBorder()}}/>
            <Card color={'red'} setColor={()=>this.changeColor("red")}/>
            <Card color={'pink'} setColor={()=>this.changeColor("pink")}/>
            <Card color={'orange'} setColor={()=>this.changeColor("orange")}/>
        </section>
      </div>
    );
  }
}

