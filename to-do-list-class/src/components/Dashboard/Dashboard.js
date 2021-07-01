import React, { Component } from 'react'
import './Dashboard.css'
import updateComponent from '../../Hoc/withTodoList';

class Dashboard extends Component {



  render() {
    console.log(this.props)
    const {toDoLists} = this.props;
    const counter = toDoLists.filter(item=>item.completed === true).length;
    const counterTotal = toDoLists.length;
    return (
      <div className="dashboardContainer">
        <div>Complete {counter}</div>
        <div>Total {counterTotal}</div>
      </div>
    );
  }
}

export default updateComponent(Dashboard);