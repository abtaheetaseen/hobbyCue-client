import React from 'react'
import { FaUsers } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'
import { IoBagAdd } from 'react-icons/io5'
import { SlCalender } from 'react-icons/sl'

const Feature = () => {
  return (
    <div className='my-[100px] w-10/12 mx-auto grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-10'>

      <div className='border-2 p-10 rounded-xl'>
        <div className='flex items-center justify-start gap-3 mb-5'>
        <FaUsers className='text-xl text-[#8064A2]'/>
        <p className='text-xl font-bold'>People</p>
        </div>
        
        <p>
        Find a teacher, coach, or expert for your hobby interest in your locality.  Find a partner, teammate, accompanist or collaborator.
        </p>

        <button className='btn btn-sm border-2 border-[#8064A2] bg-white mt-5'>
            Connect
        </button>
      </div>

      <div className='border-2 p-10 rounded-xl'>
        <div className='flex items-center justify-start gap-3 mb-5'>
        <FaLocationDot className='text-xl text-green-600'/>
        <p className='text-xl font-bold'>Place</p>
        </div>
        
        <p>
        Find a class, school, playground, auditorium, studio, shop or an event venue.  Book a slot at venues that allow booking through hobbycue.
        </p>

        <button className='btn btn-sm border-2 border-[#8064A2] bg-white mt-5'>
            Meetup
        </button>
      </div>

      <div className='border-2 p-10 rounded-xl'>
        <div className='flex items-center justify-start gap-3 mb-5'>
        <IoBagAdd className='text-xl text-[#8064A2]'/>
        <p className='text-xl font-bold'>Product</p>
        </div>
        
        <p>
        Find equipment or supplies required for your hobby.  Buy, rent or borrow from shops, online stores or from community members.
        </p>

        <button className='btn btn-sm border-2 border-[#8064A2] bg-white mt-5'>
            Get it
        </button>
      </div>

      <div className='border-2 p-10 rounded-xl'>
        <div className='flex items-center justify-start gap-3 mb-5'>
        <SlCalender className='text-xl text-[#8064A2]'/>
        <p className='text-xl font-bold'>Program</p>
        </div>
        
        <p>
        Find events, meetups and workshops related to your hobby.  Register or buy tickets online.
        </p>

        <button className='btn btn-sm border-2 border-[#8064A2] bg-white mt-5'>
            Attend
        </button>
      </div>

    </div>
  )
}

export default Feature
