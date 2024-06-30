import React from 'react'
import community from "../assets/images/community.png"
import { IoIosArrowDropup } from 'react-icons/io'

const Community = () => {
  return (
    <div className='bg-[#F7FDFF]'>
    <div className='w-10/12 mx-auto pt-[100px]'>
      <h1 className='lg:text-[36px] md:text-[36px] text-[20px] font-bold italic mb-5'>Your <span className='text-[#8064A2]'>Hobby,</span> Your <span className='text-cyan-500'>Community.....</span></h1>
      <button className='bg-[#8064A2] border-none btn btn-sm hover:bg-[#a483cd] text-white mb-10'>
        Get started
      </button>

        <div className='items-center justify-end mb-16 hidden md:block lg:block'>
            <div className='text-center'>
            <button>
            <IoIosArrowDropup className='text-4xl' />
            </button>
            <p className='text-xs'>Go to top (Ctrl+Home)</p>
            </div>
        </div>

        <div>
            <img src={community} alt="" />
        </div>
    </div>
    </div>
  )
}

export default Community
