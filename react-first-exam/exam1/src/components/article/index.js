import React from 'react'
import './index.css'

export default function Article(props) {

    const { themeColor, header, content, changeTitle } = props

    return (
        <div className={themeColor + " article"}>
            <div>{header}</div>
            <div className="content">{content}</div>
            <button className="btn" onClick={() => { changeTitle(themeColor) }}>{themeColor}</button>
        </div>
    )
}
