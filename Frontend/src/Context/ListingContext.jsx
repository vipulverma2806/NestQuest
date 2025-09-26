import React, { createContext, useState } from "react";
export const listingDataContext = createContext();
const ListingContext = ({ children }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [img1, setImg1] = useState("");
  const [img2, setImg2] = useState("");
  const [img3, setImg3] = useState("");
  const [rent, setRent] = useState("");
  const [city, setCity] = useState("");
  const [landmark, setLandmark] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [category, setCategory] = useState("");

  let value = {
    title,
    setTitle,
    description,
    setDescription,
    img1,
    setImg1,
    img2,
    setImg2,
    img3,
    setImg3,
    rent,
    setRent,
    city,
    setCity,
    landmark,
    setLandmark,
    latitude,
    setLatitude,
    longitude,
    setLongitude,
    category,
    setCategory,
  };

  console.log(latitude);
  return (
    <listingDataContext.Provider value={value}>
      {children}
    </listingDataContext.Provider>
  );
};

export default ListingContext;
