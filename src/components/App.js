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

  const handleDeleteGrocery = (deletedGrocery) => {
    fetch(`http://localhost:4000/groceries/${deletedGrocery.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(resp => resp.json())
      .then(() => setGroceries(groceries.filter(grocery => grocery !== deletedGrocery)))
  }

  const handleUpdateGrocery = (updatedGrocery) => {
    fetch(`http://localhost:4000/groceries/${updatedGrocery.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({isBought: !updatedGrocery.isBought})
    })
      .then(resp => resp.json())
      .then((data) => setGroceries(groceries.map(grocery => {
        if (grocery === updatedGrocery) {
          return data
        } else {
          return grocery
        }
      })))
  }

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