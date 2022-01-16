import React, { useState } from 'react';
import './Banner.css';

const Banner = () => {
    /* console.log(JSONDATA); */
   const [searchText, setSearchText] = useState('');

    const handleSearchText = e => {
        const searchTextValue = e.target.value;
        setSearchText(searchTextValue);
    }

   
    return (
        <div>
           <div  className='w-1/2 sm:w-auto md:w-full lg:w-full'  style={ {
               backgroundImage: `url('https://i.ibb.co/HXsn94S/bannerbackground.png')`,
               backgroundAttachment: 'contain',
               backgroundSize: "100% 200%",
               height: '300px'
               
           }}>
              <div className=' flex py-20 justify-center '>
              <div>
               <input onChange={handleSearchText} className="w-1/2 sm:w-auto md:w-full lg:w-32 xl:w-3/4 placeholder:italic placeholder:text-gray-400 block bg-white w-md border border-gray-300 rounded-md py-2 pl-5 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" 
               placeholder="Search for anything..." type="text" name="search"/>
               </div>
              <div>
              <button className='bg-pink-500 hover:bg-blue-400 text-white font-bold py-1 px-4 border-b-4 border-pink-600 hover:border-blue-500 rounded-full' ><i className="fas fa-search"></i>
               </button>
              </div>
              </div>
           </div>
        </div>
    );
};

export default Banner;