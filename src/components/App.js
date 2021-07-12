import React, { useEffect, useState } from "react"
import GroceryList from "./GroceryList"
import GroceryForm from "./GroceryForm"

const App = () => {
  const [ groceries, setGroceries ] = useState([])

  useEffect(() => {
    fetch("http://localhost:4000/groceries")
      .then(resp => resp.json())
      .then(data => setGroceries(data))
  }, [])

  const handleAddGrocery = (grocery) => {
    setGroceries([...groceries, grocery])
  }

  return (
    <>
      <h1>GroceryList</h1>
      <GroceryList groceries={groceries} />
      <GroceryForm onAddGrocery={handleAddGrocery} />
    </>
  )
}

export default App