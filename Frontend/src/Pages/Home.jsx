import React from "react";
import NavBar from "../Component/NavBar";
import ProductTile from "../Component/ProductTile";
import { useEffect } from "react";
import { listingDataContext } from "../Context/ListingContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
const Home = () => {
  let { getAll, allProperties } = useContext(listingDataContext);
  const navigate = useNavigate();
  useEffect(() => {
    getAll();
  }, []);
  return (
    <div>
      <NavBar></NavBar>
      <div className="md:pt-48 sm:pt-60 pt-80 flex gap-8  w-screen flex-wrap items-center justify-center p-10">
        {allProperties.map((property, i) => {
          return <ProductTile property={property} key={i} />;
        })}
      </div>
    </div>
  );
};

export default Home;
