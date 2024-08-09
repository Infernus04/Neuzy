import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-red-500">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-5">
        <Link to={"/"}>
          <h1 className="font-bold text-4xl">Neuzy</h1>
        </Link>

        <ul className="flex gap-4">
          <Link to={"/"}>
            <li>Home</li>
          </Link>
          <Link to={"/sports"}>
            <li>Sports</li>
          </Link>
          <Link to={"/health"}>
            <li>Health</li>
          </Link>
          <Link to={"finance"}>
            <li>Finance</li>
          </Link>
          <Link to={"/business"}>
            <li>Business</li>
          </Link>
          <Link to={"/life"}>
            <li>Life</li>
          </Link>
          <Link to={"/entertainment"}>
            <li>Entermainment</li>
          </Link>
          <Link to={"/profile"}>
            <li>Profile</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
