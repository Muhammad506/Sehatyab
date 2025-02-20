// pages/our-consultants.tsx 
import Image from 'next/image';
import { FaFacebookF, FaXTwitter, FaLinkedinIn } from 'react-icons/fa6';

const consultants = [
  { name: 'Dr. John Doe PhD', specialty: 'Neurologist', image: '/Home/Doc1.png' },
  { name: 'Dr. David Wilson MD', specialty: 'Dermatologist', image: '/Home/Doc2.png' },
  { name: 'Dr. Sebastian Junn', specialty: 'Dental Specialist', image: '/Home/Doc3.png' },
  { name: 'Dr. Goe Bloggs', specialty: 'Henri Specialist', image: '/Home/Doc4.png' },
];

export default function OurConsultants() {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      {/* Top Section */}
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-start space-y-6 md:space-y-0">
        {/* Left Section */}
        <div className='w-2/3'>
          <h1 className="text-md font-semibold text-yellow-400 mb-2">Our Consultants</h1>
          <h1 className="text-3xl sm:text-3xl font-bold pr-8 text-[rgba(6,104,95,1)] mb-4 sm:mb-6">
            Your Health in the Hands of Trusted Experts
          </h1>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 text-left">
          <p className="text-black mb-4 sm:mb-6 text-sm sm:text-base">
            Lorem Ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <button className="bg-[rgba(255,188,10,1)] text-md font-semibold text-white px-4 sm:px-6 py-2 rounded-full hover:bg-yellow-500 transition">
            View More Doctors
          </button>
        </div>
      </div>

      {/* Consultants Grid */}
      <div className="container mx-auto px-8 mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {consultants.map((consultant, index) => (
          <div key={index} className="relative bg-[rgba(217,207,223,1)] rounded-xl shadow-lg overflow-hidden h-72 sm:h-80">
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image 
                src={consultant.image} 
                alt={consultant.name} 
                layout="fill" 
                objectFit="cover" 
                className="w-full h-full object-cover"
                priority
              />
            </div>
        
            {/* Social Links */}
            <div className="absolute top-4 right-4 flex flex-col space-y-2 z-10">
              <a href="#" className="bg-[rgba(29,166,120,1)] text-white p-2 rounded-full hover:bg-[#047857] transition">
                <FaFacebookF />
              </a>
              <a href="#" className="bg-[rgba(29,166,120,1)] text-white p-2 rounded-full hover:bg-[#047857] transition">
                <FaXTwitter />
              </a>
              <a href="#" className="bg-[rgba(29,166,120,1)] text-white p-2 rounded-full hover:bg-[#047857] transition">
                <FaLinkedinIn />
              </a>
            </div>
        
            {/* Content Positioned at Bottom */}
            <div className="absolute m-3 bottom-0 left-0 right-0 p-3 sm:p-4 bg-[rgba(29,166,120,0.9)] text-white rounded-xl">
              <h3 className="text-sm sm:text-lg font-bold">{consultant.name}</h3>
              <p className="text-xs sm:text-sm">{consultant.specialty}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
