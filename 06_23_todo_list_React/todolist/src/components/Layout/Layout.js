import React, { Fragment } from 'react';
import Header from '../Header/Header';
import './Layout.css';

class Layout extends React.Component {
  render() {
    return (
      <Fragment>
        <header className='header'>
          <Header></Header>
        </header>
        <main className="content">{this.props.children}</main>
      </Fragment>
    );
  }
}

export default Layout;