import React, {useState} from 'react'
import './Profile.css'
import SideNav from '../../../components/Sidenav'

const UserNotification = () => {
    const [active, setActive] = useState('notification')
    return(
        <section className='settings container-fluid mb-5'>
            <div className='row justify-content-around'>
                <SideNav active={active} setActive={setActive}/>

                <div className='col-10 col-xl-10 col-lg-8 col-md-9 col-sm-8 col-xs-5 rounded p-5 profile-form'>
                    <h3 className='mb-4'>Notification</h3>

                    <p>
                        Select the type of notification you would like to receive from <b>Roots</b>.
                    </p>

                    <form className='w-75 m-3'>

                        <div className="mb-3 form-check">
                            <label className="form-check-label" htmlFor="newmaterials">New Materials</label>
                            <p className='text-muted form-text p-2 rounded'>
                                <input type="checkbox" className="form-check-input" id="newmaterials"/>
                                When a new material has been updated to your learning
                            </p>
                        </div>

                        <div className="mb-3 form-check">
                            <label className="form-check-label" htmlFor="reminder">Reminder</label>
                            <p className='text-muted form-text p-2 rounded'>
                                <input type="checkbox" className="form-check-input" id="reminder"/>
                                When a deadline is approaching or when you missed any progress set out
                            </p>
                        </div>

                        <div className="mb-3 form-check">
                            <label className="form-check-label" htmlFor="discussion">Discussion Forum</label>
                            <p className='text-muted form-text p-2 rounded'>
                                <input type="checkbox" className="form-check-input" id="discussion"/>
                                When a new comment is made in any community you joined
                            </p>
                        </div>

                        <div className="mb-3 form-check">
                            <label className="form-check-label" htmlFor="newsletter">Newsletter</label>
                            <p className='text-muted form-text p-2 rounded'>
                                <input type="checkbox" className="form-check-input" id="newsletter"/>
                                Subscribe to our channel to receive latest news on <b>Roots</b>.
                            </p>
                        </div>

                        <div className="mb-3 form-check">
                            <label className="form-check-label" htmlFor="newupdate">New Update</label>
                            <p className='text-muted form-text p-2 rounded'>
                                <input type="checkbox" className="form-check-input" id="newupdate"/>
                                When a new version of the app is available
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default UserNotification;