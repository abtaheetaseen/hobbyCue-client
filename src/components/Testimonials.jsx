import React from 'react'
import { FaPlusCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Testimonials = () => {
  return (
    <div className='bg-[#F7FDFF] py-[100px]'>
    <div className='w-10/12 mx-auto bg-white'>
      <div className='border-2 p-10 rounded-xl'>
        <div className='flex items-center justify-start gap-3 mb-5'>
        <FaPlusCircle className='text-xl text-cyan-500'/>
        <p className='text-xl font-bold'>Add your own</p>
        </div>
        
        <p>
        Are you a teacher or expert?  Do you sell or rent out equipment, venue or event tickets?  Or, you know someone who should be on hobbycue?  Go ahead and Add your Own page
        </p>

        <Link to="/addMyListings">
        <button className='btn btn-sm border-2 border-[#8064A2] bg-white mt-5'>
            Add new
        </button>
        </Link>
      </div>
    </div>
    </div>
  )
}

export default Testimonials
