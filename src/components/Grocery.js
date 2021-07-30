import React from "react"

const Grocery = ({grocery, onDeleteGrocery, onUpdateGrocery}) => {
  return (
    <li>
      <p className={grocery.isBought ? "struck" : ""} onClick={onUpdateGrocery}>{grocery.name}</p>
      <button onClick={onDeleteGrocery}>Delete Grocery</button>
    </li>
  )
}

export default Grocery