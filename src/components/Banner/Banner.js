import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div>
           <div  style={ {
               backgroundImage: `url('https://i.ibb.co/HXsn94S/bannerbackground.png')`,
               backgroundAttachment: 'contain',
               backgroundSize: "100% 100%"
           }}>
              <div className='w-1/4 flex  mx-auto py-20'>
              <div>
               <input className="placeholder:italic placeholder:text-gray-400 block bg-white w-full border border-gray-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" 
               
               placeholder="Search for anything..." type="text" name="search"/>
               </div>
               <button className='bg-pink-500 hover:bg-blue-400 text-white font-bold py-1 px-4 mx-2 border-b-4 border-pink-600 hover:border-blue-500 rounded-full' ><i className="fas fa-search"></i></button>
              </div>
           </div>
        </div>
    );
};

export default Banner;