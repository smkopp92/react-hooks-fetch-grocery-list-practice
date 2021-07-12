import React from "react"
import Grocery from "./Grocery"

const GroceryList = ({groceries}) => {
  return (
    <ul>
      {groceries.map(grocery => (
        <Grocery
            key={grocery.id}
            grocery={grocery}
        />
      ))}
    </ul>
  )
}

export default GroceryList