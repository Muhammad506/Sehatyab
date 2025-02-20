"use client"
import { useState } from 'react'

const ConsultantSearchBar = () => {
    const [filters, setFilters] = useState({
        consultantType: "",
        speciality: "",
        gender: "",
        price: "",
      });
    
      const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setFilters({ ...filters, [e.target.name]: e.target.value });
      };
    
  return (
    <section className="bg-gradient-to-r from-[rgba(255,255,255,0.5)] via-[rgba(29,166,120,0.15)] to-[rgba(255,255,255,0.5)]  h-auto w-full py-6 px-4">
          <div className="max-w-7xl  flex flex-col sm:flex-row justify-between items-center gap-6 space-y-6 mx-8 sm:space-y-0 px-4 sm:px-6">
          <select
          name="consultantType"
          value={filters.consultantType}
          onChange={handleChange}
          className="w-full text-md md:w-1/4 p-2 border  "
        >
          <option value="">Consultant Type</option>
          <option value="general">General</option>
          <option value="specialist">Specialist</option>
        </select>

        {/* Speciality */}
        <select
          name="speciality"
          value={filters.speciality}
          onChange={handleChange}
          className="w-full text-md md:w-1/4 p-2 border "
        >
          <option value="">Speciality</option>
          <option value="cardiology">Cardiology</option>
          <option value="neurology">Neurology</option>
        </select>

        {/* Gender */}
        <select
          name="gender"
          value={filters.gender}
          onChange={handleChange}
          className="w-full text-md md:w-1/4 p-2 border "
        >
          <option value="">Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>

        {/* Price */}
        <select
          name="price"
          value={filters.price}
          onChange={handleChange}
          className="w-full text-md md:w-1/4 p-2 border "
        >
          <option value="">Price</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
          </div>
        </section>
  )
}

export default ConsultantSearchBar
