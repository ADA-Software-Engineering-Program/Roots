import React, {useState} from 'react'
import './Profile.css'
import SideNav from '../../../components/Sidenav'

const Payment = () => {
    const [active, setActive] = useState('payment')
    return(
        <section className='settings container-fluid mb-5'>
            <div className='row justify-content-around'>
                <SideNav active={active} setActive={setActive}/>

                <div className='col-10 col-xl-10 col-lg-8 col-md-5 col-sm-5 col-xs-5 rounded p-5 profile-form'>
                    <h3 className='mb-4'>Payment Plan</h3>
                    <form className='w-75 p-3'>

                        <div className="row g-3 align-items-center">
                            <div className="col-3">
                                <label htmlFor="cardname" className="col-form-label">Name on card</label>
                            </div>
                            <div className="col-6">
                                <input type="text" id="cardname" className="form-control" aria-describedby="cardname" placeholder='Jadesola Oluwole'/>
                            </div>
                        </div>  

                        <div className="row g-3 align-items-center my-3">
                            <div className="col-3">
                                <label htmlFor="cardnumber" className="col-form-label">Card Number</label>
                            </div>
                            <div className="col-6">
                                <input type="text" id="cardnumber" className="form-control" aria-describedby="cardnumber" placeholder='Enter card number'/>
                            </div>
                        </div>  

                        <div className="row g-3 align-items-center my-3">
                            <div className="col-3">
                                <label htmlFor="expirydate" className="col-form-label">Expiry Date</label>
                            </div>
                            <div className="col-6">
                                <input type="text" id="expirydate" className="form-control" aria-describedby="expirydate" placeholder='MM/YY'/>
                            </div>
                        </div>  

                        <div className="row g-3 align-items-center my-3">
                            <div className="col-3">
                                <label htmlFor="cvv" className="col-form-label">CVV</label>
                            </div>
                            <div className="col-6">
                                <input type="text" id="cvv" className="form-control" aria-describedby="cvv" placeholder='CVV'/>
                            </div>
                        </div>  
                        <button className='btn btn-outline-success mt-3 ps-3 pe-3'>Save</button>                  
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Payment;