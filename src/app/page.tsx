import React from 'react'

// fonts
import "@fontsource/commissioner";
import "@fontsource/poppins";

import NavBar from './component/NavBar'
import Hero from './component/Hero'
import ExpertiseBanner from './component/ExpertierBarrier';
import ServicesForKids from './component/ServicesForKids';
import MentalHealthDirectory from './component/MentalHealthDirectory';

const page = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <ExpertiseBanner />
      <MentalHealthDirectory />
      <ServicesForKids />
    </div>
  )
}

export default page
