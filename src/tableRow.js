import React from "react";
import TableCell from "./tableCell";

export default function TableRow(props){

    let rows = props.rows
    let arr = []
    const displayRows = () => {
        for(let i = 0; i<rows;i++){
            arr.push(<div className={"table"}></div>)
        }
        return arr
    }
    displayRows()
    return(
        <div id={"tablerow"}>
            {arr.map(elm => {
                return(<tr >{elm}
                    <TableCell cells={props.cells} color={props.color}/>
                    </tr>)
            })}
        </div>

    )


}