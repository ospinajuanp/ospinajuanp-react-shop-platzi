import React, { useContext } from 'react';
import AppContext from '../context/AppContext'

import '../styles/ProductItem.scss';

import buttonAddToCard from '@icons/bt_add_to_cart.svg';
import buttonAddedToCard from '@icons/bt_added_to_cart.svg';

const ProductItem = ({ product }) => {
	

	const { state, addToCart, addToProductInfo } = useContext(AppContext);

	const handleClick = item => {
		!state.cart.includes(product) ? addToCart(item) : null
	}
	const handleViewClick = item => {
		addToProductInfo(item)
	}
	
	return (
		<div className="ProductItem">
			<img src={ product.images[0] } alt={product.title}  onClick={() => handleViewClick(product)} className='click-pointer'/>
			<div className="product-info click-pointer">
				<div  onClick={() => handleViewClick(product)}>
					<p>{product.title}</p>
					<p>${product.price}</p>
				</div>
				<figure onClick={ () => handleClick(product)}>
					{state.cart.includes(product) ? <img src={buttonAddedToCard} alt="" /> : <img src={buttonAddToCard} alt="" />}
				</figure>
			</div>
		</div>
	);
}

export default ProductItem;
