import { connect } from 'react-redux';
import { useState } from 'react';

const Counter13 = ({ handleAdd, handleSub, counter }) => {
  const [update, setUpdate] = useState(0);

  const myAdd = () => {
    handleAdd();
    setUpdate(update + 1);
  };

  // console.log(counter);
  return (
    <>
      <h1 style={{ color: 'red' }}>
        Counter 13 - FC - Provider & myStore -- `Debugging`
      </h1>
      <p>
        这个不能运作的原因是当 store state 改变时，react-redux
        没有侦听到，也没有调用 mapStateToProps，估计原因是 myStore
        的设计有缺漏。
      </p>
      <h2>Counter:{counter}</h2>
      <button onClick={myAdd}>Add</button>
      <button onClick={handleSub}>Sub</button>
      <hr />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    counter: state.value,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleAdd: () => dispatch({ type: 'counter/incremented' }),
    handleSub: () => dispatch({ type: 'counter/decremented' }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter13);
