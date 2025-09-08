import React from "react";
import Home from "./Pages/Home";
import {Routes,Route} from "react-router-dom"
import AddListing from "./Pages/AddListing";
const App = () => {
  return <div>

  <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/addlisting" element={<AddListing/>}> </Route>
  </Routes>



  </div>;
};

export default App;
