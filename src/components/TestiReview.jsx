import React from 'react'
import { FaMicrophoneAlt, FaQuoteLeft } from 'react-icons/fa'

const TestiReview = () => {
  return (
    <div className='bg-white py-[100px]'>
    <div className='w-10/12 mx-auto bg-[#f9f5ff]'>
      <div className='border-2 p-10 rounded-xl'>
        <div className='flex items-center justify-start gap-3 mb-5'>
        <FaQuoteLeft className='text-xl text-[#8064A2]'/>
        <p className='text-xl font-bold'>Testimonials</p>
        </div>
        
        <p>
        In a fast growing and ever changing city like Bangalore, it sometimes becomes very difficult to find or connect with like minded people. Websites like hobbycue.com is a great service which helps me get in touch with, communicate, connect, and exchange ideas with other dancers. It also provides the extra benefit of finding products and services that I can avail, which I can be assured is going to be of great quality as it comes recommended by people of the hobbycue community. To have discussions, to get visibility, and to be able to safely explore various hobbies and activities in my city, all under one roof, is an excellent idea and I highly recommend it.
        </p>

        <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 mt-10'>
            <div className='w-full'>
            <div className="flex justify-start items-center py-4">
      <div className="bg-[#CCC1DA] w-full h-24 rounded-lg flex items-center px-4">
        <div className="bg-white w-12 h-12 rounded-full flex justify-center items-center mr-4">
          <svg className="w-6 h-6 text-[#8064A2]" fill="currentColor" viewBox="0 0 20 20">
            <path d="M6 4l10 6-10 6V4z" />
          </svg>
        </div>
        <div className="flex-grow">
          <div className="bg-white h-2 rounded mt-1 relative">
            <div className="bg-[#8064A2] h-2 rounded absolute" style={{ width: '3%' }}></div>
          </div>
        </div>

        <div className="w-10 ml-4 relative">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" className='rounded-full' />
            <FaMicrophoneAlt className='absolute top-6 text-xl right-6 text-white' />
        </div>
      </div>
    </div>
            </div>

            <div className='flex items-center justify-center gap-3 '>
            <div className="w-20 ml-4">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" className='rounded-full' />
        </div>

        <div>
            <h1 className='font-bold text-[#8064A2]'>Subha Nagarajan</h1>
            <p className='text-cyan-500'>Classical Dancer</p>
        </div>
            </div>

        </div>
         
      </div>
    </div>
    </div>
  )
}

export default TestiReview
