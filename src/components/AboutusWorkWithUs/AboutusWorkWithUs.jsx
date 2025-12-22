import React from 'react'

function AboutusWorkWithUs() {
	return (
		<>
			<div className='flex flex-col justify-center items-center text-center'>
				<h2 className='text-4xl my-15'>WORK WITH US</h2>
				<p className='md:text-2xl text-lg w-1/2 mb-10'>If you are interested in working with us, please fill out the form below and we will get back to you as soon as possible.</p>

				<div className='md:w-1/4 w-[70%] flex flex-col gap-5 items-center'>
					<div className='flex flex-col justify-center text-left w-full'>
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
		</>
	)
}

export default AboutusWorkWithUs