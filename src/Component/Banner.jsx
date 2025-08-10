import React, { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { FaStar } from "react-icons/fa6";
import pdf from "../assets/JAVA_FULLSTACK_DEVELOPER.pdf"

import "./banner.css";
import new2 from "../assets/new1.jpg"

const Banner = () => {
  const [isPreparing, setIsPreparing] = useState(false); // Loading state

  const handleDownload = () => {
    setIsPreparing(true); // Set loading state
    // Simulate a small delay for "preparing" (optional)
    setTimeout(() => {
      const link = document.createElement("a");
      link.href = pdf;
      link.download = "JAVA_FULLSTACK_DEVELOPER.pdf";
      link.click();
      setIsPreparing(false); // Reset loading state
    }, 1000); // Adjust delay as needed
  };

  return (
    <div id="home">
      <div className="w-full bg-transparent p-5 h-screen max-h-[700px] flex flex-col-reverse md:flex-row items-center justify-center gap-28 md:gap-20">
        <div className="md:w-1/2 space-y-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            HI, I'M TIMMAREDDY!
          </h1>

          <TypeAnimation
            sequence={[
              "Java Fullstack Developer",
              2000,
              " Frontend Developer",
              1000,
              " Backend Developer",
              1000,


              () => {
                console.log("Sequence completed");
              },
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            className="text-3xl md:text-4xl lg:text-5xl text-[#89b02d] block line"
          />
          <p className="text-justify pb-5 ">
            I'm a passionate Java Full Stack Developer with expertise in Java, Spring Boot, Hibernate, React, MySQL, and front-end technologies like HTML, CSS, and JavaScript. I love building scalable, efficient, and high-performing web applications. With a strong understanding of both front-end and back-end development, I create seamless, responsive, and user-centric solutions.
            With a focus on clean code, optimized performance, and user experience, I am dedicated to delivering robust and efficient web applications. I enjoy solving complex challenges and continuously learning new technologies to enhance my skill set.          </p>
          <button
            onClick={handleDownload}
            data-aos="zoom-in"
            className="relative btn mt-5 btn-outline text-[#89b02d] hover:bg-[#89b02d] hover:text-black border-2 border-[#89b02d] overflow-hidden"
          >
            {isPreparing ? "Preparing to download..." : "Download Resume"}

            {/* Animated border */}
            <span className="absolute inset-0 border-2 border-pink-500 
    animate-[border-rotate_3s_linear_infinite]"></span>

            {/* Shine effect */}
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-pink-500/30 to-transparent 
    animate-[shine_2s_infinite]"></span>
          </button>

          {/* Global CSS for animations */}
          <style jsx>{`
  @keyframes border-rotate {
    0% { 
      clip-path: inset(0 0 0 0);
    }
    25% { 
      clip-path: inset(0 0 0 100%);
    }
    50% { 
      clip-path: inset(100% 0 0 0);
    }
    75% { 
      clip-path: inset(0 100% 0 0);
    }
    100% { 
      clip-path: inset(0 0 0 0);
    }
  }

  @keyframes shine {
    0% { 
      transform: translateX(-100%);
    }
    100% { 
      transform: translateX(100%);
    }
  }
`}</style>
        </div>
        <div className="mt-[143px] lg:mt-0">
          <div
            data-aos="zoom-in"
            className="border-8 hover:translate-y-10 duration-150 p-4 border-[#89b02d] rounded-full w-80 h-80"
          >
            <img
              className="rounded-[100%]  object-cover h-full w-full"
              src={new2}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
