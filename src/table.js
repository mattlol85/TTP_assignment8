import React from "react";
import TableRow from "./tableRow";
import TableCell from "./tableCell";

export default function Table(props){
    let table = []
    for(let i = 0; i<props.rows;i++){
        table.push(<TableRow cells={props.cells} color={props.color}/>)
    }

    return(
        <div className={"table"}>{table}</div>
    )
}