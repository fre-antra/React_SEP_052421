import React from "react";

/**
 在 componentDidMount 初始化发请求；
 在 componentDidUpdate 判断参数是否变化，变化就调用请求函数重新请求数据；
 在 componentWillUnmount 生命周期取消发送请求。
 */
class App extends React.Component {

  state = {
    name: 'dexter'
  }

  handleClick = () => {
    this.setState({
      name: 'Sam'
    })
  }

  componentDidMount() {
    console.log('Did mount')
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('Did update')
  }

  componentWillUnmount() {
    console.log('Will Unmount')
  }

  render() {
    return (
        <>
          <h1>Hello {this.state.name}</h1>
          <button onClick={this.handleClick}>Change Name</button>
        </>
    )
  }
}

export default App;
