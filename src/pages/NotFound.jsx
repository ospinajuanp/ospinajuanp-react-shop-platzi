import React from 'react';
import '../style/NotFound.scss'

const NotFound = () => {
    return (
        <div className='container__notFound'>
            <div className='container__notFound-content'>
                <h2>404</h2>
                <h4>Ops! Page not found</h4>
                <p>The page you were looking for doesn't exist. You may have mistyped the address or the page may have moved</p>
            </div>
        </div>
    );
};

export default NotFound;