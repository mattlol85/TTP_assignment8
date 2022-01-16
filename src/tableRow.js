import React from "react";

export default function TableRow(props){

    let rows = props.rows
    let arr = []
    const displayRows = () => {
        for(let i = 0; i<rows;i++){
            arr.push("that")
        }
        return arr
    }
    displayRows()
    return(
        <div>
            {arr.map(elm => <tr>{elm}</tr>)}
        </div>

    )


}