import React from "react";
import logo from '../../assets/logo.png';
import './Footer.css';

function Footer() {
    return (
        <section className="footer row p-2">
                <div className="col-12 col-md-3 col-lg-6 logo">
                    <img alt="LOGO" src={logo} className="img-responsive"></img>
                    <p className="footer_text m-0">&#169; 2010 - 2020 </p>
                    <p className="footer_text m-0">Privacy - Terms</p>
                </div>

                <div className="col-12 col-md-3 col-lg-2 footer_link">
                    <p><a className="nav-link" href="#">Home</a></p>
                    <p><a className="nav-link" href="#">Courses</a></p>
                    <p><a className="nav-link" href="#">Lectures</a></p>
                </div>

                <div className="col-12 col-md-3 col-lg-2 footer_link">
                    <p className="nav-heading">Quick Links</p>
                    <p><a className="nav-link" href="#">About Us</a></p>
                    <p><a className="nav-link" href="#">Testimonial</a></p>
                    <p><a className="nav-link" href="#">FAQs</a></p>
                    <p><a className="nav-link" href="#">Privacy Policy</a></p>
                </div>

                <div className="col-12 col-md-3 col-lg-2 footer_link">
                    <p>Company</p>
                    <p>Connect with us</p>
                    <p>124 Shomolu Lagos</p>
                    <p>roots@gmail.com</p>
                    <p>123456789</p>
                </div>
        </section>
    )
}

export default Footer;