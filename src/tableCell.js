import React from "react";


export default function TableCell(props){
    let calCell = () => {
        let colArr = []
        for(let i = 0; i<props.cells; i++){
            colArr.push(<div className={"table"}></div>)
        }
        return colArr.map(elm => <td onClick={cellClrChange}>{elm}</td>)
    }
    function cellClrChange(ev){
        ev.target.setAttribute("style","background-color: blue")
    }

    return(
        <>
            {calCell()}
            </>

    )
}