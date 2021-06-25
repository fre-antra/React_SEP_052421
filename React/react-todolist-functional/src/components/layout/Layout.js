import React from 'react'
import Header from '../header/Header'
import './Layout.css'

function Layout(props) {
  const { children } = props
  return (
    <>
      <header className='header'>
        <Header></Header>
      </header>
      <main className='content'>{children}</main>
    </>
  )
}
export default Layout
