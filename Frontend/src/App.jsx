import React from "react";
import Home from "./Pages/Home";
import { Routes, Route } from "react-router-dom";
import AddListing from "./Pages/AddListing";
import AddListing2 from "./Pages/AddListing2";
import AddListing3 from "./Pages/AddListing3";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/addlisting" element={<AddListing />}>
          {" "}
        </Route>
        <Route path="/addlisting2" element={<AddListing2 />}>
          {" "}
        </Route>
        <Route path="/addlisting3" element={<AddListing3 />}>
          {" "}
        </Route>
      </Routes>
    </div>
  );
};

export default App;
