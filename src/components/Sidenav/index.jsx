import React from 'react'
import './Sidenav.css'
import {AiOutlineLock} from 'react-icons/ai'
import { MdPayment } from 'react-icons/md'
import { TbLogout } from "react-icons/tb";
import {BiUserCircle} from 'react-icons/bi'
import {BsBell} from 'react-icons/bs'
import {Link} from 'react-router-dom'

const Sidenav = () =>{
    return (
        <div className='sidenav col-2 col-xl-2 col-lg-2 col-md-3 col-sm-4 col-xs-6 p-3'>
            <h2 className='sidenav-heading fw-bold'>
                Settings
            </h2>

            <Link to='/profile'>
                <p className='sidenav-link active'> <BiUserCircle/> Profile</p>
            </Link>

            <Link to='/notification'>
                <p className='sidenav-link'> <BsBell/> Notifications </p>
            </Link>
            
            <Link to='/security'>
                <p className='sidenav-link'> <AiOutlineLock/> Security</p>
            </Link>

            <Link to='/payment'>
                <p className='sidenav-link'> <MdPayment/> Payment Plan</p>
            </Link>

            <Link>
                <p className='sidenav-link'> <TbLogout/> Logout </p>
            </Link>
        </div>
    )
}

export default Sidenav;