import React, { useState } from 'react'
import Article from "../article"

export default function Home() {

    const [themeColor, setThemeColor] = useState("black")

    const handleClick = (themeColor) => {
        console.log(themeColor)
        setThemeColor(themeColor)
    }

    return (
        <div>
            <div className={themeColor}>First React Exam</div>
            <Article
                themeColor="black"
                header="Declarative"
                content="React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes."
                changeTitle={handleClick}
            />
            <Article
                themeColor="blue"
                header="Declarative"
                content="React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes."
                changeTitle={handleClick}
            />
            <Article
                themeColor="green"
                header="Declarative"
                content="React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes."
                changeTitle={handleClick}
            />
            <Article
                themeColor="red"
                header="Declarative"
                content="React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes."
                changeTitle={handleClick}
            />
        </div>
    )
}
