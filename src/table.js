import React from "react";
import TableRow from "./tableRow";
import TableCell from "./tableCell";

export default function Table(props){

    return(
        <div>
            <table>
                <tbody>
                    <TableRow rows={props.rows}/>
                </tbody>
            </table>
        </div>
    )
}