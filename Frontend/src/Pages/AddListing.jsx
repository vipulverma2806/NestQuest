import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import axios from "axios";
import { listingDataContext } from "../Context/ListingContext";
import { useSelector, useDispatch } from "react-redux";
import { productViewPage } from "../Redux/ListingSlice";

const fileCSS =
  "file:bg-gray-300 border-gray-400 border-2 rounded-xl p-1 hover:file:bg-gray-400 file:rounded-md file:px-2 px-1 w-[250px] py-1 file:py-1 file:mr-3";
const AddListing = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [listing, setListing] = useState({});
  const [sendBackImg, setSendBackImg] = useState();
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
  } = useContext(listingDataContext);

  const handleImg = (e, setFront) => {
    const file = e.target.files[0];
    const fImgURL = URL.createObjectURL(e.target.files[0]);
    setListing((prev) => ({ ...prev, [setFront]: fImgURL }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(productViewPage(listing));

    // console.log(listing);
    navigate("/addlisting2");
  };

  return (
    <div>
      <nav className="flex fixed bg-white w-full justify-between px-10 h-24 py-5">
        <button
          className="rounded-full hidden sm:block bg-red-500 active:bg-red-700 p-4"
          onClick={() => navigate("/")}
        >
          <FaArrowLeft className="text-2xl text-white" />
        </button>
        <h1
          onClick={() => navigate("/")}
          className=" text-red-500 hover:cursor-pointer absolute left-1/2 -translate-x-1/2 h-[55px] font-extrabold text-4xl"
        >
          NestQuest
        </h1>
        <div className="rounded-full hidden sm:block text-md font-semibold text-white bg-red-500 active:bg-red-700 p-4">
          Set up your Home
        </div>
      </nav>

      {/* -------------------------Form------------------------- */}
      <div className="pt-30  pb-10 flex justify-center   w-full items-center">
        <form
          onSubmit={handleSubmit}
          className=" rounded-2xl bg-blue-100 flex flex-col w-[900px] gap-y-5  p-10 mx-10 shadow-gray-600 shadow-xl "
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
              value={listing.title || ""}
              onChange={(e) =>
                setListing((prev) => ({ ...prev, title: e.target.value }))
              }
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
              value={listing.description || ""}
              onChange={(e) =>
                setListing((prev) => ({ ...prev, description: e.target.value }))
              }
            />
          </div>
          <div className="flex flex-col gap-y-2 ">
            <label className="text-xl font-semibold" htmlFor="">
              Image 1:
            </label>

            <input
              required
              className={fileCSS}
              onChange={(e) => {
                handleImg(e, "img1");
                setBImg1(e.target.files[0]);
              }}
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
              onChange={(e) => {
                handleImg(e, "img2");
                setBImg2(e.target.files[0]);
              }}
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
              onChange={(e) => {
                handleImg(e, "img3");
                setBImg3(e.target.files[0]);
              }}
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
              value={listing.rent || ""}
              onChange={(e) =>
                setListing((prev) => ({ ...prev, rent: e.target.value }))
              }
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
              value={listing.city || ""}
              onChange={(e) =>
                setListing((prev) => ({ ...prev, city: e.target.value }))
              }
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
              value={listing.landmark || ""}
              onChange={(e) =>
                setListing((prev) => ({ ...prev, landmark: e.target.value }))
              }
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
              value={listing.latitude || ""}
              onChange={(e) =>
                setListing((prev) => ({ ...prev, latitude: e.target.value }))
              }
            />
            <input
              required
              className="border-2 rounded-xl border-gray-400 px-3 py-1"
              placeholder="Longitude"
              type="number"
              value={listing.longitude || ""}
              onChange={(e) =>
                setListing((prev) => ({ ...prev, longitude: e.target.value }))
              }
            />
          </div>
          <button
            type="submit"
            // onClick={() => navigate("/addlisting2")}
            onClick={(e) => handleSubmit(e)}
            className="rounded-full text-md font-semibold text-white bg-red-500 active:bg-red-700 p-4"
          >
            Next Page
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddListing;
