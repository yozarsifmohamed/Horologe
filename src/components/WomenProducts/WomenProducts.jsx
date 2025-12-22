import React from 'react'

import womanProduct from '../../assets/images/product_1.webp'

function WomenProducts() {
	const manProducts = [
		{ img: womanProduct, name: 'Women Watch', price: '$199'},
		{ img: womanProduct, name: 'Women Watch', price: '$199'},
		{ img: womanProduct, name: 'Women Watch', price: '$199'},
	]
	return (
		<>
			<div className='flex justify-center items-center md:flex-row flex-col gap-10 mt-40 text-center'>
				{
					manProducts.map((val, index) => (
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
		</>
	)
}

export default WomenProducts