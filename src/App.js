import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import Table from "./table";

function App() {
  const [color, setColor] = useState("transparent")
  const[rows, setRows] = useState(1)
  const [cells, setCells] = useState(0)

  function addRow(){
    setRows(rows+1)
  }

  function addCells(){
    setCells(cells + 1)
  }

  function clear(){
    setCells(0)
    setRows(1)
    setColor("transparent")
  }

  function clrChange(ev){
      setColor(ev.target.value)
  }

  return(
      <div>
          <button onClick={() => addRow()}>Add row</button>
          <button onClick={() => addCells()}>Add column</button>
          <button onClick={() => clear()}>Clear Grid</button>
          <select id={"selection"} onChange={clrChange}>
            <option value={"transparent"}>None</option>
            <option value={"blue"}>Blue</option>
            <option value={"red"}>Red</option>
            <option value={"green"}>Green</option>
            <option value={"yellow"}>Yellow</option>
          </select>
            <div>
              <Table rows={rows} cells={cells} color={color}/>
            </div>
      </div>
  )



}

export default App;
