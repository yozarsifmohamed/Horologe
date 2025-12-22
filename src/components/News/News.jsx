import React from 'react'

import card1 from '../../assets/images/card.webp'
import card2 from '../../assets/images/card.webp'
import card3 from '../../assets/images/card.webp'

function News() {
	const cards = [
		{img: card1, name: 'Stylish Watch', price: '$199'},
		{img: card2, name: 'Stylish Watch', price: '$199'},
		{img: card3, name: 'Stylish Watch', price: '$199'}
	]
	return (
		<>
			<div className='text-center'>
				<h2 className='text-4xl my-10'>News</h2>

				<div className='flex gap-5 items-center md:justify-center justify-around flex-wrap mb-10'>
					{
						cards.map((val, index)=>(
							<div key={index} className=''>
								<img src={val.img} className='w-72 cursor-pointer transition-transform duration-300 hover:scale-105 mb-5' alt="" />
								<div>
									<p className='md:text-2xl text-lg'>{val.name}</p>
									<span className='md:text-lg text-l'>{val.price}</span>
								</div>
							</div>
						))
					}
				</div>
			</div>
		</>
	)
}

export default News