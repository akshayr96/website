import React, { useState, createContext } from "react"

export const AppContext = createContext()

export default ({ children }) => {
	const [theme, setTheme] = useState('dark')
	const appContext = { theme, setTheme }
	return (
    <div>
      <AppContext.Provider value={appContext}>
        {children}
      </AppContext.Provider>
    </div>
  )
}
