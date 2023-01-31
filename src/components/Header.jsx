import React, { useContext, useState } from 'react';
import '@styles/Header.scss';
import Menu from '@components/Menu.jsx'
import menu from '@icons/icon_menu.svg';
import logo from '@logos/logo_yard_sale.svg';
import AppContext from '../context/AppContext'
import shoppingCart from '@icons/icon_shopping_cart.svg';
import MyOrder from '../containers/MyOrder'

const Header = () => {
	const [ toggle, setToggle ] = useState(false);
	const [ toggleOrder, setToggleOrder ] = useState(false);

	const { state } = useContext(AppContext)

	const handleToggle = () => {
		setToggle(!toggle)
	}
	const handleToggleOrder = () => {
		setToggleOrder(!toggleOrder)
	}

	return (
		<nav>
			<img src={menu} alt="menu" className="menu" />
			<div className="navbar-left">
				<img src={logo} alt="logo" className="nav-logo" />
				<ul>
					<li>
						<a href="/">All</a>
					</li>
					<li>
						<a href="/">Clothes</a>
					</li>
					<li>
						<a href="/">Electronics</a>
					</li>
					<li>
						<a href="/">Furnitures</a>
					</li>
					<li>
						<a href="/">Toys</a>
					</li>
					<li>
						<a href="/">Others</a>
					</li>
				</ul>
			</div>
			<div className="navbar-right">
				<ul>
					<li className="navbar-email" onClick={handleToggle}>platzi@example.com</li>
					<li className="navbar-shopping-cart" onClick={handleToggleOrder}>
						<img src={shoppingCart} alt="shopping cart" />
						{state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
					</li>
				</ul>
			</div>
			{toggle && <Menu/>}
			{toggleOrder && <MyOrder/>}
		</nav>
	);
}

export default Header;
