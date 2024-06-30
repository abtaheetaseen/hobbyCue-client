import React from 'react'
import { CiSearch } from 'react-icons/ci'
import HobbyCueLogo from "../assets/images/HobbyCueLogo.png";
import { IoMdCompass } from 'react-icons/io';
import { FaBell, FaBookmark, FaStar } from 'react-icons/fa';
import { FaCartShopping } from 'react-icons/fa6';
import { IoSearch } from 'react-icons/io5';

const Nav = () => {
  return (
    <div>
      <div className="navbar bg-base-100 w-10/12 mx-auto">
  <div className="navbar-start flex gap-3">

    
    <a className="cursor-pointer flex items-center justify-center lg:w-[200px] md:w-[200px]">
        <img src={HobbyCueLogo} alt="" />
    </a>
    <div className='relative hidden lg:block md:block'>
        <input type="text" className='border-l-2 border-y-2 border-gray-300 p-1 rounded-l-xl' placeholder='Search here' />
        <button className='bg-[#8064A2] p-[9.5px] rounded-r-xl absolute border-none'>
        <CiSearch className='text-white' />
        </button>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex ml-10">
  <ul className="menu menu-horizontal flex items-center justify-center">
      <li>
      <details>
          <summary><IoMdCompass className='text-xl text-[#8064A2]' /> Explore</summary>
          <ul className="bg-base-100 rounded-t-none">
          <li><a>People - Community</a></li>
            <li><a>Places - Venues</a></li>
            <li><a>Programs - Events</a></li>
            <li><a>Products - Store</a></li>
            <li><a>Blogs</a></li>
          </ul>
        </details>
      </li>
      <li>
        <details>
          <summary><FaStar className='text-xl text-[#8064A2]' />Hobbies</summary>
          <ul className="bg-base-100 rounded-t-none p-2">
          <li><a>People - Community</a></li>
            <li><a>Places - Venues</a></li>
            <li><a>Programs - Events</a></li>
            <li><a>Products - Store</a></li>
            <li><a>Blogs</a></li>
          </ul>
        </details>
      </li>
      <li>
      <FaBookmark className='text-5xl text-[#8064A2]' />
      </li>
      <li>
      <FaBell className='text-5xl text-[#8064A2]' />
      </li>
      <li>
      <FaCartShopping className='text-[52px] text-[#8064A2]' />
      </li>
      <li>
        <button className='btn btn-sm bg-transparent border-2 border-[#8064A2] text-[#8064A2]'>
            Sign In
        </button>
      </li>
    </ul>
  </div>

{/* dropdown */}

<div className="navbar-end">
    <div className='flex items-center justify-center gap-5 lg:hidden md:hidden'>
      <FaBell className='text-xl text-[#8064A2]' />

      <IoSearch className='text-xl text-[#8064A2]' />
    </div>
<div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-md lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-[#8064A2]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">

        <li>
            <a>Explore</a>
            <ul className="p-2">
            <li><a>People - Community</a></li>
            <li><a>Places - Venues</a></li>
            <li><a>Programs - Events</a></li>
            <li><a>Products - Store</a></li>
            <li><a>Blogs</a></li>
          </ul>
        </li>

        <li>
          <a>Hobbies</a>
          <ul className="p-2">
          <li><a>People - Community</a></li>
            <li><a>Places - Venues</a></li>
            <li><a>Programs - Events</a></li>
            <li><a>Products - Store</a></li>
            <li><a>Blogs</a></li>
          </ul>
        </li>

      </ul>
    </div>
  </div>


</div>
    </div>
  )
}

export default Nav
