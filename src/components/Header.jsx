import React from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  function pathMatchRoute(route) {
    return route === location.pathname;
  }

  return (
    <div className='bg-white border-b shadow-sm sticky top-0 z-50'>
      <header className='flex justify-between items-center px-3 max-w-6xl mx-auto'>
        <div>
          <Link to="/">
            <img src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg" alt="logo"  
            className='h-5 cursor-pointer' 
            onClick={()=>navigate("/")}/>
          </Link>
        </div>
        <div>
          <ul className='flex space-x-10'>
          <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 
              ${pathMatchRoute("/") ? "active border-b-2 border-orange-500 text-black" : "border-b-2 border-transparent"}`}
             onClick={()=>navigate("/")}>Home</li>

<li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 
              ${pathMatchRoute("/offers") ? "active border-b-2 border-orange-500 text-black" : "border-b-2 border-transparent"}`}
            onClick={()=>navigate("/offers")}>Offers</li>

<li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 
              ${pathMatchRoute("/sign-in") ? "active border-b-2 border-orange-500 text-black" : "border-b-2 border-transparent"}`}
            onClick={()=>navigate("/sign-in")}>Sign in</li>

          </ul>
        </div>
      </header>
    </div>
  );
}
