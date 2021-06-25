import React from 'react'
import './Main.css'

const Main = ({color, changeColor, boxFrame}) => {
    return (
  
        <div 
        className="grid-item"
        style={boxFrame.boxShadow.slice(12) === color ? boxFrame:null}
        >
            <h4 className="card__title">What is Lorem Ipsum?</h4>
            <p className="card__content">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
            <button
                className="btn__changeColor"
                style={{ backgroundColor: `${color}`}}
                onClick={changeColor}
            >
                set {color}
            </button>
        </div>
    )
}

export default Main;