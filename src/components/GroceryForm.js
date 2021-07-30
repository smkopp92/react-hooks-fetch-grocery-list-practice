import React, { useState } from "react"

const GroceryForm = ({onAddGrocery}) => {
  const [ newGroceryName, setNewGroceryName ] = useState("")

  const handleChangeGroceryName = (event) => {
    setNewGroceryName(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const newGrocery = {
      name: newGroceryName,
      isBought: false
    }

    onAddGrocery(newGrocery)
    setNewGroceryName("")
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
          type="text"
          value={newGroceryName}
          onChange={handleChangeGroceryName}
      />
      <input
          type="submit"
          value="Add Grocery"
      />
    </form>
  )
}

export default GroceryForm