import React from "react";
import Layout from "./components/Layout/Layout";
import TodoList from "./components/TodoList/TodoList";
import Dashboard from "./components/Dashboard/Dashboard";

/**
 在 componentDidMount 初始化发请求；
 在 componentDidUpdate 判断参数是否变化，变化就调用请求函数重新请求数据；
 在 componentWillUnmount 生命周期取消发送请求。
 */
// React.memo
class SubApp extends React.PureComponent {
  constructor(...args) {
    super(...args);
    console.log('Subapp-constructor')
  }

  // 三种触发rerender的行为 this.setProps(), setState() forceUpdate()
  // 只要触发了重渲染 子组件就会跟着重新渲染 我们可以用shouldComponentUpdate方法
  // React.PureComponent 和 React.memo 让子组件不进行不必要的重新渲染
  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return nextProps.age !== this.props.age;
  }
}

class App extends React.Component {

  state = {
    activePage: 'TodoList'
  }

  // componentDidMount() {
  //   console.log('Did mount')
  // }
  //
  // componentDidUpdate(prevProps, prevState, snapshot) {
  //   console.log('Did update')
  // }
  //
  // componentWillUnmount() {
  //   console.log('Will Unmount')
  // }

  handleChangeActivePage = newPage => {
    this.setState({
      activePage: newPage
    })
  }

  render() {

    let content = null;
    switch (this.state.activePage) {
      case "Dashboard":
        content = <Dashboard/>
        break;
      case "TodoList":
        content = <TodoList/>
        break;
      default:
        break;
    }

    return (
        <Layout handleChangeActivePage={this.handleChangeActivePage}>
          {content}
        </Layout>
    )
  }
}

export default App;
