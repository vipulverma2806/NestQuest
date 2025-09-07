import React from 'react'
import { themeDataContext } from './Context/ThemeContext'
import { useContext } from 'react'
const DeCount = () => {
    const {decrease} = useContext(themeDataContext)
    
  return (
    <div>DeCount
        <button onClick={()=>decrease()}>decrease</button>
    </div>
  )
}

export default DeCount