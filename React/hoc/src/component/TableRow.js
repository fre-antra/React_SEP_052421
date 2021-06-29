import React from "react";

export class TableRow extends React.Component {
    render() {
        return (
            <tr>
                <td>{this.props.item.id}</td>
                <td>{this.props.item.name}</td>
            </tr>
        );
    }
}
