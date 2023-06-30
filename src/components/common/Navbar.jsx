import React, { useEffect } from 'react'
import logo from "../../assets/Logo/logo.png"
import { Link, matchPath } from 'react-router-dom'
import {NavbarLinks} from "../../data/navbar-links"
import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import {AiOutlineShoppingCart} from "react-icons/ai"
import ProfileDropDown from '../core/Auth/ProfileDropDown'
import { apiConnector } from '../../services/apiconnector'
import { useState } from 'react'
import ReactRoundedImage from "react-rounded-image"



const Navbar = () => {
    console.log("Printing base url: ",process.env.REACT_APP_BASE_URL);
    const {token} = useSelector( (state) => state.auth );
    const {user} = useSelector( (state) => state.profile );
    const {totalItems} = useSelector( (state) => state.cart )
    const location = useLocation();


    useEffect( () => {
        console.log("PRINTING TOKEN", token);
        // fetchSublinks();
    },[] )



    const matchRoute = (route) => {
        return matchPath({path:route}, location.pathname);
    }

  return (
    <div className='flex h-14 items-center justify-center border-b-[1px] border-b-richblack-700'>
      <div className='flex w-11/12 max-w-maxContent items-center justify-between'>
        {/* Image */}
      <Link to="/">
      <ReactRoundedImage
          image={logo}
          imageWidth="60"
          imageHeight="60"
          roundedSize="10"
          borderRadius="70"
        />
        {/* <img src={logo} borderRadius={150/2} width={70} height={40} loading='lazy'/> */}
      </Link>

      {/* Nav Links */}
      <nav>
        <ul className='flex gap-x-6 text-richblack-25'>
        {
            NavbarLinks.map( (link, index) => (
                 <li key={index}>
                    {                            
                    <Link to={link?.path}>
                        <p className={`${ matchRoute(link?.path) ? "text-yellow-25" : "text-richblack-25"}`}>
                        {link.title}
                        </p>
                                
                    </Link>
                    }
                </li>
             ) )
        }

        </ul>
      </nav>


        {/* Login/SignUp/Dashboard */}
        <div className='flex gap-x-4 items-center'>

            {
                user && user?.accountType != "Admin" && (
                    <Link to="/dashboard/cart" className='relative'>
                        <AiOutlineShoppingCart />
                        {
                            totalItems > 0 && (
                                <span>
                                    {totalItems}
                                </span>
                            )
                        }
                    </Link>
                )
            }
            {
                token === null && (
                    <Link to="/login">
                        <button className='border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100 rounded-md'>
                            Log in
                        </button>
                    </Link>
                )
            }
            {
                token === null && (
                    <Link to="/signup">
                        <button  className='border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100 rounded-md'>
                            Sign Up
                        </button>
                    </Link>
                )
            }
            {
                token !== null && <ProfileDropDown />
            }
            
        </div>


      </div>
    </div>
  )
}

export default Navbar
