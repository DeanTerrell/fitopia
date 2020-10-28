import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom';

export const Home = () => {
   const [mobile, setMobile] = useState(false);

   useEffect(() => {
      window.addEventListener('resize', handleResize);

      return () => {
         window.removeEventListener('resize', handleResize);
      }
   }, [])

   const handleResize = () => {
      setMobile(window.innerWidth <= 600);
   }

   return (
      <div className="home-container">
         <div className="home-image"></div>
         <div className="home-description">
            <span>Welcome to Fitopia.</span>
         </div>
         <div className="home-buttons">
            <Link to='/create' className="home-button">Create {!mobile && "your workout"}</Link>
            <Link to='/search' className="home-button">Search {!mobile && "for workouts"}</Link>
         </div>
      </div>
   )
}
