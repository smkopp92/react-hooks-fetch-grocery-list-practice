import React from "react"
import Grocery from "./Grocery"

const GroceryList = ({groceries, onDeleteGrocery, onUpdateGrocery}) => {
  const groceriesToDisplay = groceries.map(grocery => {
    const handleGroceryDelete = () => {
      onDeleteGrocery(grocery)
    }

    const handleUpdateGrocery = () => {
      onUpdateGrocery(grocery)
    }

    return (
      <Grocery
          key={grocery.id}
          grocery={grocery}
          onDeleteGrocery={handleGroceryDelete}
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