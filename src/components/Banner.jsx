import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel, TabIndicator } from '@chakra-ui/react'
import banner1 from "../assets/images/banner1.png"
import banner2 from "../assets/images/banner2.png"
import LoginTab from './LoginTab'
import SigninTab from './SigninTab'
 
const Banner = () => {
  return (
    <div className='bg-[#f9f5ff]'>
    <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-16 lg:gap-[200px] md:gap-[100px] pt-16 w-10/12 mx-auto'>

      <div className='flex items-center justify-center'>
        <div>
            <h1 className='lg:text-[36px] md:text-[30px] text-[20px] italic font-bold mb-5'>Explore your <span className='text-cyan-500'>hobby</span> or <span className='text-[#8064A2]'>passion</span></h1>
            <p className='font-light mb-3'>Sign-in to interact with a community of fellow hobbyists and an eco-system of experts, teachers, suppliers, classes, workshops, and places to practice, participate or perform. Your hobby may be about visual or performing arts, sports, games, gardening, model making, cooking, indoor or outdoor activities.</p>

            <p className='font-light lg:block md:block hidden'>
            If you are an expert or a seller, you can Add your Listing and promote yourself, your students, products,  services or events.  Hop on your hobbyhorse and enjoy the ride</p>

            <div className='flex items-center justify-center mt-16'>
            <img className='w-[50%]' src={banner1} alt="" />
            <img className='w-[50%]' src={banner2} alt="" />
            </div>
        </div>
      </div>

      <div>
        
      <Tabs position='relative' variant='unstyled'>
  <TabList>
    <Tab>Sign In</Tab>
    <Tab>Join In</Tab>
  </TabList>
  <TabIndicator mt='-1.5px' height='2px' bg='blue.500' borderRadius='1px' />
  <TabPanels>

    <TabPanel>
        <SigninTab />
    </TabPanel>

    <TabPanel>
      <LoginTab />
    </TabPanel>

  </TabPanels>
</Tabs>
      </div>

    </div>
    </div>
  )
}

export default Banner
