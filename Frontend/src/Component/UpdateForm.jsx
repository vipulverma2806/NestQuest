import React from "react";
import { IoClose } from "react-icons/io5";
import { useContext } from "react";
import { listingDataContext } from "../Context/ListingContext";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
const fileCSS =
  "file:bg-gray-300 border-gray-400 border-2 rounded-xl p-1 hover:file:bg-gray-400 file:rounded-md file:px-2 px-1 w-[250px] py-1 file:py-1 file:mr-3";
const catDiv =
  "border-3 rounded-xl border-gray-400 px-3 py-1 hover:border-blue-600  cursor-pointer  ";

const catSelect =
  "border-3 rounded-xl border-red-600 px-3 py-1 hover:border-blue-600  cursor-pointer  ";
const UpdateForm = ({ setUpdatePopup }) => {
  const [clicked, setClicked] = useState("");
  const listing = useSelector((state) => state.listing);
  const allCategory = [
    "PG",
    "Pool House",
    "Farm House",
    "Flat",
    "Rooms",
    "Villa",
    "Shops",
    "Cabin",
  ];
  let {
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

    handleUpdate,
  } = useContext(listingDataContext);

  console.log(listing.category);

  const selectCat = (category) => {
    listing.category = category;
    // console.log(listing.category);
    setClicked(category);
  };

  // console.log(listing.category);
  return (
    <div className="fixed  z-50  h-full w-full backdrop-blur-sm bg-black/60  flex justify-around top-0 ">
      <nav className="flex fixed  w-full z-20 justify-between px-10 h-24 py-5">
        <button
          onClick={() => setUpdatePopup(false)}
          className="rounded-full hover:cursor-pointer hidden sm:block bg-red-500 active:bg-red-700 p-4"
        >
          <IoClose className="text-2xl text-white" />
        </button>
        <h1 className=" text-red-500 hover:cursor-pointer absolute left-1/2 -translate-x-1/2 h-[55px] font-extrabold text-4xl">
          NestQuest
        </h1>
        <div className="rounded-full text-md font-semibold text-white hidden sm:block bg-red-500 active:bg-red-700 p-4">
          Edit your listing here
        </div>
      </nav>
      {/* 
      <div className="h-1/2 w-2/3 bg-amber-500 relative top-30 ">
        this is not working
      </div> */}
      <div className=" h-full mt-15 flex justify-center  w-full items-center">
        <form
          onSubmit={handleUpdate}
          className=" overflow-scroll rounded-2xl bg-blue-100 flex flex-col w-[900px] gap-y-5 h-3/4 p-10 mx-10 shadow-gray-600 shadow-xl "
          action=""
        >
          <div className="flex flex-col gap-y-2 ">
            <label className="text-xl font-semibold" htmlFor="">
              Title:
            </label>
            <input
              required
              className="border-2 border-gray-400 rounded-xl px-3 py-1"
              placeholder="eg. 2 bhk House"
              type="text"
              value={listing.title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-y-2 ">
            <label className="text-xl font-semibold" htmlFor="">
              Description:
            </label>
            <textarea
              required
              className="border-2 border-gray-400 rounded-xl px-3 py-1"
              placeholder="eg. Fully furnished home"
              type="textbox"
              value={listing.description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-y-2 ">
            <label className="text-xl font-semibold" htmlFor="">
              Image 1:
            </label>
            {/* -------------------------test------------------------- */}

            <img src={fimg1} className={fimg1 && "h-50 w-min"} alt="" />

            {/* --------------------------test-------------------- */}
            <input
              required
              className={fileCSS}
              onChange={(e) => handleImg(e, setBImg1, setFImg1)}
              // value={img1}
              type="file"
            />
          </div>
          <div className="flex flex-col gap-y-2 ">
            <label className="text-xl font-semibold" htmlFor="">
              Image 2:
            </label>
            <img src={fimg2} className={fimg2 && "h-50 w-min"} alt="" />
            <input
              required
              className={fileCSS}
              type="file"
              onChange={(e) => handleImg(e, setBImg2, setFImg2)}
              // value={img2}
            />
          </div>
          <div className="flex flex-col gap-y-2 ">
            <label className="text-xl font-semibold" htmlFor="">
              Image 3:
            </label>
            <img src={fimg3} className={fimg3 && "h-50 w-min"} alt="" />
            <input
              required
              className={fileCSS}
              type="file"
              onChange={(e) => handleImg(e, setBImg3, setFImg3)}
              // value={img3}
            />
          </div>

          <div className="flex flex-col gap-y-2 ">
            <label className="text-xl font-semibold" htmlFor="">
              Rent:
            </label>
            <input
              required
              className="border-2 rounded-xl border-gray-400 px-3 py-1"
              placeholder="eg. Rupees/day"
              type="number"
              value={listing.rent}
              onChange={(e) => setRent(e.target.value)}
            />
          </div>

          <div className="flex flex-col gap-y-2 ">
            <label className="text-xl font-semibold" htmlFor="">
              Category:
            </label>
            <div className="flex box-border gap-2 flex-wrap">
              {allCategory.map((category, i) => {
                // console.log(allCategory);
                // console.log(category);
                return (
                  <div
                    onClick={() => selectCat(category)}
                    className={
                      listing.category == category || clicked == category
                        ? catSelect
                        : catDiv
                    }
                  >
                    {category}
                  </div>
                );
              })}
            </div>
            <label className="text-xl font-semibold" htmlFor="">
              Rent:
            </label>
            <input
              required
              className="border-2 rounded-xl border-gray-400 px-3 py-1"
              placeholder="eg. Rupees/day"
              type="number"
              value={listing.rent}
              onChange={(e) => setRent(e.target.value)}
            />
          </div>

          <div className="flex flex-col gap-y-2 ">
            <label className="text-xl font-semibold" htmlFor="">
              City:
            </label>
            <input
              required
              className="border-2 rounded-xl border-gray-400 px-3 py-1"
              placeholder="eg. Durg (CG)"
              type="text"
              value={listing.city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-y-2 ">
            <label className="text-xl font-semibold" htmlFor="">
              Landmark:
            </label>
            <input
              required
              className="border-2 rounded-xl border-gray-400 px-3 py-1"
              placeholder="eg. Near BIT College"
              type="text"
              value={listing.landmark}
              onChange={(e) => setLandmark(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-y-2 ">
            <label className="text-xl  font-semibold" htmlFor="">
              Coordinates:
            </label>
            <input
              required
              className="border-2 rounded-xl mb-2 border-gray-400 px-3 py-1"
              placeholder="Latitude"
              type="number"
              value={listing.latitude}
              onChange={(e) => setLatitude(e.target.value)}
            />
            <input
              required
              className="border-2 rounded-xl border-gray-400 px-3 py-1"
              placeholder="Longitude"
              type="number"
              value={listing.longitude}
              onChange={(e) => setLongitude(e.target.value)}
            />
          </div>
          <button
            type="submit"
            // onClick={() => navigate("/addlisting2")}
            className="rounded-full text-md font-semibold text-white bg-red-500 active:bg-red-700 p-4"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateForm;
