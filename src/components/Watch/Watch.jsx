import React from 'react'
import watch from '../../assets/images/golden_watch.png'

function Watch() {
	return (
		<>
			<div className='flex items-center md:flex-row justify-around md:mx-32 mx-2.5 flex-col'>
				<div className="left-sec flex flex-col md:gap-20 gap-5 w-full md:w-96 px-10">
					<div>
						<p className='border-b-2 md:text-3xl text-2xl'>MODERN</p>
						<span className='text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
					</div>
					<div>
						<p className='border-b-2 md:text-3xl text-2xl'>UNIQUE</p>
						<span className='text-lg'>Sed ac ligula dui. In tristique, tortor vel venenatis vulputate.</span>
					</div>
					<div>
						<p className='border-b-2 md:text-3xl text-2xl'>STRONG</p>
						<span className='text-lg'>Praesent a turpis ut massa imperdiet hendrerit. Nam et ligula magna.</span>
					</div>
				</div>
				<div className="mid-sec">
					<img src={watch} className='w-52 md:w-auto' alt="" />
				</div>
				<div className="right-sec flex flex-col md:gap-20 gap-5 w-full md:w-96 px-10">
					<div>
						<p className='border-b-2 md:text-3xl text-2xl'>ESTHETIC</p>
						<span className='text-lg'>Phasellus vestibulum, erat non placerat dignissim, mauris mi vehicula enim.</span>
					</div>
					<div>
						<p className='border-b-2 md:text-3xl text-2xl'>PRECIOUS</p>
						<span className='text-lg'>Donec et finibus odio. Ut vehicula nisl sed turpis tincidunt sagittis.</span>
					</div>
					<div>
						<p className='border-b-2 md:text-3xl text-2xl'>PRACTICAL</p>
						<span className='text-lg'>Pellentesque eget enim quis lorem tristique malesuada.</span>
					</div>
				</div>
			</div>
		</>
	)
}

export default Watch