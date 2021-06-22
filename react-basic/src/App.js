import React, { useState, useEffect, useRef } from "react";
import "./App.css";

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: 'patrick',
//     };
//     // let h1 = document.querySelector('h1');
//     // console.log(h1);
//     this.handlerClick = this.handlerClick.bind(this);
//   }

//   handlerClick() {
//     console.log(this);
//     this.setState({
//       name: 'Sam',
//     });
//   }

//   render() {
//     return (
//       <>
//         <h1>Hello {this.state.name}</h1>
//         <button onClick={this.handlerClick}>Change Name</button>
//       </>
//     );
//   }
// }

// export default App;

// class App extends React.Component {
//   state = {
//     name: "patrick",
//   };

//   handlerClick = () => {
//     this.setState({
//       name: "Sam",
//     });
//   };
//   componentDidMount() {
//     console.log("didMount");
//   }
//   componentDidUpdate() {
//     console.log("didUpdate");
//   }
//   componentWillUnmount() {
//     console.log("WillUnmount");
//   }
//   render() {
//     return (
//       <>
//         <h1>Hello {this.state.name}</h1>
//         <button onClick={this.handlerClick}>Change Name</button>
//       </>
//     );
//   }
// }

const App = () => {
  const [name, setName] = useState("Patrick");
  const isMounted = useRef(false); // useRef does not cause component to re-render

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      console.log("didMount");
    } else {
      console.log("didUpdate");
    }

    return () => console.log("WillUnmount");
  }, [name]);

  const handlerClick = () => {
    setName("Sam");
  };

  return (
    <>
      <h1>Hello {name}</h1>
      <button onClick={handlerClick}>Change Name</button>
    </>
  );
};

export default App;
