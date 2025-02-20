import React from 'react'
import DoctorList from '../component/DoctorList'
import DoctorsPage from '../component/Doctor'
import ConsultantSearchBar from '../component/ConsultantSearchBar'

const page = () => {
  return (
    <div>
        <DoctorsPage/>
        <ConsultantSearchBar/>
        <DoctorList/>
    </div>
  )
}

export default page
