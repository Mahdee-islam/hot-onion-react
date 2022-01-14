import React from 'react';
import logo from '../../img/logo2.png';


const Header = () => {
    return (
        <div className='bg-cyan-50 text-white py-2'>
            <div className='container flex justify-between mx-auto px-4'>
                <img className='w-1/6' src= { logo } alt="" />
                <ul className='flex'>
                    <li className='px-2 text-2xl'  to = '/cart'><i className="fas fa-shopping-cart"></i></li>
                    <li><img className="shrink-0 h-12 w-12 rounded-full" src= '' alt="" /></li>
                    <li className='px-2' ><button className='bg-transparent hover:bg-cyan-400 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>Log out</button></li>
                    
                </ul>
            </div>
        </div>
    );
};

export default Header;