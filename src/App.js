import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import Table from "./table";
import Navbar from './Navbar';
import Footer from './Footer'

function App() {
  const [color, setColor] = useState("transparent")
  const [rows, setRows] = useState(1)
  const [cells, setCells] = useState(1)

  function addRow() {
    setRows(rows + 1)
  }

  function addCells() {
    setCells(cells + 1)
  }

  function clrChange(ev) {
    setColor(ev.target.value)
  }

  function removeRow() {
    setRows(prevState => prevState - 1)
  }

  function removeCells() {
    setCells(prevState => prevState - 1)
  }

  function clearAll() {
    setColor("transparent")
    setCells(1)
    setRows(1)
  }

  function fillUncolored(ev) {
    let cells = document.getElementsByClassName("cell")
    for (let i = 0; i < cells.length; i++) {
      if (cells[i].style.backgroundColor === "transparent") {
        cells[i].style.backgroundColor = setColor(ev.target.value)
      }
    }
    return cells
  }

  function fillAll(ev) {
    let cells = document.getElementsByClassName("cell")
    for (let i = 0; i < cells.length; i++) {
      cells[i].style.backgroundColor = setColor(ev.target.value)
    }
    return cells
  }

  return (
    <>
      <Navbar />
      <button onClick={() => addRow()}>Add row</button>
      <button onClick={() => addCells()}>Add column</button>
      <button onClick={() => removeRow()}>Remove Row</button>
      <button onClick={() => removeCells()}>Remove Column</button>
      <button onClick={() => fillUncolored()}>Fill all uncolored cells</button>
      <button onClick={() => fillAll()}>Fill all cells</button>
      <select id={"selection"} onInput={clrChange}>
        <option value={"transparent"}>None</option>
        <option value={"blue"}>Blue</option>
        <option value={"red"}>Red</option>
        <option value={"green"}>Green</option>
        <option value={"yellow"}>Yellow</option>
      </select>
      <button onClick={() => clearAll()}>Clear</button>
      <div>
        <Table rows={rows} cells={cells} color={color} />
        <Footer />
      </div>
    </>
  )



}

export default App;
