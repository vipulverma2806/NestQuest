import React from "react";
import NavBar from "../Component/NavBar";
import ProductTile from "../Component/ProductTile";

const Home = () => {
  const user = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 11];
  return (
    <div>
      <NavBar></NavBar>
      <div className="md:pt-44 sm:pt-60 pt-80 flex gap-8  w-screen flex-wrap items-center justify-center p-10">
        {user.map((m, i) => {
          return <ProductTile />;
        })}
      </div>
    </div>
  );
};

export default Home;
