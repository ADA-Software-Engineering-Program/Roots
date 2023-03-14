import React from 'react';
import './Subscription.css'
import {Link} from 'react-router-dom'

const Subscription = () => {
    return(
        <section className='subscription'>
            <div className='row p-3 justify-content-center p-5'>
                <div className='col-12 d-flex p-3'>
                    <Link to ='/dashboard'>
                        <p>Home <i class="fa-solid fa-chevron-right"></i> </p>
                    </Link>

                    <Link to='/course'>
                        <p> Basic level <i class="fa-solid fa-chevron-right"></i> </p>
                    </Link>
                    
                    <Link to='/course'>
                        <p> Alphabet <i class="fa-solid fa-chevron-right"></i> </p>
                    </Link>
                    <p> Subscription</p>
                </div>

                <div className='col-12 col-xl-3 col-lg-3 col-md-4 col-sm-12 col-xs-12 m-0'>
                    <div className="card border-0 shadow">
                        <div className="card-body">
                            <h2 className="card-title text-center fw-bold">Monthly Plan</h2>
                            <p className="text-center text-muted  header-text">5000/Month</p>
                            <p className="card-text border-bottom text-center">Unlimited access to the platform for a month</p>
                        
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item border-0">All resources at disposal</li>
                            <li className="list-group-item border-0">Access to mail instructor</li>
                            <li className="list-group-item border-0">Access to course study group</li>
                            <li className="list-group-item border-0 text-muted">Access to community group</li>
                            <li className="list-group-item border-0 text-muted">Chat with Facilitator</li>
                            <li className="list-group-item border-0 text-muted">Chat with customer support group</li>
                        </ul>

                        <button type="button" className="mx-auto mt-4 d-block btn btn-outline-success" data-bs-toggle="modal" data-bs-target="#cardPayment" id='button'>Subscribe</button>
                        </div>
                    </div>
                </div>

                <div className='col-12 col-xl-3 col-lg-3 col-md-4 col-sm-12 col-xs-12 m-0'>
                    <div className="card border-0 shadow">
                        <div className="card-body">
                            <h2 className="card-title text-center fw-bold">Quaterly Plan</h2>
                            <p className="text-center text-muted  header-text">12000/3 Months</p>
                            <p className="card-text border-bottom text-center">Unlimited access to the platform for 3 months</p>
                        
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item border-0">All resources at disposal</li>
                            <li className="list-group-item border-0">Access to mail instructor</li>
                            <li className="list-group-item border-0">Access to course study group</li>
                            <li className="list-group-item border-0">Access to community group</li>
                            <li className="list-group-item border-0 text-muted">Chat with Facilitator</li>
                            <li className="list-group-item border-0 text-muted">Chat with customer support group</li>
                        </ul>
                        
                        <button type="button" className="mx-auto mt-4 d-block btn btn-outline-success" data-bs-toggle="modal" data-bs-target="#cardPayment" id='button'>Subscribe</button>
                        </div>
                    </div>
                </div>

                <div className='col-12 col-xl-3 col-lg-3 col-md-4 col-sm-12 col-xs-12 m-0'>
                    <div className="card border-0 shadow">
                        <div className="card-body">
                            <h2 className="card-title text-center fw-bold">Yearly Plan</h2>
                            <p className="text-center text-muted  header-text">50,000/12 Months</p>
                            <p className="card-text border-bottom text-center">Unlimited access to the platform all year round</p>
                        
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item border-0">All resources at disposal</li>
                            <li className="list-group-item border-0">Access to mail instructor</li>
                            <li className="list-group-item border-0">Access to course study group</li>
                            <li className="list-group-item border-0">Access to community group</li>
                            <li className="list-group-item border-0">Chat with Facilitator</li>
                            <li className="list-group-item border-0">Chat with customer support group</li>
                        </ul>
                             <button type="button" className="mx-auto mt-4 d-block btn btn-outline-success" data-bs-toggle="modal" data-bs-target="#cardPayment" id='button'>Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="cardPayment" tabIndex="-1" aria-labelledby="cardPaymentLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header border-0">
                            <h1 className="modal-title fs-5" id="cardPaymentLabel">Card Payment</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>

                        <div className="modal-body p-0">
                            <form className='p-3'>
                                <div className='form-group mb-3'>
                                    <label className='form-label text-start justify-content-start fs-6 fw-bold' htmlFor='cardHolder'>Card Holder</label>
                                    <input className='form-control' name='cardHolder' placeholder='John Doe'></input>
                                </div>

                                <div className='form-group mb-3'>
                                    <label className='form-label text-start justify-content-start fs-6 fw-bold' htmlFor='cardNumber'>Debit card number</label>
                                    <input className='form-control' name='cardNumber' placeholder='8763 1234 1234 1234'></input>
                                </div>

                                <div className="row g-3 justify-content-between">
                                    <div className="col-5">
                                        <label htmlFor="expDate" className="col-form-label text-center fw-bold">Expiry Date</label>
                                    
                                        <input type="text" id="expDate" className="form-control p-2" aria-describedby="expDate" placeholder='Month/Year'/>
                                    </div>

                                    <div className="col-5">
                                        <label htmlFor="cvv" className="col-form-label text-center fw-bold">CVV</label>
                                        <input type="text" id="cvv" className="form-control p-2" aria-describedby="cvv" placeholder='123'/>
                                    </div>
                                </div>
                            </form>
                        </div>

                        <div className="modal-footer border-0">
                            <button type="button" className="btn btn-light" data-bs-dismiss="modal">Cancel</button>
                            
                            <Link to='/success'>
                                <button type="button" className="btn btn-success" data-bs-dismiss='modal'>
                                    Make payment
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
    )
}
export default Subscription;