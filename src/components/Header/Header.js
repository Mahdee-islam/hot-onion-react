import React from 'react';
import useAuth from '../../hooks/useAuth';
import logo from '../../img/logo2.png';



const Header = () => {
    const { user, logOut, } = useAuth();
    
    return (
        <div className='bg-cyan-50 text-white py-1'>
            <div className='container flex justify-between mx-auto px-4'>
                <img className='w-1/6' src= { logo } alt="" />
                <ul className='flex'>
                    <li className='px-3 py-2 text-3xl  text-cyan-700'  to = '/cart'><i className="fas fa-shopping-cart"></i></li>
                    { user.email && <li><img className="shrink-0 h-12 w-12 rounded-full my-1" src= { user.photoURL} alt="" /></li>}
                    
                    <li className='px-2' ><button onClick={logOut} className='bg-transparent hover:bg-cyan-700 text-blue-700 font-semibold hover:text-white py-2 my-1 px-4 border border-blue-500 hover:border-transparent rounded'>Log out</button></li>
                    
                </ul>
            </div>
        </div>
    );
};

export default Header;