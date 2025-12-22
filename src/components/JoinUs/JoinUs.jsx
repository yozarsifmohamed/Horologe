import React from 'react'

import joinus from '../../assets/images/joinus.jpg'

function JoinUs() {
	return (
		<div className='w-full flex justify-center my-20'>
			<div className='relative w-[80%]'>
				<img src={joinus} className='h-80 w-full md:h-[400px] object-cover' alt="" />

				<div className='absolute inset-0 flex flex-col md:flex-row items-center justify-around px-5 md:px-16 text-center md:text-left text-white'>
					<div className='max-w-[250px]'>
						<p className='text-5xl md:mb-5'>Join us</p>
						<span>For all new subscribers -15% on your first order</span>
					</div>

					<div className='w-full md:w-[300px]'>
						<input type="email" placeholder='Enter your email' className='bg-white text-black p-2 w-full' />
						<button className='bg-white text-black w-[30%] p-2 mt-5 hover:bg-(--primary-color) hover:text-white cursor-pointer'>SAVE</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default JoinUs