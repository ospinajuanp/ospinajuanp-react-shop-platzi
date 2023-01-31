import { useState, useEffect } from "react";

const initialState = {
	cart: [],
	carrito:false,
	account:false,
	menuMobile:false,
}

const useInitialState = () => {
	const [state, setState] = useState(initialState);

	const addToCart = (payload) => {
		setState({
			...state,
			cart: [...state.cart, payload]
		});
	};

	const removeFromCart = (payload) => {
		setState({
			...state,
			cart: state.cart.filter(items => items.id !== payload.id),
		});
	};

	const handleToggleCarrito = () => {
		setState({
			...state,
			carrito: !state.carrito
		});
	};

	const handleToggleAccount = () => {
		setState({
			...state,
			account: !state.account
		});
	};

	const handleToggleMenuMobile = () => {
		setState({
			...state,
			menuMobile: !state.menuMobile
		});
	};


	const useWindowSize = () => {
		
		const [windowSize, setWindowSize] = useState({
			width: undefined,
		});
	
		useEffect(() => {
			// only execute all the code below in client side
			if (typeof window !== "undefined") {
				// Handler to call on window resize
				function handleResize() {
					// Set window width to state
					setWindowSize({
						width: window.innerWidth
					});
				}
	
				// Add event listener
				window.addEventListener("resize", handleResize);
	
				// Call handler right away so state gets updated with initial window size
				handleResize();
	
				// Remove event listener on cleanup
				return () => window.removeEventListener("resize", handleResize);
			}
		}, []); // Empty array ensures that effect is only run on mount
		return windowSize;
	};


	return {
		state,
		addToCart,
		removeFromCart,
		handleToggleCarrito,
		handleToggleAccount,
		handleToggleMenuMobile,
		useWindowSize
	}
}

export default useInitialState;