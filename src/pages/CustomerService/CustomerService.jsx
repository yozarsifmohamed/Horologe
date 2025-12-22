import React from 'react'

import customerImg from '../../assets/images/FAQ_header.webp'

function CustomerService() {
	return (
		<>
			<div className='flex flex-col justify-center items-center text-center'>
				<img src={customerImg} className='my-16 md:h-[80vh] md:w-[70%] px-5 md:px-0' alt="" />
				<div className='w-[80%]'>
					<h2 className='text-4xl my-15'>CUSTOMER SERVICE</h2>
					{/* <p className='text-lg mb-10'>At Horologe, we are committed to providing exceptional customer service. If you have any questions or need assistance, please don't hesitate to reach out to our dedicated support team. We are here to help you with your inquiries, orders, and any concerns you may have. Your satisfaction is our top priority, and we strive to ensure that your experience with us is smooth and enjoyable. Thank you for choosing Horologe!</p>
				</div> */}
					<div className='flex items-center justify-center md:gap-20 gap-5 flex-wrap text-2xl mb-20'>
						<p className='w-60 h-12 flex items-center justify-center border text-center'>DELIVERY</p>
						<p className='w-60 h-12 flex items-center justify-center border text-center'>RETURNS POLICY</p>
						<p className='w-60 h-12 flex items-center justify-center border text-center'>WARRANTY</p>
						<p className='w-60 h-12 flex items-center justify-center border text-center'>FAQ</p>
					</div>
				</div>

				<div className='w-[80%] flex flex-col gap-10 mb-20 text-lg text-left'>
					<div className='border-b-2 pb-5'>
						<p className='text-3xl my-5'>DELIVERY</p>
						<span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet ipsum elit. Praesent eget laoreet nisl. Maecenas ullamcorper volutpat lacus, sit amet iaculis lectus varius id. Donec pharetra consectetur suscipit. Nam mollis feugiat est ac ullamcorper. Duis efficitur sapien justo, iaculis cursus ex vulputate nec. Aliquam erat volutpat. Donec bibendum nisl et felis fringilla pretium. Fusce vitae facilisis ante. Suspendisse rutrum eu ipsum et convallis. Vivamus eget elementum ipsum. Phasellus orci mauris, suscipit id ullamcorper a, sollicitudin ut turpis. Quisque pellentesque, risus eu aliquam ullamcorper, justo eros vulputate tortor, et varius nibh dui sit amet libero. Suspendisse quis est quis libero facilisis vehicula non a eros. Morbi libero justo, dictum non quam quis, pharetra porta risus.</span>
					</div>
					<div className='border-b-2 pb-5'>
						<p className='text-3xl my-5'>RETURNS POLICY</p>
						<span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet ipsum elit. Praesent eget laoreet nisl. Maecenas ullamcorper volutpat lacus, sit amet iaculis lectus varius id. Donec pharetra consectetur suscipit. Nam mollis feugiat est ac ullamcorper. Duis efficitur sapien justo, iaculis cursus ex vulputate nec. Aliquam erat volutpat. Donec bibendum nisl et felis fringilla pretium. Fusce vitae facilisis ante. Suspendisse rutrum eu ipsum et convallis. Vivamus eget elementum ipsum. Phasellus orci mauris, suscipit id ullamcorper a, sollicitudin ut turpis. Quisque pellentesque, risus eu aliquam ullamcorper, justo eros vulputate tortor, et varius nibh dui sit amet libero. Suspendisse quis est quis libero facilisis vehicula non a eros. Morbi libero justo, dictum non quam quis, pharetra porta risus.</span>
					</div>
					<div className='border-b-2 pb-5'>
						<p className='text-3xl my-5'>WARRANTY</p>
						<span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet ipsum elit. Praesent eget laoreet nisl. Maecenas ullamcorper volutpat lacus, sit amet iaculis lectus varius id. Donec pharetra consectetur suscipit. Nam mollis feugiat est ac ullamcorper. Duis efficitur sapien justo, iaculis cursus ex vulputate nec. Aliquam erat volutpat. Donec bibendum nisl et felis fringilla pretium. Fusce vitae facilisis ante. Suspendisse rutrum eu ipsum et convallis. Vivamus eget elementum ipsum. Phasellus orci mauris, suscipit id ullamcorper a, sollicitudin ut turpis. Quisque pellentesque, risus eu aliquam ullamcorper, justo eros vulputate tortor, et varius nibh dui sit amet libero. Suspendisse quis est quis libero facilisis vehicula non a eros. Morbi libero justo, dictum non quam quis, pharetra porta risus.</span>
					</div>
					<div className=''>
						<p className='text-3xl my-5'>FAQ</p>
						<span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet ipsum elit. Praesent eget laoreet nisl. Maecenas ullamcorper volutpat lacus, sit amet iaculis lectus varius id. Donec pharetra consectetur suscipit. Nam mollis feugiat est ac ullamcorper. Duis efficitur sapien justo, iaculis cursus ex vulputate nec. Aliquam erat volutpat. Donec bibendum nisl et felis fringilla pretium. Fusce vitae facilisis ante. Suspendisse rutrum eu ipsum et convallis. Vivamus eget elementum ipsum. Phasellus orci mauris, suscipit id ullamcorper a, sollicitudin ut turpis. Quisque pellentesque, risus eu aliquam ullamcorper, justo eros vulputate tortor, et varius nibh dui sit amet libero. Suspendisse quis est quis libero facilisis vehicula non a eros. Morbi libero justo, dictum non quam quis, pharetra porta risus.</span>
					</div>
				</div>
			</div>
		</>
	)
}

export default CustomerService