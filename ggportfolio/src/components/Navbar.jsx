import React, { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook, FaLink } from 'react-icons/fa';
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Logo from '../assets/micah.png';
import {Link} from 'react-scroll'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#150918] text-gray-300'>
      <div>
        <img src={Logo} alt='logo' style={{ width: '300px' }} />
      </div>

        <ul className='hidden md:flex'>
        <li>
          <Link to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>

        <li>
          <Link to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>

        <li>
          <Link to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>

        <li>
          <Link to='work' smooth={true} duration={500}>
            Work
          </Link>
        </li>

        <li>
          <Link to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* mobile menu */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#150918] flex flex-col justify-center items-center'}>
          <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='work' smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
        </ul>

      {/* social icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a className=' flex justify-between items-center w-full text-gray-300 ' href="https://www.linkedin.com/in/micah-norrington-965977240/" target="_blank">
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>

          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a className=' flex justify-between items-center w-full text-gray-300 ' href="https://github.com/manorrington" target="_blank">
              Github <FaGithub size={30} />
            </a>
          </li>

          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
            <a className=' flex justify-between items-center w-full text-gray-300 ' href="https://drive.google.com/file/d/1gKDP1iIiJAhdJ8i8C51xCocRNoi__w-x/view?usp=sharing" target="_blank">
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
      
    </div>
  );
};

export default Navbar;
