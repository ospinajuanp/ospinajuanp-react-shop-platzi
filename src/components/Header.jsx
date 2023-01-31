import React, { useContext } from 'react';
import '@styles/Header.scss';
import Menu from '@components/Menu.jsx'
import menu from '@icons/icon_menu.svg';
import logo from '@logos/logo_yard_sale.svg';
import AppContext from '../context/AppContext'
import shoppingCart from '@icons/icon_shopping_cart.svg';
import MyOrder from '../containers/MyOrder'
import MenuMobile from '../components/MenuMobile'

const Header = () => {
	const { state, handleToggleCarrito, handleToggleAccount, handleToggleMenuMobile, useWindowSize } = useContext(AppContext);

	const handleToggleOrder = () => {
		state.account ? state.account = false : null;
		state.menuMobile ? state.menuMobile = false : null;
		handleToggleCarrito();
	};
	
	const handleToggleCuenta = () => {
		state.carrito ? state.carrito = false : null;
		state.menuMobile ? state.menuMobile = false : null;
		handleToggleAccount();
	};
	
	const handleToggleMiniMenu = () => {
		state.carrito ? state.carrito = false : null;
		state.account ? state.account = false : null;
		handleToggleMenuMobile();
	};

	const size = useWindowSize();
	
	return (
		<nav>
			<img src={menu} alt="menu" className="menu" onClick={handleToggleMiniMenu}/>
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
					<li className="navbar-email" onClick={handleToggleCuenta}>platzi@example.com</li>
					<li className="navbar-shopping-cart" onClick={handleToggleOrder}>
						<img src={shoppingCart} alt="shopping cart" />
						{state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
					</li>
				</ul>
			</div>
			{state.account && <Menu/>}
			{state.carrito && <MyOrder/>}
			{size.width < 740 ? (state.menuMobile && <MenuMobile/>) : state.menuMobile = false}
			{size.width < 740 ? state.account = false : null}
		</nav>
		
	);
}

export default Header;
