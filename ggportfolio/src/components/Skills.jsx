import React from 'react';
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import AWS from '../assets/aws.png';
import MySQL from '../assets/BRUHH.png';
import Mongo from '../assets/mongo.png';
import { HiArrowNarrowRight } from 'react-icons/hi';
import {Link} from 'react-scroll'

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#150918] text-gray-300'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div>
              <p className='text-4xl font-bold inline border-b-4 border-[#4083af] '>Skills</p>
              <p className='py-4'>// These are the technologies I've worked with</p>
          </div>

          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
              <div className='shadow-md shadow-[#040c16] bg-[#220e27] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                  <p className='my-4'>HTML</p>
              </div>

              <div className='shadow-md shadow-[#040c16] bg-[#220e27] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={CSS} alt="HTML icon" />
                  <p className='my-4'>CSS</p>
              </div>

              <div className='shadow-md shadow-[#040c16] bg-[#220e27] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={JavaScript} alt="HTML icon" />
                  <p className='my-4'>JAVASCRIPT</p>
              </div>

              <div className='shadow-md shadow-[#040c16] bg-[#220e27] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={ReactImg} alt="HTML icon" />
                  <p className='my-4'>REACT</p>
              </div>

              <div className='shadow-md shadow-[#040c16] bg-[#220e27] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={MySQL} alt="HTML icon" />
                  <p className='my-4'>My SQL</p>
              </div>

              <div className='shadow-md shadow-[#040c16] bg-[#220e27] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Node} alt="HTML icon" />
                  <p className='my-4'>NODE JS</p>
              </div>

              <div className='shadow-md shadow-[#040c16] bg-[#220e27] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Mongo} alt="HTML icon" />
                  <p className='my-4'>MONGO DB</p>
              </div>
              
              <div className='shadow-md shadow-[#040c16] bg-[#220e27] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={AWS} alt="HTML icon" />
                  <p className='my-4'>AWS</p>
              </div>
              <Link to='work' smooth={true} duration={500}>
          <button className='text-white group border-2 px-6 py-3 my-1 flex items-center cursor-pointer hover:bg-[#8892b0] hover:border-[#8892b0]'>
            View Projects
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

export default Skills;