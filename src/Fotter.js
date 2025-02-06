import React from 'react';
import footerlogo from '../src/img/logo/logo.png';

// import { Link } from 'react-router-dom';
import { Link } from "react-router";

function Fotter() {
  return (
    <div>
      <div className='footer_bottom'>
        <div className='container pt_proison'>
            <div className='row'>
                <div className='col-md-6 col-lg-4'>
                    <div className='footer_logo'>
                        <h2>
                            <img src={footerlogo} alt="Logo" />
                        </h2>
                        <p className='s_text'>Sign up our newsletter and get exclusive deals you will not find anywhere else straight to your inbox!</p>
                        <ul className='socal_media'>
                            <li>
                                <Link to='https://www.facebook.com/profile.php?id=61560727872011' target="_blank"><i className="fa-brands fa-facebook-f"></i></Link>
                            </li>
                            <li>
                                <Link to='https://www.instagram.com/gabapentinshop' target="_blank"><i className="fa-brands fa-instagram"></i></Link>
                            </li>
                            <li>
                                <Link to='https://x.com/ShopGabapentin' target="_blank"><i className="fa-brands fa-x-twitter"></i></Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='col-md-6 col-lg-2'>
                    <div className='footer_logo'>
                        <h2>Information</h2>
                        <ul className='list-unstyled'>
                            <li>
                                <Link to='/delivery-information'>Delivery Information</Link>
                            </li>
                            <li>
                                <Link to='/privacy-policy'>Privacy Policy</Link>
                            </li>
                            <li>
                                <Link to='/tnc'>Terms & Conditions</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='col-md-6 col-lg-2'>
                    <div className='footer_logo'>
                        <h2>My Account</h2>
                        <ul className='list-unstyled'>
                            <li>
                                <Link to='/returns-policy'>Returns Policy</Link>
                            </li>
                            <li>
                                <Link to='/order'>Order Now</Link>
                            </li>
                            <li>
                                <Link to='/contact-us'>Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='col-md-6 col-lg-4'>
                    <div className='footer_logo'>
                        <h2>Quick Contacts</h2>
                        <ul className='addres_text'>
                            <li>
                            <span><i className="fa-solid fa-location-check"></i></span>
                            Medical Ltd, Manhattan 1258, New York, USA
                            </li>
                            <li>
                                <span><i className="fa-solid fa-envelope"></i></span>
                                <Link to='mailto:admin@gabapentinshop.com'>admin@gabapentinshop.com</Link>
                            </li>
                            <li>
                                <span><i className="fa-solid fa-phone"></i></span>
                                <Link to='tel:(+1) 234 567 8901'>(+1) 234 567 8901</Link>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
            <div className="row">
                <div className="col-md-12">
                    <ul className="footer-copyright-links">
                        <li><Link to="/order">Buy fioricet Online Pharmacy</Link></li>
                        <li><Link to="/order">fioricet Overnight Delivery</Link></li>
                        <li><Link to="/order">Order fioricet Online Cod</Link></li>
                        <li><Link to="/order">Buy fioricet Rx Online</Link></li>
                        <li><Link to="/order">Buy fioricet Online No Prescription</Link></li>
                        <li><Link to="/order">Buy fioricet Online In Texas</Link></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className='pattern_bottom'>
            <img src={require("../src/assets/footer/pattern.png")} alt='pic'/>
        </div>
      </div>
       
       <div className='footer_copy_right'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-6'>
                    <p>© 2024 <Link to='/'> Gabapentin Shop.</Link> All Rights Reserved.</p>
                </div>
                <div className='col-md-6'>
                    <div className='text-right'>
                        <ul className='payment_top'>
                            <li>
                                <Link  to='/'>
                                    <img src={require("../src/assets/paypal/1.png")} alt='pic'/>
                                </Link>
                            </li>
                            <li>
                                <Link to='/'>
                                    <img src={require("../src/assets/paypal/2.png")} alt='pic'/>
                                </Link>
                            </li>
                            <li>
                                <Link to='/'>
                                    <img src={require("../src/assets/paypal/3.png")} alt='pic'/>
                                </Link>
                            </li>
                            <li>
                                <Link to='/'>
                                    <img src={require("../src/assets/paypal/4.png")} alt='pic'/>
                                </Link>
                            </li>
                            <li>
                                <Link to='/'>
                                    <img src={require("../src/assets/paypal/5.png")} alt='pic'/>
                                </Link>
                            </li>
                            <li>
                                <Link to='/'>
                                    <img src={require("../src/assets/paypal/6.png")} alt='pic'/>
                                </Link>
                            </li>
                            <li>
                                <Link to='/'>
                                    <img src={require("../src/assets/paypal/7.png")} alt='pic'/>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
       </div>
        


    </div>

    
   
  )
}

export default Fotter
