import React from 'react';
// import image from "../assets/IMG-20230526-WA0007.webp"

import poto from "../assets/new2.jpg"

const AboutMe = () => {



    return (
        <div id="About" className='py-20 lg:py-10 lg:p-10 mt-[60px]'>
            <div className='text-center my-10 lg:my-0'>
                <h1 className='text-2xl md:text-4xl lg:text-5xl mb-4'>About Me</h1>
                <p className='text-2xl md:text-4xl pb-10 lg:pb-0 lg:text-5xl text-[#89b02d]'>-----who I am ------</p>
            </div>

            <div className='flex md:p-5  max-h-[700px]  justify-center items-center gap-10 lg:gap-28 flex-col-reverse md:flex-row-reverse  mx-auto mt-20 '>
                <div data-aos="fade-up" className='text-justify md:text-left md:Jw-1/2 space-y-5 lg:w-[700px] text-xl p-4'>
                    <p className="leading-relaxed text-justify">
                        Hey there! Hello, I'm Timmareddy, a passionate Java Full Stack Developer with a strong foundation in both front-end and back-end development. Over the course of my journey, I have honed my skills in building scalable, efficient, and robust web applications using Java, Spring Boot, React.js, MySQL, and various other cutting-edge technologies.

                        I recently completed a 6-month internship at Skyllx Private Limited, where I developed and deployed Java-based web applications, optimized their performance, and worked collaboratively with cross-functional teams. I have hands-on experience with frameworks like Spring Boot and Hibernate for back-end development, as well as front-end technologies such as React.js, HTML5, CSS3, and JavaScript to build responsive and user-friendly interfaces.
                    </p>


                </div>
                <div className="">
                    <div
                        data-aos="zoom-in"
                        className="border-8 hover:translate-y-10 duration-150  p-4 border-[#89b02d] rounded-full w-80 h-80"
                    >
                        <img
                            className="rounded-full h-full object-cover  w-full"
                            src={poto}
                            alt=""
                        />
                    </div>
                </div>
            </div>



        </div>
    );
};

export default AboutMe;