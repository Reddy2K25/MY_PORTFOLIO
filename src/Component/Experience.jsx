import React from 'react';
import { FiCheckCircle } from 'react-icons/fi';
import javreact from "../assets/javareact.png";

const Experience = () => {
    return (
        <>
            {/* Second Section: Java Full Stack Development Internship */}
            <div className='p-10 ' id='experience'>
                <div className="flex flex-col md:flex-row justify-center gap-5 lg:gap-10 my-10 lg:my-10">
                    <div className='w-full md:w-1/4 flex justify-center lg:justify-end items-center  lg:w-1/3 p-10 md:p-5 lg:p-10'>
                        <img src={javreact} className='rounded-3xl w-[300px] hover:scale-105 transition-transform duration-300' alt="Java Full Stack" />
                    </div>
                    <div className='w-full md:w-3/4  lg:w-2/3 md:p-5 lg:p-10 max-w-3xl rounded-3xl shadow-lg'>
                        <h1 className='text-2xl md:text-3xl font-extrabold text-white'>Java Full Stack development - Internship</h1>
                        <h2 className='text-lg hidden md:block my-3 font-medium text-gray-300'>Skyllx Private limited Bangalore | Jan 2025 – Jun 2025</h2>

                        <h2 className='my-2 lg:hidden md:hidden text-lg'>Skyllx Private limited Bangalore | Jan 2025 – Jun 2025</h2>

                        {/* for large device  */}
                        <ul className='list-disc hidden lg:block mt-5 md:ml-5 space-y-3  md:pl-5'>
                            <li className='flex items-start gap-3 leading-relaxed'>
                                <div className='w-5 h-5 mt-2 flex-shrink-0'>
                                    <FiCheckCircle className="text-[#89b02d]" />
                                </div>
                                <span className='flex-grow'>
                                    Hands-on Full Stack Development: Gained experience in Java, Spring Boot, MySQL, and React.js, working on both frontend and backend development.
                                </span>
                            </li>
                            <li className='flex items-start gap-3 leading-relaxed'>
                                <div className='w-5 h-5 mt-2 flex-shrink-0'>
                                    <FiCheckCircle className="text-[#89b02d]" />
                                </div>
                                <span className='flex-grow'>
                                    Real-World Project Exposure: Participated in end-to-end development, including database management, API integration, and UI design.
                                </span>
                            </li>
                            <li className='flex items-start gap-3 leading-relaxed'>
                                <div className='w-5 h-5 mt-2 flex-shrink-0'>
                                    <FiCheckCircle className="text-[#89b02d]" />
                                </div>
                                <span className='flex-grow'>
                                    Skill Enhancement & Learning: Improved problem-solving, debugging, and performance optimization skills under industry professionals.
                                </span>
                            </li>
                            <li className='flex items-start gap-3 leading-relaxed'>
                                <div className='w-5 h-5 mt-2 flex-shrink-0'>
                                    <FiCheckCircle className="text-[#89b02d]" />
                                </div>
                                <span className='flex-grow'>
                                    Professional Development: Engaged in team collaboration, code reviews, and personality development to enhance communication and adaptability.
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
                <ul className='list-disc  lg:hidden  space-y-3  md:pl-5'>
                    <li className='flex items-center gap-3 leading-relaxed'>
                        <div className='w-5 h-5 flex-shrink-0'>
                            <FiCheckCircle className="text-[#89b02d]" />
                        </div>
                        <span className='flex-grow'>
                            Hands-on Full Stack Development: Gained experience in Java, Spring Boot, MySQL, and React.js, working on both frontend and backend development.
                        </span>
                    </li>
                    <li className='flex items-center gap-3 leading-relaxed'>
                        <div className='w-5 h-5 flex-shrink-0'>
                            <FiCheckCircle className="text-[#89b02d]" />
                        </div>
                        <span className='flex-grow'>
                            Real-World Project Exposure: Participated in end-to-end development, including database management, API integration, and UI design.
                        </span>
                    </li>
                    <li className='flex items-center gap-3 leading-relaxed'>
                        <div className='w-5 h-5 flex-shrink-0'>
                            <FiCheckCircle className="text-[#89b02d]" />
                        </div>
                        <span className='flex-grow'>
                            Skill Enhancement & Learning: Improved problem-solving, debugging, and performance optimization skills under industry professionals.
                        </span>
                    </li>
                    <li className='flex items-center gap-3 leading-relaxed'>
                        <div className='w-5 h-5 flex-shrink-0'>
                            <FiCheckCircle className="text-[#89b02d]" />
                        </div>
                        <span className='flex-grow'>
                            Professional Development: Engaged in team collaboration, code reviews, and personality development to enhance communication and adaptability.
                        </span>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Experience;
