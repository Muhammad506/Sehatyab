import React from 'react'
import Navbar from './component/Navbar'
import Footer from './component/Footer'
import OurConsultants from './component/Consultant'
import GetQuote from './component/GetQuote'

const page = () => {
  return (
    <div>
      <Navbar />
      <OurConsultants/>
      <GetQuote/>
      <Footer/>
    </div>
  )
}

export default page
