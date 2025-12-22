import React, { useContext, useState, useEffect } from 'react'
import { CartContext } from '../../contexts/CartContext'

// import productsImg from '../../assets/images/new_collection_header.webp'
import productVid from '../../assets/videos/watch vid.mp4'
import productcard1 from '../../assets/images/buy1.jpg'
import productcard2 from '../../assets/images/buy2.jpg'
import productcard3 from '../../assets/images/buy3.jpg'
import { HiMiniShoppingCart } from "react-icons/hi2";

function Products() {
	const { addToCart } = useContext(CartContext);
	const [toast, setToast] = useState(null);

	const Productscards = [
		{id: 1, img: productcard1, name: 'The Titan Watch', price: '$150'},
		{id: 2, img: productcard2, name: 'Lumina Fleur Watch', price: '$105'},
		{id: 3, img: productcard3, name: 'VeloCity X Watch', price: '$70'},
	];

	const handleAddToCart = (product) => {
		console.log('Adding to cart:', product.name);
		addToCart(product);
		setToast({ message: `${product.name} added to cart!`, visible: true });
	};

	useEffect(() => {
		if (toast) {
			const timer = setTimeout(() => {
				setToast(null);
			}, 3000); // زودت المدة لـ 3 ثواني

			return () => clearTimeout(timer); // تنظيف الـ timer لو الـ component اتشال
		}
	}, [toast]);

	const handleCloseToast = () => setToast(prev => prev ? { ...prev, visible: false } : null);

	return (
		<>
			{/* Toast Notification */}
			{toast?.visible && (
				<div 
					className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-500 text-white px-6 py-4 rounded shadow-lg cursor-pointer md:text-2xl text-lg text-center z-50 transition-opacity duration-300'
					onClick={handleCloseToast}
				>
					✅ {toast.message}
				</div>
			)}

			<div className='flex flex-col justify-center items-center text-center'>
				<video src={productVid} className='my-16 md:h-[78vh] h-[60vh] md:w-full px-5 md:px-0 auto' alt="" controls autoPlay playsInline loop muted></video>
				<div className='w-[80%]'>
					<h2 className='text-4xl my-15'>NEW COLLECTION</h2>
					<p className='md:text-2xl text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet ipsum elit. Praesent eget laoreet nisl. Maecenas ullamcorper volutpat lacus, sit amet iaculis lectus varius id. Donec pharetra consectetur suscipit. Nam mollis feugiat est ac ullamcorper. Duis efficitur sapien justo, iaculis cursus ex vulputate nec. Aliquam erat volutpat. </p>
				</div>
			</div>

			<div className='flex gap-5 items-center md:justify-center justify-around flex-wrap my-10 text-center'>
				{Productscards.map((val)=>(
					<div key={val.id} className=''>
						<img src={val.img} className='w-72 cursor-pointer transition-transform duration-300 hover:scale-105 mb-2.5 shadow-md' alt="" />
						<div className='flex justify-between items-center px-2.5'>
							<div>
								<p className='text-lg'>{val.name}</p>
								<span className='text-l'>{val.price}</span>
							</div>
							<div>
								<HiMiniShoppingCart 
									className='text-3xl cursor-pointer' 
									onClick={()=> handleAddToCart(val)} 
								/>
							</div>
						</div>
					</div>
				))}
			</div>
		</>
	)
}

export default Products
