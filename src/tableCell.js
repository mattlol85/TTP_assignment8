import React from "react";


export default function TableCell(props){


    console.log(props.color)


    function cellClrChange(ev){
        ev.target.setAttribute("style",`background-color: ${props.color}`)
    }

    return(
        <div className={"cell"} onClick={cellClrChange}></div>

    )
}