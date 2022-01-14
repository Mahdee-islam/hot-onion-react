import React from 'react';
import useAuth from '../../hooks/useAuth';
import login from '../../img/login.png';

const Login = () => {

const {  user, signInUsingGoogle } = useAuth();

    return (
        <div className='grid gap-10 grid-cols-2 bg-orange-50 mb-4'>
            <div className='ml-16 mt-12'>
                <div className="w-full max-w-xs">
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                        Email
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="text" placeholder="Enter your email"/>
                    </div>
                    <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="***********"/>
                    <p className="text-red-500 text-xs italic">Please choose a password.</p>
                    </div>
                    <div className="flex items-center justify-between">
                    <button onClick={ signInUsingGoogle } className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mx-auto" type="button">
                        Sign In Using Google
                    </button>
                    </div>
                </form>
                <p className="text-center text-gray-500 text-xs">
                    &copy;2022 Mahdi Islam. All rights reserved.
                </p>
                </div>
            </div>
            <div>
                    <img className='w-full' src= { login } alt="" />
            </div>
        </div>
    );
};

export default Login;