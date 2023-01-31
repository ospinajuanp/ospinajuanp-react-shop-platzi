import React, { useContext } from 'react';
import AppContext from '../context/AppContext'
import '../styles/ProductInfo.scss';

import buttonAddToCard from '@icons/bt_add_to_cart.svg';
import buttonAddedToCard from '@icons/bt_added_to_cart.svg';

const ProductInfo = () => {
	const { state, addToCart, removeFromCart } = useContext(AppContext);
	const item = state.productInfo[0]
	const handleRemove = product => {
		removeFromCart(product);
	}
	const handleAdd = product => {
		addToCart(product);
	}

	const clickCarrrito = ()=>{
		state.cart.includes(item) ? handleRemove(item):handleAdd(item)
	}

	return (
		<>
			<img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bike" />
			<div className="ProductInfo">
				<p>{item.price}</p>
				<p>{item.title}</p>
				<p>{item.description}</p>
				<button className="primary-button add-to-cart-button" onClick={clickCarrrito}>
				{state.cart.includes(item) ? <img src={buttonAddedToCard} alt="" /> : <img src={buttonAddToCard} alt="" />}
				{state.cart.includes(item) ? 'Remove to cart' : 'Add to cart'}
					
				</button>
			</div>
		</>
	);
}

export default ProductInfo;
