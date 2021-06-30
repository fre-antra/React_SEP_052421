import React from "react";
import {myStore} from "./Redux";

class Counter extends React.Component {
  handleAdd = () => {
    myStore.dispatch({type: 'counter/incremented'});
    console.log(myStore.getState());
  };
  handleSub = () => {
    myStore.dispatch({type: 'counter/decremented'});
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

// const useForceUpdate = () => {
//   const [update, setUpdate] = React.useState(0);
//   return [update, () => setUpdate(update + 1)];
// };

// const Counter = () => {
//   const [update, forceUpdate] = useForceUpdate();
//
//   // React.useEffect(() => {
//   //   myStore.subscribe(() => {
//   //     forceUpdate();
//   //     console.log(update);
//   //   });
//   // }, []);
//
//   const handleAdd = () => {
//     myStore.dispatch({ type: 'counter/incremented' });
//     console.log(myStore.getState());
//     forceUpdate();
//     console.log(update);
//   };
//   const handleSub = () => {
//     myStore.dispatch({ type: 'counter/decremented' });
//     console.log(myStore.getState());
//   };
//   return (
//       <>
//         <h1>FC Counter:{myStore.getState().value}</h1>
//         <button onClick={handleAdd}>Add</button>
//         <button onClick={handleSub}>Sub</button>
//       </>
//   );
// }

export default Counter;