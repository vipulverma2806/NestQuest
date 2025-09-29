import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import axios from "axios";
import { listingDataContext } from "../Context/ListingContext";
const fileCSS =
  "file:bg-gray-300 border-gray-400 border-2 rounded-xl p-1 hover:file:bg-gray-400 file:rounded-md file:px-2 px-1 w-[250px] py-1 file:py-1 file:mr-3";
const AddListing = () => {
  const navigate = useNavigate();
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

  const handleTest = async (e) => {};
  //   e.preventDefault();
  //   const formdata = new FormData();
  //   formdata.append("img1", image[0]);
  //   formdata.append("img2", image[1]);
  //   formdata.append("img3", image[2]);
  //   const result = await axios.post(
  //     "http://localhost:5000/postimage",
  //     formdata
  //   );
  //   console.log(result.data);
  //   console.log(formdata.get("img1"));
  // };
  // const [form, setForm] = useState({
  //   title: "",
  //   description: "",
  //   img1: "",
  //   img2: "",
  //   img3: "",
  //   rent: "",
  //   city: "",
  //   landmark: "",
  //   latitude: "",
  //   longitude: "",
  // });
  const handleImg = (e, setBack, setFront) => {
    const file = e.target.files[0];
    setFront(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/addlisting2");
  };

  return (
    <div>
      <nav className="flex fixed bg-white w-full justify-between px-10 h-24 py-5">
        <button className="rounded-full hidden sm:block bg-red-500 active:bg-red-700 p-4">
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
              value={title}
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
              value={description}
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
              value={rent}
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
              value={city}
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
              value={landmark}
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
              value={latitude}
              onChange={(e) => setLatitude(e.target.value)}
            />
            <input
              required
              className="border-2 rounded-xl border-gray-400 px-3 py-1"
              placeholder="Longitude"
              type="number"
              value={longitude}
              onChange={(e) => setLongitude(e.target.value)}
            />
          </div>
          <button
            type="submit"
            // onClick={() => navigate("/addlisting2")}
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
