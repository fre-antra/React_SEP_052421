import React, {useState, useEffect} from "react";

/**
 useEffect给函数增加了操作副作用的能力，他跟class组件中的
 didMount, DidUpdate, WillUnmount具有相同的作用，只不过
 被合并成了一个api。
 */
const App1 = () => {

  const [name, setName] = useState({name: 'Dexter'})

  useEffect(() => {
    console.log('Did mount')
    console.log('Did update')
    return () => {
      console.log('Will unmount')
    }
  })

  const handlerClick = () => {
    setName({name: 'Sam'})
  }

  return (
      <>
        <h1>Hello {name.name}</h1>
        <button onClick={handlerClick}>Change Name</button>
      </>
  )
}

export default App1;