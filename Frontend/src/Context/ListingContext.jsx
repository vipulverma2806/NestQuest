import React, { createContext, useState } from "react";
export const listingDataContext = createContext();
const ListingContext = ({ children }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [fimg1, setFImg1] = useState(null);
  const [fimg2, setFImg2] = useState(null);
  const [fimg3, setFImg3] = useState(null);
  const [bimg1, setBImg1] = useState(null);
  const [bimg2, setBImg2] = useState(null);
  const [bimg3, setBImg3] = useState(null);
  const [rent, setRent] = useState("4546");
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
    bimg1,
    setBImg1,
    bimg2,
    setBImg2,
    bimg3,
    setBImg3,
    fimg1,
    setFImg1,
    fimg2,
    setFImg2,
    fimg3,
    setFImg3,

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

  console.log(fimg1);
  console.log(rent);
  // console.log(fimg3);

  return (
    <listingDataContext.Provider value={value}>
      {children}
    </listingDataContext.Provider>
  );
};

export default ListingContext;
