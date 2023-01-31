import React, { useContext } from 'react';
import OrderItem from '../components/OrderItem';
import AppContext from '../context/AppContext';
import '../styles/MyOrder.scss';

import flecha from '@icons/flechita.svg'

const MyOrder = () => {
	const { state, handleToggleCarrito } = useContext(AppContext);

	const handleToggleOrder = () => {
		handleToggleCarrito()
	}

	return (
		<aside className="MyOrder">
			<div className="title-container" onClick={handleToggleOrder}>
				<img src={flecha} alt="arrow" />
				<div className="title"> My order </div>
			</div>
			<div className="my-order-content">
				<div className='my-order-content-list'>
					{state.cart.map(product => {
						return <OrderItem product={product} key={`orderItem-${product.id}`}/>
					})}
				</div>
				<div className='my-order-content-btn-space'></div>
				<div className='my-order-content-btn'>
					<div className="order">
						<p>
							<span>Total</span>
						</p>
						<p>${state.cart.map(product => { return product.price}).reduce((acumulador,valor)=>acumulador+valor,0)}</p>
					</div>
					<button className="primary-button">
						Checkout
					</button>
				</div>
			</div>
		</aside>
	);
}

export default MyOrder;
