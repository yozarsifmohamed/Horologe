import React from 'react'

import product1 from '../../assets/images/product_1.webp'
import product2 from '../../assets/images/product_2.webp'
import product3 from '../../assets/images/product_1.webp'
import product4 from '../../assets/images/product_2.webp'

function BestSellery() {
	const products = [
		{img: product1, name: 'Elegant Chrono', price: '$249'},
		{img: product2, name: 'Urban Explorer', price: '$199'},
		{img: product3, name: 'Prestige Automatic', price: '$359'},
		{img: product4, name: 'Timeless Minimal', price: '$179'}
	]
	return (
		<>
			<div className='text-center'>
				<h2 className='text-4xl my-10'>BestSallery</h2>

				<div className='flex gap-5 items-center md:justify-center justify-around flex-wrap mb-10 '>
					{
						products.map((val, index)=>(
							<div key={index} className='w-72'>
								<div className='overflow-hidden w-full h-96'>
									<img src={val.img} className='w-full h-full cursor-pointer transition-transform duration-300 hover:scale-110 mb-5 ' alt="" />
								</div>
								<p className='md:text-2xl text-lg'>{val.name}</p>
								<span className='md:text-lg text-l'>{val.price}</span>	
							</div>
						))
					}
				</div>
			</div>
		</>
	)
}

export default BestSellery