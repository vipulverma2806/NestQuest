import React from "react";
import NavBar from "../Component/NavBar";
import ProductTile from "../Component/ProductTile";
import { useEffect } from "react";
import { listingDataContext } from "../Context/ListingContext";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { authDataContext } from "../Context/authContext";
import { getAll } from "../Redux/ListingSlice";
import { useSelector, useDispatch } from "react-redux";

const Home = () => {
  // let { getAll, allProperties } = useContext(listingDataContext);
  const dispatch = useDispatch();
  const allProperties = useSelector((state) => state.listing.allProperties);
  const loading = useSelector((state) => state.auth.loading);
  const selectCat = useSelector((state) => state.listing.selectCat);
  const [sorted, setSorted] = useState([]);

  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getAll());

    // console.log("getAll");
  }, [loading]);

  useEffect(() => {
    if (selectCat == "All") {
      setSorted(allProperties);
    } else {
      const sorted = allProperties.filter(
        (property) => property.category == selectCat
      );
      setSorted(sorted);
    }
  }, [selectCat, allProperties]);
  // console.log(allProperties[0]);
  return (
    <div>
      <NavBar></NavBar>
      <div className="md:pt-48 sm:pt-60 pt-80 flex gap-8  w-screen flex-wrap items-center justify-center p-10">
        {sorted.length === 0 ? (
          <div className="h-20 w-full text-xl pt-10 font-bold text-center ">
            Not Available
          </div>
        ) : (
          sorted.map((property, i) => {
            return (
              <ProductTile property={property} previous={"home"} key={i} />
            );
          })
        )}
      </div>
    </div>
  );
};

export default Home;
