import React from "react";
import "./App.css";

// export default App;
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
