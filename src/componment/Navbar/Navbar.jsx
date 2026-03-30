import React from 'react';

const Navbar = () => {
    return (

  <div className="bg-base-100 shadow-sm flex justify-around p-4 items-center">
  <div className="">
    <a className="font-bold text-4xl text-blue-600">DigiTools</a>
  </div>

    <div className="">
        <ul className="menu menu-horizontal gap-10 px-1 text-lg font-semibold">
          <li>
            <a>Products</a>
          </li>
          <li>
            <a>Features</a>
          </li>
          <li>
            <a>Pricing</a>
          </li>
          <li>
            <a>Testimonials</a>
          </li>
          <li>
            <a>FAQ</a>
          </li>
        </ul>
      </div>

  <div className="flex items-center gap-2">
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <div className="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /> </svg>
          <span className="badge badge-sm indicator-item"></span>
        </div>
      </div>
    </div>
    <div className="dropdown dropdown-end">
     <div>
        <h2 className='font-semibold'>Login</h2>
      </div>
    </div>
    <div>
        <button className='btn btn-primary rounded-3xl'>Get Started</button>
    </div>
  </div>
</div>
  );
};
export default Navbar;