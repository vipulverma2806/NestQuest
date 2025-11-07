import React, { useState, useContext } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { authDataContext } from "../Context/authContext";
import { listingDataContext } from "../Context/ListingContext";
import { getUserData } from "../Redux/AuthSlice";
import { useDispatch } from "react-redux";
const Login = () => {
  axios.defaults.withCredentials = true;
  const dispatch = useDispatch();
  // const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  // const [wait, setWait] = useState(false);
  const navigate = useNavigate();
  let { setName, email, setEmail } = useContext(authDataContext);
  let { loading, setLoading } = useContext(listingDataContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await axios.post("http://localhost:5000/auth/login", {
        email,
        password,
      });
      setLoading(false);
      // console.log("Login response:", res.data);
      dispatch(getUserData());
      toast.success("Login Successful");
      navigate("/");
    } catch (error) {
      // console.error(error);
      if (error.response.data === "NA")
        return toast.error("Invalid Crediantials");
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center">
      <div className="flex justify-center lg:justify-end items-center w-full lg:w-1/3">
        <form
          onSubmit={handleLogin}
          className="bg-gray-800 shadow-white shadow-sm flex flex-col p-6  rounded-2xl space-y-5 max-w-sm w-full "
        >
          <h1 className="text-gray-100 text-center text-2xl font-bold">
            Login to{" "}
            <span onClick={() => navigate("/")} className="text-red-500">
              NestQuest
            </span>
          </h1>

          <input
            type="email"
            placeholder="Email"
            className="placeholder-gray-400 w-full p-3 text-gray-100 rounded-2xl  bg-gray-700"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="placeholder-gray-400 w-full p-3 text-gray-100 rounded-2xl  bg-gray-700"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
          <button
            type="submit"
            className={` active:bg-red-700 rounded-2xl p-3 hover:cursor-pointer  text-white w-full ${
              loading ? "bg-green-500 " : "bg-red-500 hover:bg-red-600 "
            }`}
          >
            {loading ? "Please wait.." : "Login"}
          </button>
          <p className="text-gray-200 ">
            Don't have an account :{" "}
            <Link to="/register" className="hover:underline text-blue-500">
              {" "}
              Register
            </Link>
          </p>
        </form>
      </div>
      <div className="hidden lg:flex lg:justify-end lg:w-2/3 ">
        <img
          src="../../public/rent.jpg"
          className="min-h-screen ml-10 overflow-hidden object-cover rounded-l-full"
          alt="Description"
        />
      </div>
    </div>
  );
};

export default Login;
