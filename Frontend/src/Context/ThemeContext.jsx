import React, { createContext, useState } from 'react'
export const themeDataContext = createContext();
const ThemeContext = ({children}) => {
    const [theme,setTheme] = useState(true)
    const [count,setCount] = useState(0)
    const toggleTheme =()=>{
        setTheme((prev)=>(!prev))
        console.log(theme)
    }

    const increase =()=>{
        setCount((prev)=>(prev+1))
    }
    const decrease =()=>{
        setCount((prev)=>(prev-1))
    }
    let value = {
        setTheme,
        theme,
        toggleTheme,
        increase,
        decrease,
        count,
    }
  return (
    <themeDataContext.Provider value={value}>
        {children}
        </themeDataContext.Provider>
  )
}

export default ThemeContext