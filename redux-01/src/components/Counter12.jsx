import { connect } from 'react-redux';

const Counter12 = ({ handleAdd, handleSub, counter }) => {
  console.log(counter);
  return (
    <>
      <h1>Counter 12 - FC - React-redux(offical)</h1>
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

export default connect(mapStateToProps, mapDispatchToProps)(Counter12);
