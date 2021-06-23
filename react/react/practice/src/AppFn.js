import React, {useState, useEffect} from 'react'

export default function AppFn() {
  const [name, setName] = useState('John')
  useEffect(()=>console.log('In AppFn, didMount'), [])

  const changeName = () => {
    setName('Sam')
  }
  
  console.log('render:', name)
  return (
    <div>
        <h1>my name is {name}</h1>
        <button onClick={changeName}>change name</button>
        <SubFn passName = {name}></SubFn>
    </div>
  )
}

const SubFn = ({passName}) => {
  const [lastName, setLastName] = useState('Smith')
  console.log('SubFn', passName);
  useEffect(() => console.log("In SubFn, didMount"), []);
  const changeLastName = () => {
    setLastName("Mark");
  }
  return (
    <div>
      <h2>
        this is SubFn: {passName} {lastName}
      </h2>
      <button onClick={changeLastName}>change name</button>
    </div>
  );
}