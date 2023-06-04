import React, { useContext, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

import { AiOutlineMenu } from "react-icons/ai";
import { IoIosSearch } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { FiBell } from "react-icons/fi";
import { CgClose } from "react-icons/cg";

import yt_logo_mob from '../images/yt-logo-mobile.png'
import yt_logo from '../images/yt-logo.png'

import { Context } from '../context/contextApi';
import Loader from '../shared/Loader';



const Header = () => {

  const [searchQuery, setSearchQuery] = useState("");

  const {loading, mobileMenu, setMobileMenu} = useContext(Context);

  const navigate  = useNavigate();

  const searchQueryHandler = (event) => {
    if((event?.key === "Enter" || event === "searchButton") && searchQuery?.length > 0){
      navigate(`/searchResult/${searchQuery}`);
    }
  }

  const mobileMenuToggle = () => {
    setMobileMenu(!mobileMenu)
  }

  const { pathname } = useLocation();
  const pageName = pathname?.split("/")?.filter(Boolean)?.[0]

  return (
    <div className='sticky top-0 z-10 flex flex-row items-center justify-between h-14 px-4 md:px-5 bg-white dark:bg-black'>
      {loading && <Loader></Loader>}

      <div className='flex h-5 items-center'>
        {pageName !== "video" && (
          <div className='flex md:hidden md:mr-6 cursor-pointer items-center justify-center h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]' onClick={mobileMenuToggle}>
            {mobileMenu ? (<CgClose className='text-white text-xl' />) : (<AiOutlineMenu className='text-white text-xl' />)}
          </div>
        )}
        <Link to='/' className='flex h-5 items-center'>
          <img className='h-full hidden dark:md:block' src={yt_logo} alt='Logo' />
          <img className='h-full dark:md:hidden' src={yt_logo_mob} alt='Logo' />
        </Link>
        <div className='group flex items-center'>
          <div className='flex h-8 md:h-10 md:ml-10 md:pl-5 border border-[#303030] rounded-l-3xl group-focus-within:border-blue-500 md:group-focus-within:ml-5 md:group-focus-within:pl-0'>
            <div className='w-10 items-center justify-center hidden group-focus-within:md:flex'>
              <IoIosSearch />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header