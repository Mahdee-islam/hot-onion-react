import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Menu = () => {

const { user } = useAuth();

    return (
        <div>
            <div className='flex items-center justify-center gap-6'> 
            <div>
            <NavLink style={({ isActive }) => {
              return {
                display: "block",
                margin: "1rem 0",
                borderBottom: isActive? "1px solid red" : "",
                color: isActive ? `red` : ""
              };
            }} to="/breakfast">Breakfast</NavLink>
            </div>
           <div>
           <NavLink style={({ isActive }) => {
              return {
                display: "block",
                margin: "1rem 0",
                borderBottom: isActive? "1px solid red" : "",
                color: isActive ? "red" : ""
              };
            }} to="/lunch">Lunch</NavLink>
           </div>
           <div>
           <NavLink style={({ isActive }) => {
              return {
                display: "block",
                margin: "1rem 0",
                borderBottom: isActive? "1px solid red" : "",
                color: isActive ? "red" : ""
              };
            }} to="/dinner">Dinner</NavLink>
            </div>
           </div>
        </div>
    );
};

export default Menu;