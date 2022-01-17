import React from "react";
import TableRow from "./tableRow";
import TableCell from "./tableCell";

export default function Table(props){
    function cellClrChange(ev){
        ev.target.setAttribute("style","background-color: blue")
    }
    return(
        <div>
            <table>
                <tbody>
                    <TableRow rows={props.rows} cells={props.cells}/>
                </tbody>
            </table>
        </div>
    )
}