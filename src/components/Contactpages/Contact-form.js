import React from 'react'
import { Link } from 'react-router-dom'

const Contact_form = () => {
  return (
    <div>
        <div className="contact_layout1">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-7">
                        <div className="heading-layout2 mb-50">
                            <h3 className="mb-3">Get In Touch With Your Nearest Local Health Business Sales Executive</h3>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-4">
                        <div className="text-block">
                            <p className="text-block-desc">
                                Depending on the nature of your enquiry, the customer care centre staff will then
                                distribute your request for consultation to the appropriate Laboratory Medicine discipline.
                            </p>
                            <p className="text-block-desc">
                                A member of the Medical/Scientific Staff will get back to the requesting
                                healthcare provider within one business day.
                            </p>
                        </div>
                        <Link to="/shop-all" className="shop_btn">
                            <span>Shop Now</span> 
                            <i className="icon-arrow-right"></i>
                        </Link>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-8">
                        <form className="contact-panel-form" id="contactForm">
                            <div className="row">
                                <div className="col-sm-12 col-md-4 col-lg-4">
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Name" name="contact-name"/>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-4 col-lg-4">
                                    <div className="form-group">
                                        <input type="email" className="form-control" placeholder="Email" name="contact-email"/>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-4 col-lg-4">
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Phone" name="contact-phone"/>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-group">
                                        <textarea className="form-control height_1" placeholder="Additional Details"
                                        name="contact-message"></textarea>
                                    </div>
                                    <button type="submit" className="request_btn mt-10">
                                        <span>Submit Request</span> <i className="icon-arrow-right"></i>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact_form
