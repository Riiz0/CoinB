import React, { useEffect, useState } from 'react';
import logo from '../assets/logo.png'

function FastLoadingScreen({ children }) {
 const [isLoading, setLoading] = useState(true);

 useEffect(() => {
   if (!isLoading) {
     return; // Don't run the timeout if isLoading is false
   }
   
   const timeoutId = setTimeout(() => {
     setLoading(false);
   }, 375); // Change the delay as needed (in milliseconds)
   
   return () => clearTimeout(timeoutId); // Clear the timeout if the component unmounts or isLoading becomes false
 }, [isLoading]);

 if (isLoading) {
   return (
   <div className="loading-container">
     <ul className="background">
       <li></li>
       <li></li>
       <li></li>
       <li></li>
       <li></li>
       <li></li>
       <li></li>
       <li></li>
       <li></li>
       <li></li>
       <li></li>
       <li></li>
       <li></li>
       <li></li>
       <li></li>
     </ul>
     <img src={logo} alt="" className="bunny-image" />
     <p className="loading-text">Loading...</p>
   </div>
   );
 }
 return children;
}

export default FastLoadingScreen;
