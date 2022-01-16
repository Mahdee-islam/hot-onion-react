import React from 'react';
import Banner from '../Banner/Banner';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Menu from '../Menu/Menu';


const Home = () => {
    return (
        <div>
        <Header/>
        <Banner/>
        <Login/>
        <Menu/>
      
        </div>
    );
};

export default Home;