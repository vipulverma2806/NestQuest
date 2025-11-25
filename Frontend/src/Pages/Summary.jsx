import React from 'react'
import { useSelector } from 'react-redux';
const Summary = () => {
  
  return (
    <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
      <div className="bg-gray-100 shadow-lg rounded-lg p-6">
        <h3 className="text-lg font-bold">Total Listings</h3>
        <p className="text-3xl font-semibold mt-3">128</p>
      </div>

      <div className="bg-gray-100 shadow-lg rounded-lg p-6">
        <h3 className="text-lg font-bold">Total Users</h3>
        <p className="text-3xl font-semibold mt-3">450</p>
      </div>

      <div className="bg-gray-100 shadow-lg rounded-lg p-6">
        <h3 className="text-lg font-bold">Total Bookings</h3>
        <p className="text-3xl font-semibold mt-3">92</p>
      </div>
    </div>
  );
};

export default Summary;


