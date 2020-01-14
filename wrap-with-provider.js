import React from "react"
import AppContext from "./src/Context"
export default ({ element }) => {
  return (
    <div>
      <AppContext>
        {element}
      </AppContext>
    </div>
  )
}