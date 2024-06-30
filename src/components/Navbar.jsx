import React from 'react'
import HobbyCueLogo from "../assets/images/HobbyCueLogo.png";
import { CiSearch } from 'react-icons/ci';
import { IoMdCompass } from 'react-icons/io';
import { FaBell, FaBookmark, FaStar } from 'react-icons/fa';
import { FaCartShopping } from 'react-icons/fa6';

const Navbar = () => {
  return (
    <div className='shadow-xl'>
<div className="navbar bg-base-100 w-10/12 mx-auto">
  <div className="flex-1 gap-5 relative">
    <a className="cursor-pointer flex items-center justify-center">
        <img src={HobbyCueLogo} alt="" />
    </a>
    <div className='relative'>
        <input type="text" className='border-l-2 border-y-2 border-gray-300 p-1 rounded-l-xl' placeholder='Search here' />
        <button className='bg-[#8064A2] p-[9.5px] rounded-r-xl absolute border-none'>
        <CiSearch className='text-white' />
        </button>
    </div>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal flex items-center justify-center">
      <li>
      <details>
          <summary><IoMdCompass className='text-xl text-[#8064A2]' /> Explore</summary>
          <ul className="bg-base-100 rounded-t-none">
            <li><a>Link 1</a></li>
            <li><a>Link 2</a></li>
          </ul>
        </details>
      </li>
      <li>
        <details>
          <summary><FaStar className='text-xl text-[#8064A2]' />Hobbies</summary>
          <ul className="bg-base-100 rounded-t-none p-2">
            <li><a>Link 1</a></li>
            <li><a>Link 2</a></li>
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
</div>
</div>
  )
}

export default Navbar
