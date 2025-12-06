import React from 'react'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Mission from './components/Mission'
import ExplorePrograms from './components/ExplorePrograms'
import BecomeMember from './components/BecomeMember'
import DonationSection from './components/DonationSection'
import Footer from './components/Footer'

const page = () => {
  return (
    <>
    <div className='w-full h-full  overflow-hidden ' >
      <Navbar/>
    <Hero/>
    <Mission/>
    <ExplorePrograms/>
    <BecomeMember/>
    <DonationSection/>
    <Footer/>
    </div>
    </>
  )
}

export default page