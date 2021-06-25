import React from "react";
import "./App.css";

// export default App;
<<<<<<< HEAD
const initialUser = [{ name: "Yasir" }, { name: "Ali" }, { name: "Aj" }];
class App extends React.Component {
    constructor(...args) {
        super(...args);
        this.state = {
            users: initialUser,
            searchTerm: "",
        };
    }
    componentDidUpdate(prevProps, prevState) {
        console.log("prevProps", prevProps);
        console.log("prevState", prevState);
        if (prevState.searchTerm !== this.state.searchTerm) {
            this.setState({
                users: initialUser.filter((user) =>
                    user.name.includes(this.state.searchTerm)
                ),
            });
        }
    }
    handleChange(e) {
        this.setState({
            searchTerm: e.target.value,
        });
    }

    render() {
        return (
            <>
                <input
                    type="text"
                    value={this.state.searchUser}
                    onChange={this.handleChange.bind(this)}
                />
                {this.state.users.map((user) => {
                    return (
                        <div
                            key={user.name}
                            style={{
                                textAlign: "center",
                                margin: "2rem",
                                background: "#333",
                                color: "#fff",
                                padding: "2rem",
                            }}
                        >
                            {user.name}
                        </div>
                    );
                })}
            </>
        );
    }
=======

// React.memo
class SubApp extends React.PureComponent {
  constructor(...args) {
    super(...args);
    console.log('SubApp-contructor');
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.age !== this.props.age) {
      return true;
    } else {
      return false;
    }
    // console.log('props', nextProps === this.props);
    // console.log('state', nextState === this.state);

    // console.log('SubApp-shouldComponentUpdate');
    // return true;
  }

  componentDidMount() {
    console.log('SubApp-didMount');
  }
  componentDidUpdate() {
    console.log('SubApp-didUpdate');
  }
  componentWillUnmount() {
    console.log('SubApp-WillUnmount');
  }
  render() {
    console.log('SubApp-render');
    return (
      <>
        <h1 id="mySubApp"> MySubApp </h1>
        <h2> Age:{this.props.age} </h2>
      </>
    );
  }
}

class App extends React.Component {
  constructor(...args) {
    super(...args);
    console.log('App-contructor');
    this.state = {
      name: 'patrick',
      age: 18,
    };
  }

  data = {
    name: 'patrick',
  };
  shouldComponentUpdate() {
    console.log('App-shouldComponentUpdate');
    return true;
  }

  handlerClick = () => {
    this.setState({
      name: 'Sam',
    });
  };
  handlerClickAge = () => {
    this.setState({
      age: 19,
    });
  };
  handlerClickData = () => {
    this.data = {
      ...this.data,
      name: 'Changed',
    };
  };
  componentDidMount() {
    console.log('myApp', document.querySelector('#myapp'));
    console.log('App-didMount');
  }
  componentDidUpdate() {
    console.log('App-didUpdate');
  }
  componentWillUnmount() {
    console.log('App-WillUnmount');
  }
  render() {
    let a = null;
    let b = null;
    console.log(a === b);
    console.log('App-render');
    return (
      <>
        <h1 id="myapp"> MyApp</h1>
        <h3>Hello {this.state.name}</h3>
        <h3>Hello {this.data.name}</h3>
        <button onClick={this.handlerClick}>Change Name</button>
        <button onClick={this.handlerClickAge}>Change Age</button>

        <button onClick={this.handlerClickData}>Change Name Data</button>
        <SubApp></SubApp>
      </>
    );
  }
>>>>>>> 600973bc3edfa09dd6611669ab84036a66f8c6f2
}
// const App = () => {
//     const [users, setUsers] = useState(initialUser);
//     const [searchUser, setSearchUser] = useState("");
//     useEffect(() => {
//         setUsers(initialUser.filter((user) => user.name.includes(searchUser)));
//     }, [searchUser]);

//     const handleChange = (e) => setSearchUser(e.target.value);
//     return (
//         <>
//             <input type="text" value={searchUser} onChange={handleChange} />
//             {users.map((user) => {
//                 return (
//                     <div
//                         style={{
//                             textAlign: "center",
//                             margin: "2rem",
//                             background: "#333",
//                             color: "#fff",
//                             padding: "2rem",
//                         }}
//                     >
//                         {user.name}
//                     </div>
//                 );
//             })}
//         </>
//     );
// };

export default App;

// let state = {
//   name: 'patrick',
// };

// // mutable
// state.name = 'sam';

// // imutable
// let oldState = state;
// state = {
//   ...state,
//   name: 'sam',
// };
