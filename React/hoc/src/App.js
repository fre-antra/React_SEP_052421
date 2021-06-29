import logo from "./logo.svg";
import "./App.css";
import { HOC } from "./utils/hoc";
import { StockList } from "./component/StockList";
import { UserList } from "./component/UserList";
const StocksData = [
    {
        id: 1,
        name: "TCS",
    },
    {
        id: 2,
        name: "Infosys",
    },
    {
        id: 3,
        name: "Reliance",
    },
];
const UsersData = [
    {
        id: 1,
        name: "Krunal",
    },
    {
        id: 2,
        name: "Ankit",
    },
    {
        id: 3,
        name: "Rushabh",
    },
];
let Stocks = HOC(StockList, StocksData);
let Users = HOC(UserList, UsersData);
function App(props) {
    console.log("this is app", props);
    return (
        <div className="App">
            <header className="App-header">
                <Stocks></Stocks>
                <Users></Users>
            </header>
        </div>
    );
}
export default App;
