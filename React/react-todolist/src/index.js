import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { myStore } from './Redux/Redux';

import WithTodosData from './components/WithTodosData/WithTodosData';

function Title(props) {
  return <h1>{props.title}</h1>;
}

function Title2(props) {
  return <h4>{props.title}</h4>;
}
// class RenderPropsTest extends React.Component {
//   render() {
//     return (
//       <WithTodosData
//         render={(title) => <Title2 title={title}></Title2>}
//       ></WithTodosData>
//     );
//   }
// }
class Counter extends React.Component {
  handleAdd = () => {
    myStore.dispatch({ type: 'counter/incremented' });
    console.log(myStore.getState());
  };
  handleSub = () => {
    myStore.dispatch({ type: 'counter/decremented' });
    console.log(myStore.getState());
  };
  componentDidMount() {
    myStore.subscribe(() => this.forceUpdate());
  }
  render() {
    return (
      <>
        <h1>Counter:{myStore.getState().value}</h1>
        <button onClick={this.handleAdd}>Add</button>
        <button onClick={this.handleSub}>Sub</button>
      </>
    );
  }
}

const useForceUpdate = () => {
  const [update, setUpdate] = React.useState(0);
  return [update, () => setUpdate(update + 1)];
};

function FCounter() {
  const [update, forceUpdate] = useForceUpdate();

  // React.useEffect(() => {
  //   myStore.subscribe(() => {
  //     forceUpdate();
  //     console.log(update);
  //   });
  // }, []);

  const handleAdd = () => {
    myStore.dispatch({ type: 'counter/incremented' });
    console.log(myStore.getState());
    forceUpdate();
    console.log(update);
  };
  const handleSub = () => {
    myStore.dispatch({ type: 'counter/decremented' });
    console.log(myStore.getState());
  };
  return (
    <>
      <h1>FC Counter:{myStore.getState().value}</h1>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleSub}>Sub</button>
    </>
  );
}
ReactDOM.render(<FCounter />, document.getElementById('root'));
