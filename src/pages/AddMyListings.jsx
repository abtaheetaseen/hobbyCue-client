import React from 'react'
import { FaPlusCircle, FaUsers } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'
import { IoBagAdd } from 'react-icons/io5'
import { SlCalender } from 'react-icons/sl'

const AddMyListings = () => {
  return (
    <div className='flex items-center justify-center min-h-[60vh]'>
      <div>

        <div className='flex items-center justify-center mt-[50px]'>
      <div className='flex items-center justify-start gap-3'>
        <FaPlusCircle className='text-xl text-cyan-500'/>
        <p className='text-xl font-bold'>Add your own</p>
        </div>
        </div>

        <div className='mt-[50px] w-10/12 mx-auto grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-10'>

<div className='border-2 border-[#8064A2] p-10 rounded-xl hover:bg-[#8064A2] hover:border-none hover:text-white transition duration-300'>
  <div className='flex items-center justify-start gap-3 mb-5'>
  <FaUsers className='text-xl'/>
  <p className='text-xl font-bold'>People</p>
  </div>
  
  <p>
  An Individual or Organization.  Teacher, Coach, Professional or Online Seller.  Company, Business or Association.
  </p>

</div>

<div className='border-2 border-green-600 p-10 rounded-xl hover:bg-green-600 hover:border-none hover:text-white transition duration-300'>
  <div className='flex items-center justify-start gap-3 mb-5'>
  <FaLocationDot className='text-xl'/>
  <p className='text-xl font-bold'>Place</p>
  </div>
  
  <p>
  An Address.  Classroom, Shop, Performance or Event Venue, Sports Arena, Play Area, Studio, School or Campus.
  </p>

</div>

<div className='border-2 border-red-700 p-10 rounded-xl hover:bg-red-700 hover:border-none hover:text-white transition duration-300'>
  <div className='flex items-center justify-start gap-3 mb-5'>
  <IoBagAdd className='text-xl'/>
  <p className='text-xl font-bold'>Product</p>
  </div>
  
  <p>
  An Item that you can Book, Buy or Rent.  Appointment, Ticket, or Voucher.  Equipment, Instrument or Activity Kit.
  </p>

</div>

<div className='border-2 border-cyan-500 p-10 rounded-xl hover:bg-cyan-500 hover:border-none hover:text-white transition duration-300'>
  <div className='flex items-center justify-start gap-3 mb-5'>
  <SlCalender className='text-xl'/>
  <p className='text-xl font-bold'>Program</p>
  </div>
  
  <p>
  An Event with Venue and Date.  Meetup, Workshop or Webinar.  Exhibition, Performance or Competition.
  </p>

</div>

</div>
      </div>
    </div>
  )
}

export default AddMyListings
