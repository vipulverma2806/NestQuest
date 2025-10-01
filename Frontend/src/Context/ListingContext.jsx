import React, { createContext, useState } from "react";
import axios from "axios";
const URL = import.meta.env.VITE_URL;
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
  const [rent, setRent] = useState("");
  const [city, setCity] = useState("");
  const [landmark, setLandmark] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(false);

  let formdata = new FormData();
  formdata.append("title", title);
  formdata.append("description", description);
  formdata.append("bimg1", bimg1);
  formdata.append("bimg2", bimg2);
  formdata.append("bimg3", bimg3);
  formdata.append("rent", rent);
  formdata.append("city", city);
  formdata.append("landmark", landmark);
  formdata.append("latitude", latitude);
  formdata.append("longitude", longitude);
  formdata.append("category", category);

  const handleSubmit = async () => {
    try {
      console.log("working");
      setLoading(true);
      const result = await axios.post(`${URL}/listingMain/post`, formdata);
      setLoading(false);
      console.log(result);
    } catch (err) {
      console.log(err);
    }
  };

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
    handleSubmit,
    loading,
    setLoading,
  };

  return (
    <listingDataContext.Provider value={value}>
      {children}
    </listingDataContext.Provider>
  );
};

export default ListingContext;
