import React from 'react'

import aboutImg from '../../assets/images/about-us_header.webp'

function AboutusHeader() {
	return (
		<>
			<div className='flex flex-col justify-center items-center text-center'>
				<img src={aboutImg} className='my-16 md:h-[80vh] md:w-[70%] px-5 md:px-0' alt="" />
				<div className='w-[80%]'>
					<h2 className='text-4xl my-15'>ABOUT US</h2>
					<p className='md:text-2xl text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia ac leo et rutrum. Maecenas vitae feugiat risus. Fusce sagittis eget leo a mollis. Suspendisse potenti. Suspendisse a tincidunt mi, et tempor felis. Nam feugiat dictum nisi, et consequat odio pharetra ac. Etiam dignissim accumsan eleifend. Nunc a sagittis quam, sed tincidunt odio. Sed eleifend metus odio, non faucibus nisl semper in. Aenean ultrices justo eros, id tempor quam mattis molestie. Nulla commodo, est facilisis pharetra sagittis, ante leo scelerisque est, nec tincidunt risus libero nec eros. Aliquam vitae elit molestie, aliquam ante eget, interdum neque. Aliquam vel nunc ex. Nam nec consequat purus. Donec felis nunc, laoreet eu turpis eget, tincidunt aliquet urna.</p>
				</div>
			</div>
		</>
	)
}

export default AboutusHeader