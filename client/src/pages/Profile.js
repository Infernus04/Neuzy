import React from "react";

const Profile = () => {
  return (
    <div className="flex items-center justify-center ">
      
      <form className="my-12 p-3">
      <h1 className="text-3xl py-6 font-semibold text-center">Profile</h1>
        <div className="flex flex-col gap-4">
          <input
            type="text"
            id="Username"
            placeholder="Username"
            className="bg-slate-300 rounded-lg p-4"
          />
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
          <button>
            
          </button>
        </div>
      </form>
    </div>
  );
};

export default Profile;
