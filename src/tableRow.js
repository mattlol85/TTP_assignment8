import React from "react";
import TableCell from "./tableCell";

export default function TableRow(props){

    let arr = []

    for(let i = 0; i<props.cells;i++){
        arr.push(<TableCell color={props.color}/>)
    }

    return(
        <div className={"tablerow"}>
            {arr}
        </div>

    )


}