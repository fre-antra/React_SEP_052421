import React, { Component } from 'react'
import './ListItemStyle.css'

export class ListItem extends Component {
    // constructor(props) {
    //     super(props);
    //     // console.log(props);
    // }

    
    render() {
        const { todo, removeItem } = this.props
        return (
            <li className='todolist__list-item'>
                {/* <span>{this.props.todo.title}</span> */}
                <span>{todo.title}</span>
                <button id={todo.id} className="btn-remove" onClick={removeItem}>X</button>
            </li>
        )
    }
}

export default ListItem
