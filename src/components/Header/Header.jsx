import React from 'react'

import banner1 from '../../assets/images/header1.jpg'
import banner2 from '../../assets/images/header2.jpg'

import { Link, Navigate, useNavigate } from 'react-router-dom'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Autoplay, EffectFade } from 'swiper/modules'
import 'swiper/css/effect-fade'
import 'swiper/css/autoplay'


function Header() {

	const navigate = useNavigate()

	const banners = [
		{ img: banner1, title: 'Stylish Watch', description: 'Discover our collection of stylish watches that combine elegance and functionality.'},
		{ img: banner2, title: 'Classic Timepieces', description: 'Explore our range of classic timepieces that never go out of style and impress everyone.'}
	]

	return (
		<>
			<header className='my-16'>
				<Swiper className='w-[80%] h-[300px] md:h-[600px] mx-auto shadow-lg'
				slidesPerView={1}
				spaceBetween={10}
				modules={[ Autoplay, EffectFade ]}
				speed={600}
				effect='fade'
				autoplay={{
				delay:5000,
				pauseOnMouseEnter:true,
				}}
				loop = {true}
				>
					{
						banners.map((val, index)=>(
							<SwiperSlide key={index} className='h-[600px] overflow-hidden shadow-lg relative'>
								<img src={val.img} className='w-full h-full' style={{ objectFit: 'cover' }} alt="" />
								<div className='w-full flex flex-col justify-center items-center gap-5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-center p-2.5'>
									<h2 className='md:text-6xl text-4xl'>{val.title}</h2>
									<p className='md:text-3xl text-lg'>{val.description}</p>
									<button onClick={()=> navigate('/products')} className='md:text-2xl text-lg mt-2.5 border-2 w-max md:py-5 md:px-10 p-2 hover:border-(--primary-color) duration-300 cursor-pointer'>BUY NOW</button>
								</div>
							</SwiperSlide>
						))
					}
				</Swiper>
			</header>
		</>
	)
}

export default Header