import React from 'react'
import Header from "../Header/Header";
import "./Layout.css";
import WithTodoList from '../../renderProps/WithTodoList';

export default function Layout({ children, handleNav }) {
  // console.log('children', {children})
  return (
    <>
      <header className="header">
        {/* <Header handleNav ={handleNav}/> */}
        <WithTodoList
          render={(todolist) => <Header todolist={todolist}></Header>}
        />
      </header>
      <main className="content">{children}</main>
    </>
  );
}
