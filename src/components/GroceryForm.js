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

    fetch("http://localhost:4000/groceries", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newGrocery)
    })
      .then(resp => resp.json())
      .then(data => {
        onAddGrocery(data)
        setNewGroceryName("")
      })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
          type="text"
          value={newGroceryName}
          onChange={handleChangeGroceryName}
      />
      <input type="submit" />
    </form>
  )
}

export default GroceryForm