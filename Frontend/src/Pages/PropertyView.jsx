import React, { useEffect } from "react";
import v1 from "../assets/v1.jpg";
import v2 from "../assets/v2.jpg";
import v3 from "../assets/v3.jpg";
const URL = import.meta.env.VITE_URL;
import Map from "../Component/Map";
import UpdateForm from "../Component/UpdateForm";
import BookingForm from "../Component/BookingForm";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import DeleteConfirm from "../Component/DeleteConfirm";
import CancelConfirm from "../Component/CancelConfirm";
const PropertyView = () => {
  const [updatePopup, setUpdatePopup] = useState(false);
  const [bookingPopup, setBookingPopup] = useState(false);
  const [deletePopup, setDeletePopup] = useState(false);
  const [cancelPopup, setCancelPopup] = useState(false);
  const [reviewArr, setReviewArr] = useState([]);
  let userId = useSelector((state) => state.auth.userId);
  let listing = useSelector((state) => state.listing);
  const property = useParams();
  const navigate = useNavigate();
  // console.log(listing);
  let {
    title,
    description,
    fimg1,
    fimg2,
    fimg3,
    rent,
    city,
    landmark,
    latitude,
    longitude,
    category,

    loading,

    propertyID,
    previous,
    hostId,
    guestId,
  } = useSelector((state) => state.listing);
  // console.log(listing);
  const [reviewText, setReviewText] = useState("");
  // console.log("userid", userId, "hostid", hostId);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post(`${URL}/listingMain/review`, {
        reviewText,
        propertyID,
      });

      setReviewText("");
      console.log(result);
      getReviews();
    } catch (err) {
      console.log(err);
    }
  };

  const getReviews = async () => {
    try {
      const response = await axios.get(
        `${URL}/listingMain/getReviews/${propertyID}`
      );
      console.log("all reviews", response.data);
      setReviewArr(response.data.reverse());
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getReviews();
  }, []);

  return (
    <div className="p-4 flex just h-full      bg-gray-300">
      <nav className="flex fixed top-3 z-50 shadow-md shadow-black h-40 md:h-24 rounded-3xl bg-white w-[97%] items-center justify-between px-10 py-5 ">
        <button
          onClick={
            previous == "mylistings" || previous == "mybookings"
              ? previous == "mylistings"
                ? () => navigate("/mylistings")
                : () => navigate("/mybookings")
              : () => navigate("/")
          }
          className="rounded-full hover:cursor-pointer hidden sm:block bg-red-500 active:bg-red-700 p-4"
        >
          <FaArrowLeft className="text-2xl text-white" />
        </button>
        <h1
          onClick={() => navigate("/")}
          className=" text-red-500 hover:cursor-pointer absolute left-1/2 -translate-x-1/2 h-[55px] font-extrabold text-4xl"
        >
          NestQuest
        </h1>
        <div className="rounded-full text-md font-semibold text-white hidden sm:block bg-red-500 active:bg-red-700 p-4">
          {listing.hostId == userId ? "Update here" : "Booking page"}
        </div>
      </nav>
      <div className="pt-20 mt-10 pb-10 flex justify-center   w-full items-center">
        <div className="flex flex-col w-[90%] max-w-5xl gap-y-5 shadow-md shadow-black rounded-3xl bg-white  p-6 md:p-8 ">
          <h1 className="text-4xl pl-3">{`${listing.landmark} , ${listing.city}`}</h1>
          <div className="lg:h-84  md:flex-row gap-4 flex-col w-full flex lg:flex-row justify-center  ">
            {console.log("listing fimg1 ",listing.fimg1)}
            <img
              src={listing.fimg1}
              alt=""
              className="object-cover border shadow-xs shadow-black w-full md:w-[60%] h-84 rounded-lg"
            />

            <div className="flex flex-col w-full md:w-[40%] gap-4">
              <img
                src={listing.fimg2}
                alt=""
                className="object-cover w-full h-40 rounded-lg shadow-xs shadow-black"
              />
              <img
                src={listing.fimg3}
                alt=""
                className="object-cover w-full h-40 rounded-lg shadow-xs shadow-black"
              />
            </div>
          </div>
          <p className="text-3xl pl-3">{listing.title} </p>
          <p className="text-2xl pl-3">{listing.description}</p>
          <p className="text-2xl pl-3">{listing.category}</p>
          {/* {console.log("listing", listing.category)} */}
          <p className="text-xl pl-3">Rent : {listing.rent} rs./night</p>
          <p className="text-md pl-3"> Map View (Check Accuracy) </p>

          <Map
            latitude={listing.latitude}
            longitude={listing.longitude}
            title={listing.title}
          ></Map>
          <div className="flex sm:justify-between sm:flex-row gap-y-3 sm:gap-x-3 flex-col ">
            <button
              onClick={
                listing.hostId == userId
                  ? () => setUpdatePopup(true)
                  : listing.guestId == userId
                  ? () => setCancelPopup(true)
                  : () => setBookingPopup(true)
              }
              className={`rounded-full sm:max-w-50   hover:cursor-pointer text-xl font-semibold text-white active:bg-red-800 hover:bg-red-700 w-full  md:w-1/4  p-4 ${
                loading ? "bg-green-500" : "bg-red-600"
              }`}
            >
              {listing.hostId == userId
                ? `${loading ? "Updating please wait..." : "Update"}`
                : listing.guestId == userId
                ? `${loading ? "Canceling please wait..." : "Cancel"}`
                : `${loading ? "Booking please wait..." : "Book"}`}
            </button>
            {listing.hostId == userId && (
              <button
                onClick={() => setDeletePopup(true)}
                className={`rounded-full sm:max-w-50   hover:cursor-pointer text-xl font-semibold text-white  hover:bg-red-700 active:bg-red-800 w-full  md:w-1/4  p-4 bg-red-600`}
              >
                Delete
              </button>
            )}
          </div>
          <div className="bg-red-100 py-5 px-10 rounded-2xl">
            <h2 className="font-semibold text-5xl">Reviews :</h2>
            <div
              className={`rounded-2xl text-xl font-semibold bg-gray-400 px-8 py-6 mt-5 ${
                userId == listing.hostId ? "hidden" : "block"
              }`}
            >
              <form onSubmit={handleSubmit}>
                <textarea
                  className="w-full max-h-25 min-h-25 mb-0 bg-white rounded-2xl px-3 py-2"
                  maxLength={100}
                  onChange={(e) => setReviewText(e.target.value)}
                  value={reviewText}
                  type="text"
                  placeholder="Share your experience "
                />
                <button
                  type="submit"
                  className="bg-red-600 rounded-xl px-5 py-1 mt-3 text-white"
                >
                  Submit
                </button>
              </form>
            </div>

            {reviewArr.map((review, i) => {
              return (
                <div className="rounded-2xl text-xl font-semibold bg-gray-400 px-8 py-6 mt-5">
                  <div>{review.reviewText}</div>
                  <h2 className="mt-4">
                    {" "}
                    <span className="rounded-2xl px-5 py-1  bg-gray-200">
                      by {review.reviewer.name} at{" "}
                      {new Intl.DateTimeFormat("en-GB").format(
                        new Date(review.updatedAt)
                      )}
                    </span>
                  </h2>
                </div>
              );
            })}
          </div>
        </div>

        {updatePopup && <UpdateForm setUpdatePopup={setUpdatePopup} />}
        {bookingPopup && <BookingForm setBookingPopup={setBookingPopup} />}
        {deletePopup && (
          <DeleteConfirm
            setDeletePopup={setDeletePopup}
            PropertyID={listing.propertyID}
          />
        )}
        {cancelPopup && (
          <CancelConfirm
            setCancelPopup={setCancelPopup}
            PropertyID={listing.propertyID}
          />
        )}
      </div>
    </div>
  );
};

export default PropertyView;
