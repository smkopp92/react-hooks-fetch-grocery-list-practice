import React, { useState } from "react"
import GroceryList from "./GroceryList"
import GroceryForm from "./GroceryForm"
import { fakeGroceries } from "../data/fakeGroceries"

const App = () => {
  const [ groceries, setGroceries ] = useState(fakeGroceries)

  const handleAddGrocery = (newGrocery) => {
    setGroceries([...groceries, newGrocery])
  }

  const handleDeleteGrocery = (deletedGrocery) => {
    setGroceries(groceries.filter(grocery => grocery !== deletedGrocery))
  }

  const handleUpdateGrocery = (updatedGrocery) => {
    setGroceries(groceries.map(grocery => {
      if (grocery === updatedGrocery) {
        return {...updatedGrocery, isBought: !updatedGrocery.isBought}
      } else {
        return grocery
      }
    })
  )}

  return (
    <>
      <h1>GroceryList</h1>
      <GroceryList
          groceries={groceries}
          onGroceryDelete={handleDeleteGrocery}
          onUpdateGrocery={handleUpdateGrocery}
      />
      <GroceryForm onAddGrocery={handleAddGrocery} />
    </>
  )
}

export default App