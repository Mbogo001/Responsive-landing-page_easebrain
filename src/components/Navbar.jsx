import React, { useState } from 'react'
import logo from '../assets/logo.png'
import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai'



const Navbar = () => {
  const[nav ,setNav]=useState(false)
  const toggleMenu =()=>{
    setNav(!nav)
  }
  
  return (
    
    <nav className='sticky top-0 z-50 py-3 backdrop-blur-2xl border-b border-neutral-700/80 bg'>
   
      <div className='container px-4 mx-auto relative text-sm flex justify-center items-center flex-shrink-0 bg-cover bg-center '>
            <img className='h-10 w-50 mr-2'src={logo} alt="easebrain"/>
              
               <ul className='hidden lg:flex ml-14  space-x-12 text-lime-800'>
                 <li><a href='#'>Home</a></li>
                 <li><a href='#'>Contacts</a></li>
                 <li><a href='#'>About</a></li>
                 <li><a href='#'>Services</a></li>
               </ul>
          <div className='nav-links container hidden lg:flex justify-center space-x-12 items-center px-20 '>
            <a href='#' className='py-2 px-3 border rounded-md bg-lime-400'>Sign Up</a>
            <a href='#' className='bg-gradient-to-r from-lime-500 to-lime-800 py-2 px-3 rounded-md'>Login to site</a>
          </div>
          <div onClick={toggleMenu} className='block md:hidden'>
            {!nav ?<AiOutlineClose size={20}/>:<AiOutlineMenu size={20}/>}
        </div>
   
        
       
        </div> 
        
        
   </nav>
   

  )
}

export default Navbar