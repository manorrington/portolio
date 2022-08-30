import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#150918] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/772f6603-fbf3-4c96-bf12-bde2ed208665" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#4083af] text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>// Submit the form below. I'll get back to you as soon as possible!</p>
            </div>
            <input className='bg-[#ccd6f6] p-2 placeholder:text-[#575e63] placeholder' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6] placeholder:text-[#575e63] placeholder' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2 placeholder:text-[#575e63] placeholder' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-[#8892b0] hover:border-[#8892b0] px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact