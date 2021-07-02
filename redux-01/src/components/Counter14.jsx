import { myConnect } from '../Redux/react-redux';

const Counter14 = ({ handleAdd, handleSub, counter }) => {
  return (
    <>
      <h1>Counter 14 - FC - my React-redux & store(offical)</h1>
      <h2>Counter:{counter}</h2>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleSub}>Sub</button>
      <hr />
    </>
  );
};

function mapStateToProps(state) {
  return {
    counter: state.value,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    handleAdd: () => dispatch({ type: 'counter/incremented' }),
    handleSub: () => dispatch({ type: 'counter/decremented' }),
  };
}

export default myConnect(mapStateToProps, mapDispatchToProps)(Counter14);
