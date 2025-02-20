import React from 'react'
import Hero from './component/Hero'
import ExpertiseBanner from './component/ExpertierBarrier'
import MentalHealthDirectory from './component/MentalHealthDirectory'
import ServicesForKids from './component/ServicesForKids'
import GetQuote from './component/GetQuote'
import OurConsultants from './component/Consultant'
import BlogContent from './component/BlogContent'
import HowItWorks from './component/HowItWorks'
import Appointment from './component/Appointment'


const page = () => {
  return (
    <div>
      <Hero />
      <ExpertiseBanner />
      <MentalHealthDirectory />
      <ServicesForKids />
      <Appointment />
      <HowItWorks />
      <BlogContent />
      <OurConsultants />
      <GetQuote />
    </div>
  )
}

export default page
