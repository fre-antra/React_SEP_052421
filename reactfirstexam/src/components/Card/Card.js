import React, {useState} from "react";
import './Card.css'
import $ from 'jquery';

let color = ''
const Card = props => {

  const [header, setHeader] = useState('Wisconsin Democratic election official: Don\'t water Trump\'s plant of felony')
  const [content, setContent] = useState('Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.')

  if (props.num === 1) {
    color = 'blue'
  } else if (props.num === 2) {
    color = 'black'
  } else if (props.num === 3) {
    color = 'red'
  } else if (props.num === 4) {
    color = 'green'
  }

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
        <header>{header}</header>
        <main>{content}</main>
        <div className="button" onClick={handlerClick} id={color} style={{backgroundColor: color}}>
          Set Color
        </div>
      </div>
  )
}

export default Card;