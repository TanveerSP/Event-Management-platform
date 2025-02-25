import React, { useState } from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import { MdArrowRightAlt } from "react-icons/md";

const Login = () => {
  const [isEyeOpen, setIsEyeOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // for show/hide password
  const toggleEye = (e) => {
    e.preventDefault(); // Prevent form submission when clicking the icon
    setIsEyeOpen((prev) => !prev);
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <form className="p-10 bg-gray-100 rounded-xl shadow-md">
        <h2 className="text-2xl text-purple-800 font-bold mb-5">Login to Your Account</h2>

        <div className="mb-4">
          <label className="block mb-2 text-sm">Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border p-2 w-full rounded"
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="relative mb-4">
          <label className="block mb-2 text-sm">Password:</label>
          <input
            type={isEyeOpen ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border p-2 w-full rounded"
            placeholder="Enter your password"
            required
          />
          <button className="absolute top-9 right-2" onClick={toggleEye}>
            {isEyeOpen ? <AiOutlineEyeInvisible size={25} /> : <AiOutlineEye size={25} />}
          </button>
        </div>

        <button
          type="submit"
          className="bg-purple-500 text-white px-4 py-2 w-full rounded cursor-pointer hover:bg-purple-600"
        >
          Login
        </button>
      </form>

      <div className="p-4 mt-1 flex items-center">
        <Link to="/register" className="flex items-center space-x-1 text-purple-700 hover:underline">
          <p className="text-lg">New Register</p>
          <MdArrowRightAlt size={25} />
        </Link>
      </div>
    </div>
  );
};

export default Login;
