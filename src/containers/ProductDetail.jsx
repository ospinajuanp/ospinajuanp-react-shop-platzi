import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import ProductInfo from '../components/ProductInfo';
import '../styles/ProductDetail.scss';

import close from '@icons/icon_close.png';

const ProductDetail = () => {
	const { desactiveProductInfo } = useContext(AppContext);
	const handleClose = () => {
		desactiveProductInfo()
	}
	return (
		<aside className="ProductDetail">
			<div className="ProductDetail-close"  onClick={handleClose}>
				<img src={close} alt="close" />
			</div>
			<ProductInfo />
		</aside>
	);
}

export default ProductDetail;
