import { Outlet } from "react-router-dom";
import React from "react";
import Protected from "./Protected";
const ProtectedLayout = () => {
  return <Protected>
    <Outlet/>
  </Protected>;
};

export default ProtectedLayout;
