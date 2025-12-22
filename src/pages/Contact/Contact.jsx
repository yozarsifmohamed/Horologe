import React from 'react'

import { MdOutlineEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa6";

function Contact() {
	return (
		<>
			<div className='flex flex-col md:flex-row justify-around mt-16 g-10 px-5 md:px-0'>
				<div className='md:w-1/3 w-full'> 
					<p className='text-3xl mb-5'>CONTACT FORM</p>
					<div>
						<div className='flex flex-col justify-center text-left w-full'>
							<label htmlFor="name">Your First and Last Name:</label>
							<input type="text" id='name' className='p-2 border-2' placeholder='Enter your name' />
						</div>
						
						<div className='flex flex-col justify-center text-left w-full my-5'>
							<label htmlFor="email">Your Email:</label>
							<input type="email" id='email' className='p-2 border-2' placeholder='Enter your email' />
						</div>
					
						<div className='flex flex-col justify-center text-left w-full'>
							<label htmlFor="message">Message:</label>
							<textarea type="email" id='message' className='p-2 border-2' placeholder='Enter the content message here'></textarea>
						</div>
						<button className='w-max mt-6 py-2 px-5 border-2 bg-white text-black hover:bg-(--primary-color) flex flex-wrap hover:text-white'>Send</button>
					</div>
				</div>

				<div className='md:w-1/3 w-full mt-14 md:mt-0'>
					<p className='text-3xl mb-5'>CONTACT DETAILS</p>
					<div className='text-xl flex flex-col gap-7'>
						<div className='flex items-center gap-2.5'>
							<MdOutlineEmail className='text-5xl'/>
							<div>
								<p className='text-2xl'>Orders and sales</p>
								<p>youssef.m.hegab@gmail.com</p>
							</div>
						</div>
						<div className='flex items-center gap-2.5'>
							<FaPhone className='text-5xl'/>
							<div>
								<p className='text-2xl'>Hotline</p>
								<p>+201127936695</p>
							</div>
						</div>
						<div className='flex items-center gap-2.5'>
							<FaUsers className='text-5xl'/>
							<div>
								<p className='text-2xl'>Collaboration</p>
								<p>collaboration@contact.com</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Contact