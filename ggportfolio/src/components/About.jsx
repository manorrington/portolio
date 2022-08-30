import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import {Link} from 'react-scroll'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#150918] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-[#4083af]'>
              About me
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. I'm Micah, nice to meet you. Please take a look around.</p>
            </div>
            <div>
              <p className='text-xl'>I am passionate about building excellent software that improves
              the lives of those around me. I specialize in creating software
              for clients ranging from individuals and small-businesses all the
              way to large enterprise corporations. What would you do if you had
              a software expert available at your fingertips?</p>  
            </div>
            <div>
            <Link to='skills' smooth={true} duration={500}>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center cursor-pointer hover:bg-[#8892b0] hover:border-[#8892b0]'>
            View Skills
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
        </Link>
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;