import React from 'react';
import Image from 'next/image'; 

const MentalHealthDirectory: React.FC = () => {
    return (
        <main className="bg-white p-4 md:p-8 lg:p-16 flex flex-col justify-center items-center">
            <section className="container max-w-5xl flex flex-col-reverse lg:flex-row items-center gap-8">
                {/* Left Image */}
                <div className="w-full lg:w-1/2">
                    <Image
                        src="/Home/MentalHealthDirectory.svg"
                        alt="Mental Health Directory"
                        width={500} 
                        height={500} 
                        className="w-full h-auto"
                    />
                </div>

                {/* Right Content */}
                <div className="w-full lg:w-1/2 text-left">
                    <h1 className="text-xl md:text-2xl lg:text-4xl font-bold text-[#06685F] mb-4 lg:mb-6">
                        A Comprehensive Directory For Your Mental Health
                    </h1>
                    <p className="text-[#363636] text-sm md:text-base mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    </p>
                    <div className='pb-4 lg:pb-6'>
                        <div className='border-l-4 border-[#FFBC0A] px-4 md:px-6 lg:px-10 h-fit'>
                            <p className="text-[#06685F] italic font-medium text-sm md:text-base mb-2">
                                We provide all aspects of medical practice for your whole family, including general check-ups or assisting you with specific injuries
                            </p>
                            <p className="text-[#363636] text-sm md:text-base">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            </p>
                        </div>
                    </div>

                    <ul className="space-y-2 md:space-y-3 mb-6 lg:mb-8">
                        <li className="flex items-center">
                            <svg className="w-4 h-4 md:w-5 md:h-5 text-[#FFBC0A] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span className="text-sm md:text-base">24/7 Phone counseling services for clients</span>
                        </li>
                        <li className="flex items-center">
                            <svg className="w-4 h-4 md:w-5 md:h-5 text-[#FFBC0A] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span className="text-sm md:text-base">Really know the true needs and expectations of clients</span>
                        </li>
                        <li className="flex items-center">
                            <svg className="w-4 h-4 md:w-5 md:h-5 text-[#FFBC0A] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span className="text-sm md:text-base">To assist the individual in recovering from the crisis & problems</span>
                        </li>
                    </ul>

                    <div className="text-left">
                        <button className="bg-[#FFBC0A] text-white px-6 py-2 md:px-8 md:py-3 rounded-lg text-sm md:text-lg font-semibold shadow-lg shadow-gray-300">
                            MORE ABOUT US
                        </button>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default MentalHealthDirectory;