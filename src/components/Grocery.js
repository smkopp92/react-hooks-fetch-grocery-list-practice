import React from "react"

const Grocery = ({grocery, onGroceryDelete, onUpdateGrocery}) => {
  return (
    <li>
      <p style={{textDecoration: grocery.isBought ? "line-through" : ""}} onClick={onUpdateGrocery}>{grocery.name}</p>
      <button onClick={onGroceryDelete}>Delete Grocery</button>
    </li>
  )
}

export default Grocery