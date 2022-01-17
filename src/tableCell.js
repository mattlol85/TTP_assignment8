import React from "react";


export default function TableCell(props){
    let calCell = () => {
        let colArr = []
        for(let i = 0; i<props.cells; i++){
            colArr.push(<div className={"table"}></div>)
        }
        return colArr.map(elm => <td>{elm}</td>)
    }

    return(
        <>
            {calCell()}
            </>

    )
}