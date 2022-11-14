import React from 'react'
import "./NavBar.css"
import heartimg from '../../Assets/heart.png'
import WidthSpecific from './../Width75em/WidthSpecific';

const NavBar = () => {
  return (
    <>
      <WidthSpecific>
        <header className="text-gray-600 body-font  m-8 z-50 bg-[#fff] rounded ">
          <div className="container mx-auto flex flex-wrap p-5  md:flex-row items-center nav-flex-in-media">
            <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-gray-400	flex flex-wrap items-center text-base ">
              <a className="mr-5 hover:text-gray-900 cursor-pointer ">Home</a>
              <div className="nav-bar-component">
                <a className="mr-5 hover:text-gray-900 cursor-pointer ">Shop</a>
              </div>
              <div className="nav-bar-component">
                <a className="mr-5 hover:text-gray-900 cursor-pointer ">Blog</a>
              </div>
              <div className="nav-bar-component">
                <a className="mr-5 hover:text-gray-900 cursor-pointer ">Page</a>
              </div>
              <div className="nav-bar-component">
                <a className="mr-5 hover:text-gray-900 cursor-pointer ">Elements</a>
              </div>
              <div className="nav-bar-component">
                <a className="mr-5 hover:text-gray-900 cursor-pointer ">Buy</a>
              </div>


            </nav>

            <a className="mr-5 hover:text-gray-900 cursor-pointer login-class-for-media ">Login/Register</a>
            <div className='nav-bar-component flex'>
              <a className="mr-5 hover:text-gray-900 cursor-pointer ">
                {/* <img src={heartimg} alt="" className="h-4" /> */}
              </a>
            </div>

          </div>
        </header>

      </WidthSpecific>

    </>
  )
}

export default NavBar
