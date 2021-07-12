import React from "react"
import Grocery from "./Grocery"

const GroceryList = ({groceries, onGroceryDelete, onUpdateGrocery}) => {
  const groceriesToDisplay = groceries.map(grocery => {
    const handleGroceryDelete = () => {
      onGroceryDelete(grocery)
    }

    const handleUpdateGrocery = () => {
      onUpdateGrocery(grocery)
    }

    return (
      <Grocery
          key={grocery.id}
          grocery={grocery}
          onGroceryDelete={handleGroceryDelete}
          onUpdateGrocery={handleUpdateGrocery}
      />
    )
  })

  return (
    <ul>
      {groceriesToDisplay}
    </ul>
  )
}

export default GroceryList