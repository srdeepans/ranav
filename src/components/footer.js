import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-2 col-md-4 col-sm-6 mb-4">
                        <h5>Company Info</h5>
                        <ul className="list-unstyled">
                            <li><a href="/about">About Us</a></li>
                            <li><a href="/team">Career</a></li>
                            <li><a href="/careers">We are hiring</a></li>
                            <li><a href="/careers">Blog</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-6 mb-4">
                        <h5>Legal</h5>
                        <ul className="list-unstyled">
                            <li><a href="/about">About Us</a></li>
                            <li><a href="/team">Career</a></li>
                            <li><a href="/careers">We are hiring</a></li>
                            <li><a href="/careers">Blog</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-6 mb-4">
                        <h5>Features</h5>
                        <ul className="list-unstyled">
                            <li><a href="/support">Business Marketing</a></li>
                            <li><a href="/contact">User Analytic</a></li>
                            <li><a href="/faq">Live Chat</a></li>
                            <li><a href="/faq">Unlimited Support</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-6 mb-4">
                        <h5>Resources</h5>
                        <ul className="list-unstyled">
                            <li><a href="/moile_app" target="_blank" rel="noopener noreferrer">IOS & Android</a></li>
                            <li><a href="/demo" target="_blank" rel="noopener noreferrer">Watch a Demo</a></li>
                            <li><a href="/customers" target="_blank" rel="noopener noreferrer">Customers</a></li>
                            <li><a href="/api" target="_blank" rel="noopener noreferrer">API</a></li>
                        </ul>
                    </div>
                    <div className="foot-contact col-lg-4 col-md-12 mb-4">
                        <h5>Get In Touch</h5>
                        <address>
                            <p><i class="bi bi-geo-alt"></i> No. 21/1, Marthahalli Flyover Service Road, Opp. Purva Fountain Square Apartment, Bengaluru, Karnataka - 560 037.</p>
                            <p><i className="bi bi-telephone"></i> <a href="tel:+80866662666">80 2666 2666</a></p>
                            <p><i className="bi bi-envelope"></i> <a href="mailto:info@example.com">info@example.com</a></p>
                        </address>
                    </div>
                </div>
                <div className='copyrights row'>

                    <div className="col-lg-8 col-md-8 col-sm-8 mb-8">
                    <p>&copy; RanavProjects {new Date().getFullYear()}. All rights reserved</p>
                </div>
                <div className="social col-lg-4 col-md-4 col-sm-4 mb-4">
                    <p><i class="bi bi-facebook"></i>&nbsp;&nbsp;<i class="bi bi-instagram"></i>&nbsp;&nbsp;<i class="bi bi-twitter"></i></p>
                </div>

                </div>
                
            </div>
        </footer>
    );
}
