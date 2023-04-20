import React from "react";

function Hero() {
   return (
      <div className='hero-container'>
         <div className='hero-items1'>
            <h3>Get the healthcare you need, when you need it.</h3>
            <p>
               Manage all of your healthcare needs in one convenient place –
               from booking appointments to tracking your health history.
            </p>
            <div>
               <button className='book'>Book an Appointment</button>
            </div>
         </div>
         <div className='hero-items2'>
            <img src='./src/assets/nurse.png' alt='' />
         </div>
      </div>
   );
}

export default Hero;
