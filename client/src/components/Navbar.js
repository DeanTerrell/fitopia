import React from 'react';
import {Link} from 'react-router-dom';


export const Navbar = () => {
   return (
      <nav className="navbar">
         <ul className="navbar-nav">
            <li className="logo">
               <Link to="/" className="nav-link">
                  <span className="link-text">Fitopia</span>
                  <i className="fas fa-angle-double-right"></i>
               </Link>
            </li>
            <li className="nav-item">
               <Link to="/" className="nav-link">
                  <i className="fas fa-home"></i>
                  <span className="link-text">Home</span>
               </Link>
            </li>
            <li className="nav-item">
               <Link to="/search" className="nav-link">
                  <i className="fas fa-search"></i>
                  <span className="link-text">Search</span>
               </Link>
            </li>
            <li className="nav-item">
               <Link to="/create" className="nav-link">
                  <i className="fas fa-plus"></i>
                  <span className="link-text">Create</span>
               </Link>
            </li>
            <li className="nav-item">
               <Link to="/about" className="nav-link">
                  <i className="fas fa-info"></i>
                  <span className="link-text">About</span>
               </Link>
            </li>
         </ul>
      </nav>
   )
}
