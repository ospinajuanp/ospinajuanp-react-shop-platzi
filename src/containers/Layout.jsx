import React from 'react';
import Header from '../components/Header';
import Order from '../pages/Orders'

const Layout = ({ children }) => {
	return (
		<div className="Layout">
			<Header />
			{/* <Order/> */}
			{children}


		</div>
	);
}

export default Layout;
