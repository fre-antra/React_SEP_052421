import React, {useState, useEffect} from "react";

/**
 useEffect给函数增加了操作副作用的能力，他跟class组件中的
 didMount, DidUpdate, WillUnmount具有相同的作用，只不过
 被合并成了一个api。
 */
// let firstCall = true;
const App1 = () => {

  const [name, setName] = useState({name: 'Dexter'})
  const [num, setNum] = useState(0)
  const firstCallRef = React.useRef(true)

  useEffect(() => {
    console.log('Did mount!')
  }, [])

  useEffect(() => {
    if (firstCallRef.current !== true) {
      console.log('Did Update!')
    } else {
      firstCallRef.current = false
    }
    return () => {
      console.log('Will Unmount!')
    }
  }, [num])

  const handlerClick = () => {
    setName({name: 'Sam'})
  }

  return (
      <>
        <h1>Hello {name.name}</h1>
        <button onClick={handlerClick}>Change Name</button>
        <button onClick={() => setNum(num + 1)}>Click Times: {num}</button>
      </>
  )
}

export default App1;