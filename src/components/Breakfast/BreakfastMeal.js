import React from 'react';
import { Link } from 'react-router-dom';

const BreakfastMeal = ( { meal } ) => {
    const { img, name, des, price, id } = meal;
    return (
        <div>
            <div className="max-w-sm rounded overflow-hidden shadow-lg my-6 mx-6">
                <img className="mx-auto w-1/2" src= { img } alt='img' />
                  <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2"> { name } </div>
                    <p className="text-gray-700 text-base">
                      { des }
                    </p>
                    <p className='text-rose-600 text-xl mt-2'> ${ price } </p>
                  </div>
                <div className="px-6 pt-4 pb-2 mb-2">
                  <Link to= {`/booking/${id}`} className='bg-gradient-to-r from-sky-500 to-indigo-500 hover:bg-sky-700 text-white font-bold  py-2 px-4 rounded-full'>Order</Link>
                </div>
              </div>
        </div>
    );
};

export default BreakfastMeal;