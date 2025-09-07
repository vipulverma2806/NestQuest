import React, { useContext } from 'react'
import {themeDataContext} from './Context/ThemeContext'
const SecondComp = () => {
    const {theme} = useContext(themeDataContext);
  return (
    <div>secondComp
        {theme?"true":"false"}
    </div>
  )
}

export default SecondComp