import React from 'react'
import { Link } from 'react-router-dom'
import  headerLogo from "../../assets/details/amazighBack.jfif"
const PayHeader = () => {
  return (
    <header className='border-b-2 flex justify-between  items-center md:px-36 px-2'>
       <div className="logo ">
         <a href='/'>
           <img srcSet={headerLogo} alt="logo" className='w-20'/>
         </a>
       </div>
       <div className="shop ">
         <a href='/'>
           <img srcSet={headerLogo} alt="logo" className='w-20'/>
         </a>
       </div>
    </header>
  )
}

export default PayHeader
