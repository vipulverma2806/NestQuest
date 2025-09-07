import React from 'react'
import { themeDataContext } from './Context/ThemeContext'
import { useContext } from 'react'
const InCount = () => {
    const {increase} = useContext(themeDataContext)
    
  return (
    <div>DeCount
        <button onClick={()=>increase()}>increase</button>
    </div>
  )
}

export default InCount