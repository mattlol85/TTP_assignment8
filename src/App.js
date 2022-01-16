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
  return(
      <div>
          <button onClick={() => addRow()}>Add row</button>
          <button onClick={() => addCells()}>Add column</button>
            <div>
              <Table rows={rows} cells={cells}/>
            </div>
      </div>
  )



}

export default App;
