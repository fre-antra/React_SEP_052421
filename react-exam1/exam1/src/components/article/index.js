import React from 'react'

export default function Article(props) {

    const { themeColor, header, content, changeTitle } = props

    return (
        <div className={themeColor}>
            <div>{header}</div>
            <div>{content}</div>
            <button onClick={() => { changeTitle(themeColor) }}>{themeColor}</button>
        </div>
    )
}
