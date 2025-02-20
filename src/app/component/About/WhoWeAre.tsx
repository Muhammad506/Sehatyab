// "use client";

// import React from "react";
// import Image from "next/image";
// import { TiTick } from "react-icons/ti";


// const WhoWeAre = () => {
//     return (
//         <main className="flex justify-center items-center py-10 bg-gray-50 px-6">
//             <div className="container max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-6 items-center relative">

//                 {/* Left Section - Image & Overlay */}
//                 <section className="relative">
//                     <Image
//                         src="/About/WhoWeAre.svg"
//                         alt="Psychiatrist with patient"
//                         width={450}
//                         height={350}
//                         className="xl:w-[full] md:w-[75%]  "
//                     />
//                     <div className="absolute flex flex-row sm:flex-row lg:flex-col gap-4 lg:bottom-20  xl:right-8 lg:right-0 md:right-4  md:top-60 -bottom-40 left-4  bg-white py-6 px-5 shadow-2xl rounded-lg border-l-8 border-[#06685F] md:w-56 w-[90%] flex-wrap transition-transform duration-500 ease-in-out hover:scale-105">
//                         <h3 className="text-lg font-bold text-gray-900">#1 Psychiatrist</h3>
//                         <p className="text-sm text-gray-600">We provide certified mental health care with excellence.</p>
//                         <hr className="md:my-8 border-[#DADADA]" />
//                         <h4 className="text-md  font-bold text-gray-900">Certified Experts</h4>
//                         <p className="text-sm text-gray-600">Top industry professionals with extensive experience.</p>
//                         <hr className="md:my-8 border-[#DADADA]" />
//                         <h4 className="text-md font-bold text-gray-900">Trusted Team</h4>
//                         <p className="text-sm text-gray-600">Compassionate and dedicated professionals ensuring quality care.</p>
//                     </div>
//                 </section>

//                 {/* Right Section - Content */}
//                 <section className="flex flex-col mt-40 md:mt-0">
//                     <h5 className="text-[#FFBC0A] font-semibold text-xs font-commissioner uppercase tracking-widest">
//                         Who We Are</h5>
//                     <h2 className="text-2xl lg:text-3xl xl::text-4xl font-bold text-[#06685F] mt-6 leading-snug">
//                         We Are Professional Psychiatrists For Any Purpose
//                     </h2>
//                     <p className="text-[#6E6E6E] mt-4 text-sm md:w-[90%] xl:w-[85%] leading-relaxed">
//                         Our expert team offers personalized treatment and expert guidance to help individuals overcome mental health challenges with compassion and care.
//                     </p>

//                     <blockquote className="border-l-4 border-[#1DA678] pl-5 text-gray-700 mt-8 text-lg">
//                         <p className="italic">
//                             Your mental health is our priority. We believe in healing through understanding and expert guidance.
//                         </p>
//                         <p className="text-[#06685F] font-bold mt-4">Dr. John Doe</p>
//                     </blockquote>

//                     <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-base text-gray-700 mt-6">
//                         <li className="flex items-center text-sm gap-2"><TiTick className="size-5 text-[#FFBC0A]" />
//                             Certified Professionals</li>
//                         <li className="flex items-center text-sm gap-2"><TiTick className="size-5 text-[#FFBC0A]" />
//                             Personalized Treatment Plans</li>
//                         <li className="flex items-center text-sm gap-2"><TiTick className="size-5 text-[#FFBC0A]" />
//                             Compassionate & Confidential Care</li>
//                         <li className="flex items-center text-sm gap-2"><TiTick className="size-5 text-[#FFBC0A]" />
//                             Trusted by Thousands Worldwide</li>
//                     </ul>

//                     <div className="mt-8 flex flex-col gap-3">
//                         <div className="flex items-center justify-between w-full bg-[#1DA678] text-white px-5 py-3 rounded-lg shadow-lg">
//                             <p className="text-sm font-medium">MENTAL SUCCESS</p>
//                             <p className="text-lg font-semibold">99%</p>
//                         </div>
//                         <div className="flex items-center justify-between w-full bg-[#1DA678] text-white px-5 py-3 rounded-lg shadow-lg">
//                             <p className="text-sm font-medium">HAPPY CLIENTS</p>
//                             <p className="text-lg font-semibold">100%</p>
//                         </div>
//                     </div>

//                     <button className="mt-10 bg-[#FFBC0A] text-white w-fit font-bold py-3 px-7 shadow-lg shadow-gray-400 hover:bg-yellow-500 transition-transform duration-500 ease-in-out transform">
//                         Book Appointment
//                     </button>
//                 </section>

//                 {/* Right Top Box Shape */}
//                 <div className="z-50 hidden sm:block">
//                     {/* Yellow Box */}
//                     <div className="absolute top-0 right-4">
//                         <div className="w-10 h-10 bg-[#FFBC0A] rounded-md"></div>
//                     </div>

//                     {/* Green Box */}
//                     <div className="absolute top-4 right-0 ">
//                         <Image
//                             src="/Home/HeroGbox.svg"
//                             alt="Greenbox"
//                             width={40}
//                             height={40}
//                         />
//                     </div>
//                 </div>
//             </div>
//         </main>
//     );
// };

// export default WhoWeAre;


"use client";

import React from "react";
import Image from "next/image";
import { TiTick } from "react-icons/ti";

const WhoWeAre = () => {
    return (
        <main className="flex justify-center items-center py-16 bg-gray-50 px-6">
            <div className="container max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative">

                {/* Left Section - Image & Overlay */}
                <section className="relative justify-center lg:justify-start flex">
                    <Image
                        src="/About/WhoWeAre.svg"
                        alt="Psychiatrist with patient"
                        width={450}
                        height={350}
                        className="w-full lg:w-[380px] xl:w-[full] max-w-[450px] object-cover "
                    />
                    <div className="absolute flex flex-col gap-4 h-fit lg:top-52  xl:right-0  md:top-60 -bottom-40 right-4 bg-white py-6 px-5 shadow-xl rounded-lg border-l-8 border-[#06685F] md:w-56 w-[90%] flex-wrap transition-transform duration-500 ease-in-out hover:scale-105">
                        <h3 className="text-lg font-bold text-gray-900">#1 Psychiatrist</h3>
                        <p className="text-sm text-gray-600">Certified mental health care with excellence.</p>
                        <hr className="border-[#DADADA]" />
                        <h4 className="text-md font-bold text-gray-900">Certified Experts</h4>
                        <p className="text-sm text-gray-600">Top industry professionals with extensive experience.</p>
                        <hr className="border-[#DADADA]" />
                        <h4 className="text-md font-bold text-gray-900">Trusted Team</h4>
                        <p className="text-sm text-gray-600">Compassionate professionals ensuring quality care.</p>
                    </div>
                </section>

                {/* Right Section - Content */}
                <section className="flex flex-col mt-40 md:mt-0">
                    <h5 className="text-[#FFBC0A] font-semibold text-xs uppercase tracking-widest">
                        Who We Are
                    </h5>
                    <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold text-[#06685F] mt-4 leading-snug ">
                        Professional Psychiatrists for Your Well-being
                    </h2>
                    <p className="text-[#6E6E6E] mt-4 text-base leading-relaxed">
                        Our expert team offers personalized treatment and guidance to help individuals overcome mental health challenges with compassion and care.
                    </p>

                    <blockquote className="border-l-4 border-[#1DA678] pl-5 text-gray-700 mt-6 text-lg italic">
                        Your mental health is our priority. Healing through understanding and expert guidance.
                        <p className="text-[#06685F] font-bold mt-3 not-italic"> Dr. John Doe</p>
                    </blockquote>

                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-base xl:text-nowrap text-gray-700 mt-6">
                        {[
                            "Certified Professionals",
                            "Personalized Treatment Plans",
                            "Confidential & Compassionate Care",
                            "Trusted by Thousands Worldwide",
                        ].map((item, index) => (
                            <li key={index} className="flex items-center gap-2">
                                <TiTick className="text-[#FFBC0A] text-lg" />
                                {item}
                            </li>
                        ))}
                    </ul>

                    {/* Statistics Section */}
                    <div className="mt-8 flex flex-col gap-3">
                        {[
                            { label: "MENTAL SUCCESS", value: "99%" },
                            { label: "HAPPY CLIENTS", value: "100%" },
                        ].map((stat, index) => (
                            <div key={index} className="flex items-center justify-between w-full bg-[#1DA678] text-white px-5 py-3 rounded-lg shadow-lg">
                                <p className="text-sm font-medium">{stat.label}</p>
                                <p className="text-lg font-semibold">{stat.value}</p>
                            </div>
                        ))}
                    </div>

                    <button className="mt-10 bg-[#FFBC0A] text-white w-fit font-bold py-3 px-7 shadow-lg hover:bg-yellow-500 transition-transform duration-300 transform hover:scale-105">
                        Book Appointment
                    </button>
                </section>
            </div>
        </main>
    );
};

export default WhoWeAre;
