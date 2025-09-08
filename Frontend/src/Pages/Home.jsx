import React from 'react'
import NavBar from '../Component/NavBar'
import ProductTile from '../Component/ProductTile'

const Home = () => {
  const user = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 11, 22, 33, 44, 55, 66, 77];
  return (
    <div>
        <NavBar></NavBar>
        
        <div className="pt-44 flex gap-8  w-screen flex-wrap items-center justify-center p-10">
        {user.map((m, i) => {
          return <ProductTile />;
        })}
      </div>
      
    </div>
  )
}

export default Home