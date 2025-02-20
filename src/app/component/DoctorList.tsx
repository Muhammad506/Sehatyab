
import React from "react";
import { FaStar } from "react-icons/fa";
import Image from "next/image";

// Define clinic images
const clinicImages = {
  rowPattern1: "/Appointment/YellowCam.png",
  rowPattern2: "/Appointment/Hosp.png",
  rowPattern3: "/Appointment/YellowCam.png",
  rowPattern4: "/Appointment/RedCam.png",
};

// Define border colors for each doctor ID
const doctorBorderColors: Record<number, string[]> = {
  1: ["border-yellow-500", "border-gray-300"],
  2: ["border-gray-300", "border-yellow-500"],
  3: ["border-yellow-500", "border-gray-300"],
  4: ["border-pink-700", "border-pink-700", "border-pink-700", "border-pink-700"],
};

// Define doctor data
const doctors = [
  {
    id: 1,
    name: "Dr. Raman Kumar",
    image: "/Appointment/BestDoc1.png",
    reviews: 1424,
    rating: 5,
    specialty: "Paediatrician & Child Specialist, Neurologist, Brain & N Nerves, Paediatric Neurologist",
    experience: "N/A",
    clinics: [
      { name: "Shifam Virtual Clinic", price: "Rs. 2000", available: true, image: clinicImages.rowPattern1 },
      { name: "Shifam International Clinic (Virtual)", price: "Rs. 5000", available: true, image: clinicImages.rowPattern2 },
    ],
  },
  {
    id: 2,
    name: "Dr. Arit Parkash",
    image: "/Appointment/BestDoc2.png",
    reviews: 1,
    rating: 5,
    specialty: "Pediatric Gastroenterologist",
    experience: "17 Year(s)",
    clinics: [
      { name: "Shifam Peads Neurology And Wellness", price: "Rs. 2500", available: true, image: clinicImages.rowPattern2 },
      { name: "Shifam Virtual Clinic", price: "Rs. 2500", available: true, image: clinicImages.rowPattern3 },
    ],
  },
  {
    id: 3,
    name: "Assist. Professor Dr. Faisal Zafar",
    image: "/Appointment/BestDoc3.png",
    reviews: 14,
    rating: 5,
    specialty: "Pediatric Neurologist",
    experience: "10 Year(s)",
    clinics: [
      { name: "Shifam Virtual Clinic", price: "Rs. 2000", available: true, image: clinicImages.rowPattern1 },
      { name: "Azeem Hospital", price: "Rs. 2000", available: true, image: clinicImages.rowPattern3 },
    ],
  },
  {
    id: 4,
    name: "Dr. Naveen Manzoor",
    image: "/Appointment/BestDoc4.png",
    reviews: 25,
    rating: 5,
    specialty: "General Physician, Internal Medicine",
    experience: "10 Year(s)",
    clinics: [
      { name: "Shifam Virtual Clinic", price: "Rs. 2500", available: true, image: clinicImages.rowPattern4 },
      { name: "Shifam Virtual Clinic (Import Checking)", price: "Rs. 2500", available: true, image: clinicImages.rowPattern4 },
      { name: "Shifam Peads Neurology And Wellness", price: "Rs. 2500", available: true, image: clinicImages.rowPattern4 },
      { name: "Shifam International Clinic (Virtual)", price: "Rs. 5000", available: true, image: clinicImages.rowPattern4 },
    ],
  },
];

const DoctorList: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto p-4">
      <h2 className="text-xl font-bold text-[rgba(24,78,81,1)] mb-4">
        1304 Best Doctors in Pakistan
      </h2>
      {doctors.map((doctor) => {
        const clinicBorders = doctorBorderColors[doctor.id] || ["border-gray-300"];
        return (
          <div
            key={doctor.id}
            className="bg-white shadow-lg rounded-lg p-6 mb-4  border-gray-300"
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
              {/* Doctor Image */}
              {/* <img
            src={doctor.image}
            alt={doctor.name}
            className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover border"
          /> */}
              <Image
                src={doctor.image}
                alt={doctor.name}
                width={64}
                height={64}
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover border"
              />

              {/* Doctor Info */}
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-[rgba(24,78,81,1)]">
                  {doctor.name}
                </h3>

                {/* Rating & PMC Verified */}
                <div className="flex flex-wrap items-center text-yellow-500 text-sm gap-2">
                  <div className="flex">
                    {[...Array(doctor.rating)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                  <span className="font-bold text-black">{doctor.reviews} reviews</span>

                  {/* PMC Verified Tag */}
                  <div className="inline-flex items-center text-xs bg-blue-100 text-[rgba(24,185,213,1)] px-2.5 py-1 rounded-full">
                    {/* <img src="/Appointment/pmc.png" alt="" className="w-4 h-4" /> */}
                    <Image src="/Appointment/pmc.png" alt="PMC Verified" width={16} height={16} />
                    <span className="ml-1">PMC Verified</span>
                  </div>
                </div>

                {/* Specialty & Experience */}
                <p className="text-sm text-gray-700">{doctor.specialty}</p>
                <p className="text-sm text-black font-semibold">
                  Experience: {doctor.experience}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-3 sm:ml-auto mt-2 sm:mt-0">
                <button className="flex flex-col text-sm font-semibold border text-pink-500 px-5 py-1 border-yellow-400 rounded-full hover:bg-pink-100">
                  Book Appointment
                  <span className="text-xs">No Booking Fee</span>
                </button>
                <button className="text-sm font-semibold border border-[rgba(24,78,81,1)] text-[rgba(24,78,81,1)] px-6 py-2 rounded-full hover:bg-gray-100">
                  View Profile
                </button>
              </div>
            </div>

            {/* Clinic Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 mt-4">
              {doctor.clinics.map((clinic, index) => (
                <div
                  key={index}
                  className={`border p-3 rounded-lg flex flex-col ${clinicBorders[index % clinicBorders.length]}`}
                >
                  <div className="flex gap-1 items-center">
                    {/* <img src={clinic.image} alt={`Clinic ${index}`} className="w-6 h-6" /> */}
                    <Image src={clinic.image} alt={`Clinic ${index}`} width={24} height={24} />
                    <p className="text-xs font-medium text-gray-800 truncate">
                      {clinic.name}
                    </p>
                  </div>
                  <div className="flex justify-between items-center  m-1">
                    <div className="flex items-center pt-2 gap-1">
                      {/* <img src="/Appointment/Globe.png" alt="" className="w-4 h-4" /> */}
                      <Image src="/Appointment/Globe.png" alt="Globe Icon" width={16} height={16} />
                      <p className="text-xs  text-[rgba(10,199,10,1)]">Available</p>
                    </div>
                    <p className="text-xs font-medium text-gray-800">{clinic.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}

      {/* Pagination */}
      <div className="flex justify-end items-center text-sm font-semibold space-x-4 mt-6">
        <button className="text-black hover:text-gray-900">PREVIOUS</button>
        <button className="bg-[rgba(6,104,95,1)] text-white px-3.5 py-1 rounded-full">
          1
        </button>
        <button className="text-black hover:text-gray-900">2</button>
        <button className="text-black hover:text-gray-900">3</button>
        <button className="text-black hover:text-gray-900">4</button>
        <button className="text-[rgba(6,104,95,1)] hover:text-gray-900">NEXT</button>
      </div>
    </div>

  );
};

export default DoctorList;
