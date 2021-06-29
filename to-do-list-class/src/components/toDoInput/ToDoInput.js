import React, { Component } from 'react'
import './toDoInput.css';

export default class Login extends Component {
  render() {
    const { input, change, submit } = this.props;
    // console.log("input", input);
    return (
    <form onSubmit={submit} className='to-do-list-form'>
        <input className='to-do-list-input' type='text' placeholder='To do item' name='input' value={input} onChange={change}/>
      <input className='to-do-list-submit' type='submit' value='Submit' />
    </form>
  )
  }
}
