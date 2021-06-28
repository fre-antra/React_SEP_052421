import React, {useState} from "react";
import './Card.css'
import $ from 'jquery';

const Card = props => {

  const handlerClick = e => {
    const tar = e.target.id.toString()
    $('#' + tar).parent().siblings('div').removeAttr('style');
    $('#' + tar).parent().css({
      'border': `2px solid ${e.target.id}`
    })
    $('#' + tar).parent().css("box-shadow", `5px 5px 5px ${tar}`)
    $('.header header').css('color', `${tar}`)
  }

  return (
      <div className="content">
        <header>{props.header}</header>
        <main>{props.content}</main>
        <div className="button" onClick={handlerClick} id={props.color} style={{backgroundColor: props.color}}>
          Set Color
        </div>
      </div>
  )
}

export default Card;