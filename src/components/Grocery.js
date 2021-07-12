import React from "react"

const Grocery = ({grocery}) => {
  return (
    <li style={{"text-decoration": grocery.isBought ? "line-through" : ""}}>
      {grocery.name}
    </li>
  )
}

export default Grocery