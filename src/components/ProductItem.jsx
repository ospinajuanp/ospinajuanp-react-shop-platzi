import React, { useContext } from 'react';
import AppContexts from '../context/AppContext'

import '../styles/ProductItem.scss';

import buttonAddToCard from '@icons/bt_add_to_cart.svg';

const ProductItem = ({ product }) => {
	
	const { addToCart } = useContext(AppContexts);

	const handleClick = item => {
		addToCart(item)
	}

	return (
		<div className="ProductItem">
			<img src={ product.images[0] } alt={product.title} />
			<div className="product-info">
				<div>
					<p>${product.price}</p>
					<p>{product.title}</p>
				</div>
				<figure onClick={ () => handleClick(product)}>
					<img src={buttonAddToCard} alt="" />
				</figure>
			</div>
		</div>
	);
}

export default ProductItem;
