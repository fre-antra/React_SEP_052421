import React from "react";
import { TableRow } from "./TableRow";

export class StockList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            stocks: [
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
            ],
        };
    }

    tapRow() {
        if (this.state.stocks instanceof Array) {
            return this.state.stocks.map((item, i) => {
                return <TableRow item={item} key={i} />;
            });
        }
    }

    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <td>Stock Name</td>
                            <td>Stock price</td>
                        </tr>
                    </thead>
                    <thead>{this.tapRow()}</thead>
                </table>
            </div>
        );
    }
}
