import React from 'react'

import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import { Link } from 'react-router-dom';

function Footer() {
	return (
		<>
			<footer className='mt-10'>
				<div className="upper bg-[#e3d7d5] flex flex-col md:flex-row md:justify-between flex-wrap gap-10 py-10 text-2xl text-center px-20">
					<div className="first ">
						<p className='mb-2.5'>GET IN TOUCH</p>
						<div className="first-info flex flex-col items-center text-lg">
							<p>mon-fri 09:00 - 18:00</p>
							<a href="tel:+201127936695">01127936695</a>
							<a href="mailto:youssef.m.hegab@gmail.com">youssef.m.hegab@gmail.com</a>
						</div>
					</div>

					<div className="second">
						<p className='mb-2.5'>CUSTOMER SERVICE</p>
						<div className="second-info flex flex-col items-center text-lg">
							<Link to="/customer-service">Delivery</Link>
							<Link to="/customer-service">Return policy</Link>
						</div>
					</div>

					<div className="third">
						<p className='mb-2.5'>ABOUT COMPANY</p>
						<div className="third-info flex flex-col items-center text-lg">
							<Link to="/about">About us</Link>
							<Link to="/contact">Contact</Link>
						</div>
					</div>

					<div className="fourth">
						<p className='mb-2.5'>FOLLOW US</p>
						<div className="fourth-info flex justify-center gap-2.5 text-2xl">
							<a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
							<a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
							<a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer"><TfiYoutube /></a>
						</div>
					</div>
				</div>

				<div className="down bg-[#615e5d] text-center text-lg py-2.5 px-1.5">
					<p>© 2025 — Created & Developed by <span className='text-(--primary-color)'>Youssef Mohamed</span>. All services served.</p>
				</div>
			</footer>
		</>
	)
}

export default Footer