import React from 'react';

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
              <p className='text-xl'>
                I am a Full Stack Apprenticee with a highly motivated and passionate mindset for learning. 
                During the past few months, I've been developing skills in multiple languages and software embedded systems
                to increase my skill set. I'm always pushing myself and enjoy learning about new concepts. When I'm not working, 
                I spend my time reading, improving my Japanese | 日本語, or gaming.</p>  
            </div>
            <div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;