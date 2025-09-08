import React from "react";
import Home from "./Pages/Home";
import {Routes,Route} from "react-router-dom"
const App = () => {
  return <div>

  <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/addlisting" element={}> </Route>
  </Routes>



  <Home></Home>
  </div>;
};

export default App;
