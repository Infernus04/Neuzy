import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [formData, setFormData] = useState({});
  const handleChange = () => {
    
  }
  return (
    <div className="flex items-center justify-center ">
      <form className="my-12 p-3 ">
        <h1 className="text-3xl py-6 font-semibold text-center">
          Register Yourself
        </h1>
        <div className="flex flex-col gap-4 relative">
          <input
            type="text"
            id="username"
            placeholder="Username"
            className="peer bg-slate-300 rounded-lg p-4 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-blue-600"
          />
          <label
            for="username"
            className="absolute text-gray-500 text-sm px-4 py-5 pt-3 transition-all peer-placeholder-shown:text-center peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-blue-600"
          >
            Username
          </label>
          <input
            type="email"
            id="email"
            placeholder="E-mail"
            className="bg-slate-300 rounded-lg p-4"
          />
          <input
            type="password"
            id="Password"
            placeholder="Password"
            className="bg-slate-300 rounded-lg p-4"
          />
          <div className="flex  mb-1">
            <p className="pr-1">Already Account,</p>
            <Link to="/sign-in">
              <span className="pr-4">Sign In</span>
            </Link>
            <span className="pl-4">Forgot password?</span>
          </div>
            
          

          <button>
            <div className="bg-slate-700 rounded-lg p-2">
              <h1>Submit</h1>
            </div>
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
