import React from "react";
import { TableRow } from "./TableRow";

export class UserList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [
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
            ],
        };
    }
    tabRow() {
        if (this.state.users instanceof Array) {
            return this.state.users.map((user, i) => {
                return <TableRow item={user} key={i} />;
            });
        }
    }
    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <td>ID</td>
                            <td>Name</td>
                        </tr>
                    </thead>
                    <tbody>{this.tabRow()}</tbody>
                </table>
            </div>
        );
    }
}
