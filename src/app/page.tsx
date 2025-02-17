import React from 'react'
import NavBar from './component/Navbar'
import Hero from './component/Hero'
import ExpertiseBanner from './component/ExpertierBarrier'
import MentalHealthDirectory from './component/MentalHealthDirectory'
import ServicesForKids from './component/ServicesForKids'
import GetQuote from './component/GetQuote'
import OurConsultants from './component/Consultant'
import Footer from './component/Footer'


const page = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <ExpertiseBanner />
      <MentalHealthDirectory />
      <ServicesForKids />
      <GetQuote/>
      <OurConsultants/>
      <Footer/>
    </div>
  )
}

export default page
