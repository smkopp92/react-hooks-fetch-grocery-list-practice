import React from "react"
import Grocery from "./Grocery"

const GroceryList = ({groceries, onGroceryDelete, onUpdateGrocery}) => {
  return (
    <ul>
      {groceries.map(grocery => {
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
      }
      )}
    </ul>
  )
}

export default GroceryList