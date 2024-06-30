import React from 'react'
import { FaFacebook, FaGooglePlus, FaInstagramSquare, FaPinterest, FaTwitter } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

const Footer = () => {
  return (
    <>
<footer className="footer text-base-content my-[100px] w-10/12 mx-auto">
  <nav>
    <h6 className="footer-title">Hobbycue</h6>
    <a className="link link-hover">About Us</a>
    <a className="link link-hover">Our Services</a>
    <a className="link link-hover">Work with Us</a>
    <a className="link link-hover">FAQ</a>
    <a className="link link-hover">Contact Us</a>
  </nav>
  <nav>
    <h6 className="footer-title">How Do I</h6>
    <a className="link link-hover">Sign Up</a>
    <a className="link link-hover">Add a Listing</a>
    <a className="link link-hover">Claim Listing</a>
    <a className="link link-hover">Post a Query</a>
    <a className="link link-hover">Add a Blog Post</a>
    <a className="link link-hover">Other Queries</a>
  </nav>
  <nav>
    <h6 className="footer-title">Quick Links</h6>
    <a className="link link-hover">Listings</a>
    <a className="link link-hover">Blog Posts</a>
    <a className="link link-hover">Shop / Store</a>
    <a className="link link-hover">Community</a>
  </nav>
  <nav>
    <h6 className="footer-title">Social Media</h6>
    <div className="grid grid-flow-col gap-4">
      <a>
      <FaFacebook className='text-xl text-gray-600' />
      </a>
      <a>
      <FaTwitter className='text-xl text-gray-600' />
      </a>
      <a>
      <FaInstagramSquare className='text-xl text-gray-600' />
      </a>
      <a>
      <FaPinterest className='text-xl text-gray-600' />
      </a>
      <a>
      <FaGooglePlus className='text-xl text-gray-600' />
      </a>
      <a>
      <MdEmail className='text-xl text-gray-600' />
      </a>
    </div>

    <div className='mt-10'>
        <p className='footer-title'>Invite Friends</p>
    </div>
    <div className='relative'>
        <input type="text" className='border-l-2 border-y-2 border-gray-300 p-1 rounded-l-xl' placeholder='Email ID' />
        <button className='bg-[#8064A2] text-white p-[5.5px] rounded-r-xl absolute border-none'>
        Invite
        </button>
    </div>
  </nav>
</footer>

<footer className="footer footer-center bg-[#F7F5F9] text-base-content p-5">
  <aside>
    <p className='font-bold'>© Purple Cues Private Limited</p>
  </aside>
</footer>

</>
  )
}

export default Footer
