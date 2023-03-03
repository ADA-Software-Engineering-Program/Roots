import React from 'react'
import './Sidenav.css'
import {AiOutlineLock} from 'react-icons/ai'
import { MdPayment } from 'react-icons/md'
import { TbLogout } from "react-icons/tb";
import {BiUserCircle} from 'react-icons/bi'
import {BsBell} from 'react-icons/bs'
import {Link} from 'react-router-dom'

const Sidenav = ({active, setActive}) =>{
    return (
        <div className='sidenav col-4 col-xl-2 col-lg-2 col-md-3 col-sm-4 col-xs-6 p-3'>
            <h2 className='sidenav-heading fw-bold'>
                Settings
            </h2>

            <Link to='/profile'>
                <p className={`sidenav-link ${active === 'profile' && 'active'}`} onClick={() => setActive('profile')}> <BiUserCircle/> Profile</p>
            </Link>

            <Link to='/notification'>
                <p className={`sidenav-link ${active === 'notification' && 'active'}`} onClick={() => setActive('notification')}> <BsBell/> Notifications </p>
            </Link>
            
            <Link to='/security'>
                <p className={`sidenav-link ${active === 'security' && 'active'}`} onClick={() => setActive('security')}> <AiOutlineLock/> Security</p>
            </Link>

            <Link to='/payment'>
                <p className={`sidenav-link ${active === 'payment' && 'active'}`} onClick={() => setActive('payment')}> <MdPayment/> Payment Plan</p>
            </Link>

            <Link>
                <p className='sidenav-link'> <TbLogout/> Logout </p>
            </Link>
        </div>
    )
}

export default Sidenav;