import React, { useContext } from 'react'
import { themeDataContext } from './Context/ThemeContext'

const ThemeComponent = () => {
    const {toggleTheme} = useContext(themeDataContext)
     const {count} = useContext(themeDataContext)
  return (
    <div>ThemeComponent
        <button onClick={()=>toggleTheme()}>here</button>
        <div>Count: {count}</div>
    </div>
  )
}

export default ThemeComponent