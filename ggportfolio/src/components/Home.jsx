import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import {Link} from 'react-scroll'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#150918]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-[#8ea2e4]'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          Micah Norrington
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
          Aspiring Full Stack Developer
        </h2>
        <p className='text-[#8892b0] py-5 max-w-[700px] text-xl'>
          I’m a full-stack developer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building responsive full-stack web applications.
        </p>
        <div>
        <Link to='about' smooth={true} duration={500}>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center cursor-pointer hover:bg-[#8892b0] hover:border-[#8892b0]'>
            About Me
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;