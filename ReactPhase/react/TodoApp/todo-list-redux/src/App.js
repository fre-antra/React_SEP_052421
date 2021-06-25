import Counter from "./component/Counter";
import { useSelector } from "react-redux";


function App() {
  const count = useSelector((state) => state.counter.count); // the state is from the reduce of configStore
  // 这个的目的就是从众多reducer中选出你要用的state的reducer，然后选取reducer中的state props
  const voters = [
    "Anthony Sistilli ",
    "Bob Smith",
    "Stephanie Foo",
    "Kevin Ma"
  ];
  return (
    <div className="App">
      <h1>Redux made easy</h1>
      <h2> Total Votes: {count}</h2>
      {voters.map((voter) => (
        <Counter name={voter} />
      ))}
    </div>
  );
}

export default App;
