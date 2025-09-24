import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import axios from "axios";
const fileCSS =
  "file:bg-gray-300 border-gray-400 border-2 rounded-xl p-1 hover:file:bg-gray-400 file:rounded-md file:px-2 px-1 w-[250px] py-1 file:py-1 file:mr-3";
const AddListing = () => {
  // ----------------------testing multer + cloudinary--------
  const [image, setImage] = useState([]);
  const handleTest = async (e) => {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("img1", image[0]);
    formdata.append("img2", image[1]);
    formdata.append("img3", image[2]);
    const result = await axios.post(
      "http://localhost:5000/postimage",
      formdata
    );
    console.log(result.data);
    console.log(formdata.get("img1"));
  };
  const [form, setForm] = useState({
    title: "",
    description: "",
    img1: "",
    img2: "",
    img3: "",
    rent: "",
    city: "",
    landmark: "",
    latitude: "",
    longitude: "",
  });
  return (
    <div>
      <nav className="flex fixed bg-white w-full justify-between px-10 h-24 py-5">
        <button className="rounded-full hidden sm:block bg-red-500 p-4">
          <FaArrowLeft className="text-2xl text-white" />
        </button>
        <h1 className=" text-red-500 absolute left-1/2 -translate-x-1/2 h-[55px] font-extrabold text-4xl">
          NestQuest
        </h1>
        <div className="rounded-full hidden sm:block text-md font-semibold text-white bg-red-500 p-4">
          Set up your Home
        </div>
      </nav>

      {/* -------------------------Form------------------------- */}
      <div className="pt-30  pb-10 flex justify-center   w-full items-center">
        <form
          className=" rounded-2xl bg-blue-100 flex flex-col w-[900px] gap-y-5  p-10 mx-10 shadow-gray-600 shadow-xl "
          action=""
        >
          <div className="flex flex-col gap-y-2 ">
            <label className="text-xl font-semibold" htmlFor="">
              Title:
            </label>
            <input
              className="border-2 border-gray-400 rounded-xl px-3 py-1"
              placeholder="eg. 2 bhk House"
              type="text"
            />
          </div>
          <div className="flex flex-col gap-y-2 ">
            <label className="text-xl font-semibold" htmlFor="">
              Description:
            </label>
            <textarea
              className="border-2 border-gray-400 rounded-xl px-3 py-1"
              placeholder="eg. Fully furnished home"
              type="textbox"
            />
          </div>
          <div className="flex flex-col gap-y-2 ">
            <label className="text-xl font-semibold" htmlFor="">
              Image 1:
            </label>
            {/* --------------------------test-------------------- */}
            <input
              className={fileCSS}
              onChange={(e) => setImage((prev) => [...prev, e.target.files[0]])}
              type="file"
            />
            <button onClick={handleTest}>send test file</button>
          </div>
          <div className="flex flex-col gap-y-2 ">
            <label className="text-xl font-semibold" htmlFor="">
              Image 2:
            </label>
            <input
              className={fileCSS}
              type="file"
              onChange={(e) => setImage((prev) => [...prev, e.target.files[0]])}
            />
          </div>
          <div className="flex flex-col gap-y-2 ">
            <label className="text-xl font-semibold" htmlFor="">
              Image 3:
            </label>
            <input
              className={fileCSS}
              type="file"
              onChange={(e) => setImage((prev) => [...prev, e.target.files[0]])}
            />
          </div>

          <div className="flex flex-col gap-y-2 ">
            <label className="text-xl font-semibold" htmlFor="">
              Rent:
            </label>
            <input
              className="border-2 rounded-xl border-gray-400 px-3 py-1"
              placeholder="eg. Rupees/day"
              type="number"
            />
          </div>
          <div className="flex flex-col gap-y-2 ">
            <label className="text-xl font-semibold" htmlFor="">
              City:
            </label>
            <input
              className="border-2 rounded-xl border-gray-400 px-3 py-1"
              placeholder="eg. Durg (CG)"
              type="text"
            />
          </div>
          <div className="flex flex-col gap-y-2 ">
            <label className="text-xl font-semibold" htmlFor="">
              Landmark:
            </label>
            <input
              className="border-2 rounded-xl border-gray-400 px-3 py-1"
              placeholder="eg. Near BIT College"
              type="text"
            />
          </div>
          <div className="flex flex-col gap-y-2 ">
            <label className="text-xl  font-semibold" htmlFor="">
              Coordinates:
            </label>
            <input
              className="border-2 rounded-xl mb-2 border-gray-400 px-3 py-1"
              placeholder="Latitude"
              type="number"
            />
            <input
              className="border-2 rounded-xl border-gray-400 px-3 py-1"
              placeholder="Longitude"
              type="number"
            />
          </div>
          <button className="rounded-full text-md font-semibold text-white bg-red-500 p-4">
            Next Page
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddListing;
