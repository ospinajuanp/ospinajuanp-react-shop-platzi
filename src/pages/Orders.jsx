import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import OrderItem from '../components/OrderItem';
import '../styles/Orders.scss';

const Orders = () => {
	const date = new Date()
	const today = date.toLocaleDateString('co-CO');

	const { state } = useContext(AppContext);

	return (
		<div className="Orders">
			<div className="Orders-container">
				<h1 className="title">My orders</h1>
				<div className="Orders-content">
					<div class="order">
						<p>
							<span>{`${today}`}</span>
							<span>{state.cart.length} articles</span>
						</p>
						<p>${state.cart.map(product => { return product.price}).reduce((acumulador,valor)=>acumulador+valor,0)}</p>
					</div>
					{state.cart.map(item => <OrderItem product={item} />)}
				</div>
			</div>
		</div>
	);
}

export default Orders;
