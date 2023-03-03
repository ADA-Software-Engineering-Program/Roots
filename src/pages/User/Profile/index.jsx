import React, { useState } from 'react'
import './Profile.css'
import SideNav from '../../../components/Sidenav'
import {FaFacebookF} from 'react-icons/fa'
import {FcGoogle} from 'react-icons/fc'
import {HiOutlineMail} from 'react-icons/hi'
import {BsCalendar3} from 'react-icons/bs'
import {BiUserCircle} from 'react-icons/bi'
import Image from '@/components/Hooks/Filepond'


const UserProfile = () => {
    const [active, setActive] = useState('profile')

    return(
        <section className='settings container-fluid'>
            <div className='row justify-content-between'>
                <SideNav active={active} setActive={setActive}/>

                <div className='col-8 col-xl-8 col-lg-8 col-md-5 col-sm-5 col-xs-5 rounded p-5 profile-form'>
                    <h3 className='mb-4'>Profile Settings</h3>

                    <form className='w-100 p-3'>
                        <div className="mb-3">
                            <label htmlFor="fullname" className="form-label">Full Name</label>
                            <div className='input-group w-100'>
                                <button className='btn btn-outline-success'><BiUserCircle/></button>
                                <input type="text" className="form-control" id="fullname" aria-describedby="fullname" placeholder='John Doe'/>
                            </div>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <div className='input-group w-100'>
                                <button className='btn btn-outline-success'><HiOutlineMail/></button>
                                <input type="email" className="form-control" id="email" placeholder='johndoe@gmail.com'/>
                            </div>
                        </div>

                        <div className="mb-3">
                            <label className="form-label" htmlFor="date">Date of Birth</label>
                            <div className='input-group w-100'>
                                <button className='btn btn-outline-success'><BsCalendar3/></button>
                                <input type="text" className="form-control" id="date" placeholder='Day/Month/Year'/>
                            </div>
                        </div>

                        <button type="submit" className="btn btn-outline-success ps-4 pe-4 mt-4">Save</button>
                    </form>

                    <hr/>

                    <div className='row'>
                        <div>
                            <h4 className='text-muted'>Linked Account</h4>
                            <p className='text-muted'>
                            Connect your social media account to your account to enable easy access when logging in.
                            </p>

                            <button className='btn btn-outline-success me-3'><FaFacebookF/> Link my Facebook Account</button>
                            <button className='btn btn-outline-success'><FcGoogle/> Link my Google Account</button>
                        </div>
                    </div>
                </div>

                <div className='col-2 col-lg-2 col-md-2 col-sm-3 pt-5 text-center'>
                    <Image />
                </div>
            </div>
        </section>
    )
}

export default UserProfile;