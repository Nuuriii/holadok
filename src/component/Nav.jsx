import React from "react";

function Nav() {
   return (
      <div className='nav'>
         <div className='nav-items1'>
            <div className='anchor-container1'>
               <a className='anchor-items1' href='#'>
                  <img src='./src/assets/stetoskop.svg' alt='' />
                  <p>Holadok</p>
               </a>
            </div>
            <div className='anchor-container2'>
               <a className='home' href=''>
                  Home
               </a>
               <a href=''>Features</a>
               <a href=''>Blog</a>
               <a href=''>About Us</a>
            </div>
         </div>
         <div className='nav-items2'>
            <a href=''>Login</a>
            <a className='book-now' href=''>
               Book Now
            </a>
         </div>
      </div>
   );
}

export default Nav;
