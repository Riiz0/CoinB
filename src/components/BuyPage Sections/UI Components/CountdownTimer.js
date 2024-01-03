import React, { useState, useEffect } from 'react';

function CountdownTimer({ targetDate }) {
 const calculateTimeLeft = () => {
   let difference = +new Date(targetDate) - +new Date();
   let timeLeft = {};

   if (difference > 0) {
     timeLeft = {
       days: Math.floor(difference / (1000 * 60 * 60 * 24)),
       hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
       minutes: Math.floor((difference / 1000 / 60) % 60),
       seconds: Math.floor((difference / 1000) % 60),
     };
   }

   return timeLeft;
 };

 const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

 useEffect(() => {
   const timer = setTimeout(() => {
     setTimeLeft(calculateTimeLeft());
   }, 1000);
   return () => clearTimeout(timer);
 });

 return (
   <div>
     {Object.keys(timeLeft).map((interval) => {
       if (!timeLeft[interval]) {
         return null;
       }
       return (
         <span key={interval}>
           {timeLeft[interval]} {interval}{" "}
         </span>
       );
     })}
   </div>
 );
}

export default CountdownTimer;