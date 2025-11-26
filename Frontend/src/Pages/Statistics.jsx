import React from 'react'
import MonthlyTrends from '../Component/MonthlyTrends'
import CityPieChart from '../Component/CityPieChart'
import UserGrowthChart from '../Component/UserGrowthChart'
import TopUsersChart from '../Component/TopUsersChart'
const Statistics = () => {
  return (
    <div className='lg:grid-cols-2 lg:grid-rows-2 grid-cols-1 grid-rows-4 grid gap-3'>
      <MonthlyTrends></MonthlyTrends>
      <UserGrowthChart></UserGrowthChart>
      <CityPieChart></CityPieChart>
      <TopUsersChart></TopUsersChart>
      
    </div>
  )
}

export default Statistics