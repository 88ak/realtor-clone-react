import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default function Header() {
  const [pageState, setPageState] = useState("Sign in");
  const location = useLocation();
  const navigate = useNavigate();
  const auth = getAuth();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setPageState("Profile");
      } else {
        setPageState("Sign-in");
      }
    });
  }, [auth]);

  // Function to check if a given route matches the current pathname
  function pathMatchRoute(route) {
    return route === location.pathname;
  }

  // JSX code for rendering the header section
  return (
    <div className="bg-white border-b shadow-sm sticky top-0 z-50">
      <header className="flex justify-between items-center px-3 max-w-6xl mx-auto">
        {/* Logo */}
        <div>
          <Link to="/">
            <img
              src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg"
              alt="logo"
              className="h-5 cursor-pointer"
              onClick={() => navigate("/")}
            />
          </Link>
        </div>

        {/* Navigation Links */}
        <div>
          <ul className="flex space-x-10">
            <li
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 
              ${
                pathMatchRoute("/")
                  ? "active border-b-4 border-orange-600  text-black md:font-semibold"
                  : "border-b-2 border-transparent"
              }`}
              onClick={() => navigate("/")}
            >
              Home
            </li>

            <li
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 
              ${
                pathMatchRoute("/offers")
                  ? "active border-b-4 border-orange-600 text-black"
                  : "border-b-2 border-transparent"
              }`}
              onClick={() => navigate("/offers")}
            >
              Offers
            </li>

            <li
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 
              ${
                pathMatchRoute("/sign-in") || pathMatchRoute("/profile")
                  ? "active border-b-4 border-b-orange-600 text-black"
                  : "border-b-2 border-transparent"
              }`}
              onClick={() => navigate("/profile")}
            >
              {pageState}
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}
