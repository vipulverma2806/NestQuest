import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/auth/register", {
        name,
        email,
        password,
      });
      alert("Register Successfully");
      setName("");
      setPassword("");
      navigate("/");
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  // return (
  //   <div className="w-full justify-center items-center min-h-screen flex">

  //       <form onSubmit={handleSubmit} className="lg:w-1/3 w-full flex justify-center items-center flex-col">
  //         <h1>Register</h1>
  //         <input
  //           type="text"
  //           placeholder="name"
  //           value={name}
  //           onChange={(e) => setname(e.target.value)}
  //           className=""
  //         />
  //         <input
  //           type="email"
  //           placeholder="Email"
  //           value={email}
  //           onChange={(e) => setEmail(e.target.value)}
  //           className=""
  //         />
  //         <input
  //           type="password"
  //           placeholder="Password"
  //           value={password}
  //           onChange={(e) => setPassword(e.target.value)}
  //           className=""
  //         />
  //         <button type="submit" className="">
  //           Register
  //         </button>
  //          <p className="text-left w-full">
  //         Already have an account?{" "}
  //         <Link to path="/login" className="text-blue-600 hover:cursor-pointer">
  //           Login here
  //         </Link>
  //       </p>
  //       </form>

  //     <div className="hidden lg:block lg:w-2/3">
  //       <img
  //         src="../../public/exam.jpg"
  //         className="min-h-screen object-cover"
  //         alt="Description"
  //       />
  //     </div>
  //   </div>
  // );

  return (
    <div className="min-h-screen bg-gray-900 flex items-center">
      <div className="flex justify-center   lg:justify-end items-center w-full lg:w-1/3">
        <form
          onSubmit={handleRegister}
          className="bg-gray-800 flex shadow-white shadow-sm flex-col  p-6  rounded-2xl space-y-5 max-w-sm w-full "
        >
          <h1 className="text-gray-100 text-center text-2xl font-bold">
            Register to <span className="text-red-500 ">NestQuest</span>
          </h1>
          <input
            type="text"
            placeholder="Name"
            className="placeholder-gray-400 text-gray-100 w-full p-3 rounded-2xl  bg-gray-700"
            onChange={(e) => setName(e.target.value)}
            value={name}
            required
          />
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
            className="bg-red-500 active:bg-red-700 rounded-2xl p-3 hover:bg-red-600 hover:cursor-pointer text-white w-full"
          >
            Submit
          </button>
          <p className="text-gray-200 ">
            Already have an account :{" "}
            <Link to="/login" className="hover:underline text-blue-500">
              {" "}
              Login
            </Link>
          </p>
        </form>
      </div>
      <div className="hidden lg:flex lg:justify-end lg:w-2/3 ">
        <img
          src="../../public/rent.jpg"
          className="min-h-screen object-cover ml-10 overflow-hidden  rounded-l-full"
          alt="Description"
        />
      </div>
    </div>
  );
};

export default Register;
