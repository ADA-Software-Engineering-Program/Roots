import React from 'react';
import success from '@/assets/subscription-success.png'
import {Link} from 'react-router-dom'

const Success = () =>{
    return (
        <section className='success'>
            <div className='row p-3'>
                <div className='col-12 p-4'> 
                    <Link to ='/dashboard'>  
                        <a className='link'>Home <i className="fa-solid fa-chevron-right"></i></a>
                    </Link>

                    <Link to='/dashboard'>
                        <a className='link'> Basic <i className="fa-solid fa-chevron-right"></i></a>
                    </Link>

                    <Link to='/course'>
                        <a className='link'> Alphabet <i className="fa-solid fa-chevron-right"></i></a>
                    </Link>

                    <Link to='/'>
                        <a className='link'> Subscription</a>
                    </Link>
                </div>
                <div className='col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12 text-center mx-xxl-auto mx-lg-auto mx-md-auto'>
                    <img alt='success' src={success} className='img-fluid success-img'></img>
                    <h3 className='fw-bolder'>Payment Successful</h3>
                    <p className='text-muted'>You have successfully subscribe to Roots e-learning Platform.</p>
                    <Link to='/dashboard'>
                        <button className='btn btn-outline-success' id='button'> Continue </button>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Success;
