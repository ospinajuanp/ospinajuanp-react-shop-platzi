import React from 'react';
import '../style/global.css'
import Layout from '../containers/Layout';
import Login from '../containers/Login';



const App = () => {
    return (
        <Layout>
            <Login></Login>
        </Layout>
    );
};

export default App;