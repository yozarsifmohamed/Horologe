import React from 'react'

import him from '../../assets/images/for him.jpg'
import her from '../../assets/images/for her.jpg'

function HimAndHer() {
	return (
		<>
			<div className='bg-(--primary-color)/80 flex items-center md:flex-row flex-col justify-center gap-10 w-full h-[500px]'>
				<div className='relative group '>
					<img src={him} className='md:w-[500px] md:h-auto h-[200px] cursor-pointer transition-all duration-300 group-hover:brightness-130' alt="" />
					<p className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 md:text-5xl text-3xl text-white'>For Him</p>
				</div>

				<div className='relative group'>
					<img src={her} className='md:w-[500px] md:h-auto h-[200px] cursor-pointer transition-all duration-300 group-hover:brightness-130' alt="" />
					<p className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 md:text-5xl text-3xl text-white'>For Her</p>
				</div>
			</div>
		</>
	)
}

export default HimAndHer