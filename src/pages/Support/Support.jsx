import React from "react"; 
import "./Support.css"; 

const Support = () => {
    return (
    <div className="supportpage">

        <h2 className="supportheading text-center">How can we help you today?</h2>

        <div className="supportform">
           <p  className="text-center supportformtext mb-5">Get in touch with us </p>
           
           <form>

            <div className="box">

                <div class="row">

                    <div class="col-md-6">
                        <div className="formgroup mt-3 mb-3">
                            <label className="formtext">Full Name</label>
                            <div className="inputcontainer"> 
                                <i className="fa-regular fa-user icon"></i> 
                                <input
                                    className="inputbox form-control"
                                    type="text"
                                    id="firstnameInput"
                                    placeholder="John Doe" 
                                    required 
                                />
                            </div>
                        </div>
                    </div>

                    <div class="col-md-6">

                        <div className="formgroup mt-3 mb-3">
                            <label className="formtext">Email</label>
                            <div className="inputcontainer"> 
                            <i class="fa-regular fa-envelope icon"></i>
                                <input
                                    className="inputbox form-control"
                                    type="email"
                                    id="emailInput"
                                    placeholder="johndoe@gmail.com" 
                                    required 
                                />
                            </div>
                        </div> 

                    </div>
                </div>

                <div className="form-group">
                    <textarea className="form-control mt-3" rows="6">What is your concern?...</textarea>
               </div>
            </div>   
                  
                <br />
             
                <div className="text-center">
                    <input className="submit text-center" value="Send message"/>
                </div>
            </form>
        </div>
        
    
    </div>

    )
}

export default Support;