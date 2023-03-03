import React, {useState} from 'react'
import './Profile.css'
import SideNav from '../../../components/Sidenav'
import {HiOutlineLockClosed} from 'react-icons/hi'
import {HiOutlineMail} from 'react-icons/hi'

const UserSecurity = () => {
    const [active, setActive] = useState('security')
    return(
        <section className='settings container-fluid mb-5'>
            <div className='row justify-content-around'>
                <SideNav active={active} setActive={setActive}/>

                <div className='col-10 col-xl-10 col-lg-8 col-md-5 col-sm-5 col-xs-5 rounded p-5 profile-form'>
                    <h3 className='mb-4'>Security</h3>

                    <form className='w-75 p-3'>
                        <h5>Change Password</h5>
                        <div className="mb-3 p-2 text-muted">
                            <label htmlFor="currentpassword" className="form-label ">Current Password</label>
                            <div className='input-group w-100'>
                                <button className='btn btn-outline-success'><HiOutlineLockClosed/></button>
                                <input type="text" className="form-control" id="currentpassword" aria-describedby="current password" placeholder='Minimum 8 Characters'/>
                            </div>
                        </div>

                        <div className="mb-3 p-2 text-muted">
                            <label htmlFor="newpassword" className="form-label ">New Password</label>
                            <div className='input-group w-100'>
                                <button className='btn btn-outline-success'><HiOutlineLockClosed/></button>
                                <input type="text" className="form-control" id="newpassword" aria-describedby="newpassword" placeholder='Minimum 8 Characters'/>
                            </div>
                        </div>
                        <p className='fs-6 text'>
                            Please set a password that includes at least 6 characters, 1 number, and 1 upper and lower case letter.
                        </p>
                        <h5 className='p-2'>Change Email</h5>

                        <div className="mb-3 p-2 text-muted">
                            <label htmlFor="email" className="form-label ">Current email</label>
                            <div className='input-group w-100'>
                                <button className='btn btn-outline-success'><HiOutlineMail/></button>
                                <input type="email" className="form-control" id="email" placeholder='johndoe@gmail.com'/>
                            </div>
                        </div>

                        <div className="mb-3 p-2 text-muted">
                            <label htmlFor="email" className="form-label ">New email</label>
                            <div className='input-group w-100'>
                                <button className='btn btn-outline-success'><HiOutlineMail/></button>
                                <input type="email" className="form-control" id="email" placeholder='johndoe@gmail.com'/>
                            </div>
                        </div>

                        <p className='fs-6 text p-2'><b>Roots</b> will send you an email to this new address to confirm you want to make this change.</p>

                        <button type="submit" className="btn btn-outline-success ps-4 pe-4 mt-2">Save Changes </button>
                    </form>
                    <hr></hr>

                    <h5>Two-Factor Verification</h5>
                    <p className='fs-6 text'>Add an extra layer of security to your account by setting up two-factor verification.</p>
                    <button className='btn btn-outline-success mt-4'>Set up two-factor verification</button>
                </div>
            </div>
        </section>
    )
}

export default UserSecurity;