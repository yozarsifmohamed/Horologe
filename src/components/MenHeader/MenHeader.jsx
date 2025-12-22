import React from 'react'

import manImg from '../../assets/images/man_header_newsletteer.webp'

function MenHeader() {
	return (
		<>
			<div className='flex flex-col justify-center items-center text-center'>
				<img src={manImg} className='my-16 md:h-[80vh] md:w-[70%] px-5 md:px-0' alt="" />
				<div className='w-[80%]'>
					<h2 className='text-4xl my-15'>MAN</h2>
					<p className='text-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, est impedit. Esse, cumque ipsam necessitatibus animi et quae ratione assumenda iusto enim, veniam nam corporis ipsa quibusdam suscipit expedita quas!</p>
				</div>
			</div>
		</>
	)
}

export default MenHeader