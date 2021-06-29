import React, { useState,useEffect } from 'react'
import Article from "../article"
import './index.css'

const cards = [
    { "cardTitle": "title1", "cardContent": "content1","cardColor":"blue"},
    { "cardTitle": "title2", "cardContent": "content2", "cardColor": "black" },
    { "cardTitle": "title3", "cardContent": "content3", "cardColor": "green" },
    { "cardTitle": "title4", "cardContent": "content4","cardColor":"red"}
];
function getCards(){
  return new Promise ((res,rej)=>{
    setTimeout(()=>{
        res(cards)
    },2000)
  })
}


export default function Home() {

    const [themeColor, setThemeColor] = useState("black")
    const [cardArr,setArr]=useState([])

    useEffect(() => {
        getCards().then((res) => {
            setArr([...res])
        })    
    },[])


    const handleClick = (themeColor) => {
        console.log(themeColor)
        setThemeColor(themeColor)
    }

    return (
        <div className="home-wrapper">
            <h1 className={themeColor + " homeHeader"} >First React Exam</h1>
            <div className="articles">
                {
                    cardArr.map((item, index) => {
                        return <Article
                                themeColor={item.cardColor}
                                header={item.cardTitle}
                                content={item.cardContent}
                                changeTitle={handleClick}
                                />
                })
                }
                {/* <Article
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
                /> */}
            </div>
        </div>
    )
}

// export default function Home() {

//     const [themeColor, setThemeColor] = useState("black")



//     const handleClick = (themeColor) => {
//         console.log(themeColor)
//         setThemeColor(themeColor)
//     }

//     return (
//         <div className="home-wrapper">
//             <h1 className={themeColor + " homeHeader"} >First React Exam</h1>
//             <div className="articles">
//                 <Article
//                     themeColor="black"
//                     header="Declarative"
//                     content="React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes."
//                     changeTitle={handleClick}
//                 />
//                 <Article
//                     themeColor="blue"
//                     header="Declarative"
//                     content="React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes."
//                     changeTitle={handleClick}
//                 />
//                 <Article
//                     themeColor="green"
//                     header="Declarative"
//                     content="React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes."
//                     changeTitle={handleClick}
//                 />
//                 <Article
//                     themeColor="red"
//                     header="Declarative"
//                     content="React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes."
//                     changeTitle={handleClick}
//                 />
//             </div>
//         </div>
//     )
// }
