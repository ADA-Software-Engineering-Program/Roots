import React from 'react'
import './Profile.css'
import {AiOutlineLock} from 'react-icons/ai'
import { MdPayment } from 'react-icons/md'
import { TbLogout } from "react-icons/tb";
import {BiUserCircle} from 'react-icons/bi'
import {HiOutlineMail} from 'react-icons/hi'
import {BsCalendar3} from 'react-icons/bs'

const UserSettings = () => {
    return(
        <section className='settings container-fluid'>
            <div className='row justify-content-between'>
                <div className='sidenav col-2 p-3'>
                    <h2 className='sidenav-heading fw-bold'>
                        Settings
                    </h2>

                    <p> <i className="fa-regular fa-user"></i> Profile</p>
                    <p> <i className="fa-regular fa-bell"></i> Notifications </p>
                    <p> <AiOutlineLock/> Security</p>
                    <p> <MdPayment/> Payment Plan</p>
                    <p> <TbLogout/> Logout </p>
                </div>
                <div className='aside col-10 rounded p-5'>
                    <h3 className='mb-4'>Profile Settings</h3>

                    <form className='col-8 col-lg-8 col-md-6 col-sm-6'>
                        <div className="mb-3">
                            <label htmlFor="fullname" className="form-label">Full Name</label>
                            <div className='input-group w-100'>
                                <button className='btn btn-outline-dark'><BiUserCircle/></button>
                                <input type="text" className="form-control" id="fullname" aria-describedby="fullname" placeholder='John Doe'/>
                            </div>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <div className='input-group w-100'>
                                <button className='btn btn-outline-dark'><HiOutlineMail/></button>
                                <input type="email" className="form-control" id="email" placeholder='johndoe@gmail.com'/>
                            </div>
                        </div>

                        <div className="mb-3">
                            <label className="form-label" for="date">Date of Birth</label>
                            <div className='input-group w-100'>
                                <button className='btn btn-outline-dark'><BsCalendar3/></button>
                                <input type="text" className="form-control" id="date" placeholder='Day/Month/Year'/>
                            </div>
                        </div>

                        <button type="submit" className="btn btn-outline-success ps-4 mt-4">Save</button>
                    </form>

                    <div className='col-4 col-lg-4 col-md-4 col-sm-6'>
                        <div className='avatar rounded-circle'>
                            <img className='img-fluid rounded-circle' alt='profile-image' src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d29tYW4lMjBzbWlsaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'></img>
                        </div>
                        <button className='btn btn-outline-dark'>Upload Picture</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default UserSettings;