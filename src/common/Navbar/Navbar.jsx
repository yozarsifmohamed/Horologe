import React, { useState, useContext, useEffect } from 'react'
import { CartContext } from '../../contexts/CartContext';
import logo from '../../assets/images/Logo.jpg'
import { HiMiniShoppingCart } from "react-icons/hi2";
import { RiMenu4Fill } from "react-icons/ri";
import { Link } from 'react-router-dom';

function Navbar() {
	const { cart, increaseQty, decreaseQty, removeFromCart } = useContext(CartContext)
	const [openMenu, setOpenMenu] = useState(false)
	const [openCart, setOpenCart] = useState(false)
	const closeMenu = () => {
		setOpenMenu(false)
	}
	useEffect(() => {
	const handleClickOutside = (e) => {
		if (!e.target.closest('.menu')) {
			closeMenu();
		}
	};

	if (openMenu) {
		document.addEventListener('click', handleClickOutside);
	} else {
		document.removeEventListener('click', handleClickOutside);
	}

	return () => {
		document.removeEventListener('click', handleClickOutside);
	};
}, [openMenu]); 

	
	return (
		<>
			<nav className='flex justify-around items-center shadow-md py-2 md:py-0 fixed w-full bg-white z-50'>

				<Link to="/" onClick={()=> { closeMenu(); window.scrollTo({ top: 0, behavior: 'smooth' })}}>
					<img src={logo} className='md:w-24 w-16' alt="" />
				</Link>

				<div className="menu flex items-center gap-5 md:text-2xl text-lg">

					<ul className={`md:static absolute top-[65px] left-0 md:flex gap-5 w-full md:w-auto py-1 text-center items-center justify-center overflow-hidden transition-all duration-300 bg-white  ${openMenu ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} md:max-h-none md:opacity-100 z-40`}>

						<li className='hover:text-(--primary-color) duration-300 py-1 cursor-pointer'><Link to="/" onClick={()=> { closeMenu(); window.scrollTo({ top: 0, behavior: 'smooth' })}}>HOME</Link></li>
						<li className='hover:text-(--primary-color) duration-300 py-1 cursor-pointer'><Link to="/men" onClick={()=> { closeMenu(); window.scrollTo({ top: 0, behavior: 'smooth' })}}>MEN</Link></li>
						<li className='hover:text-(--primary-color) duration-300 py-1 cursor-pointer'><Link to="/women" onClick={()=> { closeMenu(); window.scrollTo({ top: 0, behavior: 'smooth' })}}>WOMEN</Link></li>
						<li className='hover:text-(--primary-color) duration-300 py-1 cursor-pointer'><Link to="/about" onClick={()=> { closeMenu(); window.scrollTo({ top: 0, behavior: 'smooth' })}}>ABOUT US</Link></li>
						<li className='hover:text-(--primary-color) duration-300 py-1 cursor-pointer'><Link to="/contact" onClick={()=> { closeMenu(); window.scrollTo({ top: 0, behavior: 'smooth' })}}>CONTACT</Link></li>
					</ul>

					<div className="cart ml-20">
						{/* زرار السلة */}
						<button onClick={() => {
							setOpenCart(!openCart)
							setOpenMenu(false) }}>
							<HiMiniShoppingCart className='hover:text-(--primary-color) cursor-pointer duration-300'/>
						</button>

						{/* خلفية سودا تقفل السلة عند الضغط عليها */}
						{openCart && (
							<div 
								className='fixed inset-0 bg-black opacity-70 bg-opacity-50 z-40' 
								onClick={() => setOpenCart(false)}>
							</div>
						)}

						{/* صندوق السلة الجانبي */}
						<div 
							className={`fixed top-0 right-0 md:w-96 w-60 h-full bg-white shadow-lg z-50 p-5 transition-transform duration-300 
							${openCart ? 'translate-x-0' : 'translate-x-full'}`}>

						{/* محتوى مؤقت – هيتغير لما نربط الكونتكست */}
						<h2 className='text-2xl font-bold mb-5'>Your Cart</h2>
						{cart.length === 0 ? (
  						<p className='text-lg text-gray-500'>No Products in Cart!</p>
						) : (
  					<div className='flex flex-col gap-4'>
    					{cart.map(item => ( <div key={item.id} className='flex gap-3 items-center border-b pb-3'>

        				{/* صورة المنتج */}
        					<img src={item.img} className='w-16 h-16 object-cover rounded' alt={item.name}/>

        {/* الاسم + السعر + الكمية */}
        <div className='flex-1'>
          <p className='font-semibold'>{item.name}</p>
          <span className='text-sm text-gray-600'>{item.price}</span>
          
          <div className='flex items-center gap-2 mt-2'>
            <button onClick={() => decreaseQty(item.id)} className='border px-2 cursor-pointer'> - </button>
            <span>{item.quantity}</span>
            <button onClick={() => increaseQty(item.id)} className='border px-2 cursor-pointer'> + </button>
          </div>
        </div>
        <button onClick={() => removeFromCart(item.id)} className='text-red-500 font-bold cursor-pointer'> ✕ </button>
      </div>
  ))}
	</div>
)}
	</div>
</div>

					<button className='md:hidden flex cursor-pointer ' onClick={() => setOpenMenu(!openMenu)}>
						<RiMenu4Fill />
					</button>

				</div>
			</nav>
		</>
	)
}

export default Navbar