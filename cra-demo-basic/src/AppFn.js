import React, {
  useEffect,
  useState,
  useRef,
  memo,
  useLayoutEffect,
} from "react";

const AppFn = ({ name }) => {
  const [age, setAge] = useState(18);
  const mountRef = useRef(true);
  useLayoutEffect(() => {
    console.log("FunctionalApp-ComponentDidMount");

    return () => {
      console.log("FunctionalApp-ComponentWillUnmount");
    };
  }, []);

  useEffect(() => {
    if (mountRef.current !== true) {
      console.log("FunctionalApp-ComponentDidUpdate");
    } else {
      mountRef.current = false;
    }
  }, [age, name]);

  const handleAgeChange = () => {
    setAge(age + 1);
  };
  return (
    <div>
      {console.log("Function - Render")}
      <p>Age : {age}</p>
      <button onClick={handleAgeChange}>Increment Age</button>
      <button onClick={() => console.log(name)}>{name}</button>
    </div>
  );
};

// class AppFn extends React.Component {
//   componentDidMount() {
//     console.log("ComponentDidMount");
//   }
//   render() {
//     return <div className="AppFn">Functional App</div>;
//   }
// }

function arePropsEqual(prevProps, nextProps) {
  console.log(
    "Funcitonal App - prevProps: " +
      prevProps.name +
      " nextProps: " +
      nextProps.name
  );
  console.log("FunctionalApp-ShouldComponentUpdate");
  return prevProps.name === nextProps.name;
}

export default memo(AppFn, arePropsEqual);
