import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import Table from "./table";

function App() {
  const [color, setColor] = useState("transparent")
  const[rows, setRows] = useState(1)
  const [cells, setCells] = useState(1)

  function addRow(){
    setRows(rows+1)
  }

  function addCells(){
    setCells(cells + 1)
  }

  function clrChange(ev){
      setColor(ev.target.value)
  }

  function removeRow(){
      setRows(prevState => prevState - 1)
  }

  function removeCells(){
      setCells(prevState => prevState - 1)
  }

  function clearAll(){
      setColor("transparent")
      setCells(1)
      setRows(1)
  }



  return(
      <>
          <button onClick={() => addRow()}>Add row</button>
          <button onClick={() => addCells()}>Add column</button>
          <button onClick={() => removeRow()}>Remove Row</button>
          <button onClick={() => removeCells()}>Remove Column</button>
          <select id={"selection"} onInput={clrChange}>
            <option value={"transparent"}>None</option>
            <option value={"blue"}>Blue</option>
            <option value={"red"}>Red</option>
            <option value={"green"}>Green</option>
            <option value={"yellow"}>Yellow</option>
          </select>
          <button onClick={() => clearAll() }>Clear</button>
            <div>
              <Table rows={rows} cells={cells} color={color}/>
            </div>
      </>
  )



}

export default App;
