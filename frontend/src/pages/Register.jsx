import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const Register = () => {
  const [isEyeOpen, setIsEyeOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Toggle password visibility
  const toggleEye = (e) => {
    e.preventDefault();
    setIsEyeOpen((prev) => !prev);
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <form
        // onSubmit={handleRegister}
        className="p-10 bg-gray-100 rounded-xl shadow-md"
      >
        <h2 className="text-2xl text-purple-800 font-bold mb-5">
          Create a New Account
        </h2>

        {/* {error && <p className="text-red-500 mb-3">{error}</p>} */}

        <div className="mb-4">
          <label className="block mb-2 text-sm">Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border p-2 w-full rounded"
            placeholder="Enter your username"
            required
          />
        </div>

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
            {isEyeOpen ? (
              <AiOutlineEyeInvisible size={25} />
            ) : (
              <AiOutlineEye size={25} />
            )}
          </button>
        </div>

        <button
          type="submit"
          className="bg-purple-500 text-white px-4 py-2 w-full rounded cursor-pointer hover:bg-purple-600"
        >
          Register
        </button>
      </form>

      <div className="p-4 mt-1 flex items-center">
        <Link
          to="/login"
          className="flex items-center space-x-1 text-purple-700 hover:underline"
        >
          <GoArrowLeft size={25} />
          <p className="text-lg">Login</p>
        </Link>
      </div>
    </div>
  );
};

export default Register;
