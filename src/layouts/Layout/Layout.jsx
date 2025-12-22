import React from 'react'
import Navbar from '../../common/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../../common/Footer/Footer'
import ScrollToTop from '../../common/ScrollToTop/ScrollToTop'

function Layout() {
	return (
		<>
			<ScrollToTop />
			<Navbar />
			<main className='pt-20'>
				<Outlet />
			</main>
			<Footer />
		</>
	)
}

export default Layout