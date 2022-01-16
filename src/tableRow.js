import React from "react";
import TableCell from "./tableCell";

export default function TableRow(props){

    let rows = props.rows
    let arr = []
    const displayRows = () => {
        for(let i = 0; i<rows;i++){
            arr.push("that")
        }
        return arr
    }

    const calCell = () => {
        let colArr = []
        for(let i = 0; i<props.cells; i++){
            colArr.push("these")
        }
        return colArr.map(elm => <td>{elm}</td>)
    }
    displayRows()
    return(
        <div id={"tablerow"}>
            {arr.map(elm => {
                return(<tr>{elm}
                    {calCell()}
                    </tr>)
            })}
        </div>

    )


}