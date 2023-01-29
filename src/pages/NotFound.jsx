import React from 'react';
import '../styles/NotFound.scss'

const NotFound = () => {
	return (
		<div className="container__notFound">
			<div className="container__notFound-content">
				<h2>404!</h2>
				<h4>Ops! Page Not Found</h4>
				<p>The Page you were looking for doesn't exist. You may have mistyped the address or the page may have moved.</p>
			</div>
		</div>
	);
}

export default NotFound;
