import React from 'react'
import Header from '../../components/Header/Header'
import Watch from '../../components/Watch/Watch'
import News from '../../components/News/News'
import HimAndHer from '../../components/HimAndHer/HimAndHer'
import BestSellery from '../../components/BestSellery/BestSellery'
import JoinUs from '../../components/JoinUs/JoinUs'
function Home() {
	return (
		<>
			<Header />
			<Watch />
			<News />
			<HimAndHer />
			<BestSellery />
			<JoinUs />
		</>
	)
}

export default Home