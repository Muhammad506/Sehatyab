import Image from "next/image";

const Appointment = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[rgba(29,166,120,1)] p-4">
      <div className="w-full max-w-5xl bg-[rgba(29,166,120,1)] rounded-lg flex flex-col lg:flex-row  space-y-8 lg:space-y-0 ">
        {/* Left Side - Appointment Form */}
        <div className="w-full lg:w-2/5 ml-32 ">
          <h2 className=" text-md text-white font-semibold">Appointment</h2>
          <h1 className="text-2xl font-bold text-white mt-2">
            Schedule Your Care with Our Certified Experts
          </h1>
          <form className="mt-4 bg-white p-6 rounded-lg shadow-lg  space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <input
                type="text"
                placeholder="Name"
                className="p-2 w-full border rounded-md focus:ring focus:ring-[#2BA56A] outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                className="p-2 w-full border rounded-md focus:ring focus:ring-[#2BA56A] outline-none"
              />
              <input
                type="tel"
                placeholder="Telephone"
                className="p-2 w-full border rounded-md focus:ring focus:ring-[#2BA56A] outline-none"
              />
               <input
                type="num"
                placeholder="Number"
                className="p-2 w-full border rounded-md focus:ring focus:ring-[#2BA56A] outline-none"
              />
              <input
                type="date"
                className="p-2 w-full border rounded-md focus:ring focus:ring-[#2BA56A] outline-none"
              />
            <select className="p-2 w-full border rounded-md focus:ring focus:ring-[#2BA56A] outline-none">
                <option >Gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>
            <select className="p-2 w-full border rounded-md focus:ring focus:ring-[#2BA56A] outline-none">
                <option>Services</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
              <textarea placeholder="message" className="border w-full p-2 rounded"></textarea>
            <button className="w-full bg-[rgba(29,166,120,1)] text-white p-2 rounded-full font-semibold hover:bg-[#238A56]">
              Make Appointment
            </button>
          </form>
        </div>

        {/* Center - Doctor Image */}
        <div className="w-full  bottom-0 left-1/2 pt-40 pr-10 lg:w-1/3 flex ">
          <Image
            src="/Home/Doctor.png"
            alt="Doctor"
            width={250}
            height={250}
            className="object-contain"
          />
        </div>

        {/* Right Side - Work Hours */}
        <div className="w-full absolute  right-44  lg:w-1/5 bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-lg  font-semibold">Work Hours</h3>
          <span className="text-sm  py-1">Lorem ipsum dolor sit amet consectetur,</span>
          <ul className=" space-y-2 mt-2">
            <li className="flex justify-between text-sm">
              <span>Monday</span> <span>9AM - 5PM</span>
            </li>
            <li className="flex justify-between text-sm">
              <span>Tuesday</span> <span>9AM - 5PM</span>
            </li>
            <li className="flex justify-between text-sm">
              <span>Wednesday</span> <span>9AM - 5PM</span>
            </li>
            <li className="flex justify-between text-sm">
              <span>Thursday</span> <span>9AM - 5PM</span>
            </li>
            <li className="flex justify-between text-sm">
              <span>Friday</span> <span>9AM - 5PM</span>
            </li>
            <li className="flex justify-between text-sm">
              <span>Saturday</span> <span>1PM - 8PM</span>
            </li>
            <li className="flex justify-between text-sm">
              <span>Sunday</span> <span>10AM - 4PM</span>
            </li>
            <li className="flex  text-sm">
              <span>24+7 Emergency Care Open</span> 
            </li>
          </ul>
          <button className="w-full bg-[rgba(29,166,120,1)] text-white p-2 rounded-full font-semibold hover:bg-[#238A56] mt-4">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
