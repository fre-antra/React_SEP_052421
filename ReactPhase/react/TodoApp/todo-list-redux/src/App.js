import Counter from "./component/Counter";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "./redux/ducks/user";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser);
  }, [dispatch]);

  // user一开始是undefined，当成功fetch（call 完useEffect）到data时这里的user是array
  // 所以一开始是这个user是object不能iterate
  const user = useSelector((state) => state.user.user);

  //当user是array时，filter出想要的data，否则为[]
  const filter = user !== undefined ? user.filter((e) => e.userId === 1) : [];
  // filtered data 出来后是array（因为filter返回新的array）, array里的object才是user info object，才能选title
  // const helloContent = filt.filter((e) => e.id === 6)[0].title

  const count = useSelector((state) => state.counter.count); // the state is from the reduce of configStore
  // 这个的目的就是从众多reducer中选出你要用的state的reducer，然后选取reducer中的state props
  const voters = [
    "Anthony Sistilli ",
    "Bob Smith",
    "Stephanie Foo",
    "Kevin Ma",
  ];
  return (
    <div className="App">
      {count && (
        <h1> Hello, {filter.filter((e) => e.id === count)[0].title}</h1>
      )}
      <h1>Redux made easy</h1>
      <h2> Total Votes: {count}</h2>
      {voters.map((voter, index) => (
        <Counter key={index} name={voter} />
      ))}
    </div>
  );
}

export default App;
