import React from 'react'
import jQuery from 'jquery'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';


const Testimonials = () => {

    const pharmacyslider = {
        dots: true,           
        infinite: true,      
        speed: 500,           
        slidesToShow:3,     
        slidesToScroll: 1,    
        autoplay: false,       
        autoplaySpeed: 3000,  
        responsive: [
          {
            breakpoint: 768, 
            settings: {
              slidesToShow: 2, 
            },
          },
          {
            breakpoint: 1024, 
            settings: {
              slidesToShow: 3, 
            },
          },
          {
            breakpoint: 499, 
            settings: {
              slidesToShow: 1, 
            },
          },

        ],
      }

      const testimonialslider = {
        dots: true,           
        infinite: true,      
        speed: 500,           
        slidesToShow:1,     
        slidesToScroll: 1,    
        autoplay: false,       
        autoplaySpeed: 3000,  
        responsive: [
          {
            breakpoint: 768, 
            settings: {
              slidesToShow: 1, 
            },
          },
          {
            breakpoint: 1024, 
            settings: {
              slidesToShow: 1, 
            },
          },
        ],
      }


  return (
    <div>
      <div className='cta-layout1'>
        <div className='container'>
            <Slider {...pharmacyslider}>
                <div>
                    <div className="post-slide">
                        <div className="service-item">
                            <div className="cta-block d-flex align-items-start">
                                <i className="fa-solid fa-truck"></i>
                                <div className="">
                                    <h4 className="cta-title color-white">Fast & Free Delivery</h4>
                                    <p className="cta-desc color-gray">
                                    An online platform where you can  order medications, including Gabapentin & Fioricet, 
                                    for delivery.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="post-slide">
                        <div className="service-item">
                            <div className="cta-block d-flex align-items-start">
                                <i className="fa-solid fa-lock"></i>
                                <div className="">
                                    <h4 className="cta-title color-white">Safe & Secure Payment</h4>
                                    <p className="cta-desc color-gray">
                                    Safe & Secure Payment for Gabapentin | Trusted & Reliable Transactions
                                    </p>
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>
                <div>
                    <div className="post-slide">
                        <div className="service-item">
                                <div className="cta-block d-flex align-items-start">
                                <i className="fa-solid fa-cash-register"></i>
                                <div className="">
                                    <h4 className="cta-title color-white">Gabapentin Shop COD payment</h4>
                                    <p className="cta-desc color-gray">
                                    We only accept COD (Collect On Delivery) Payment.you can easily buy Fioricet online from topemeds. 
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="post-slide">
                        <div className="service-item">
                            <div className="cta-block d-flex align-items-start">
                                <i className="fa-solid fa-prescription-bottle-medical"></i>
                                <div className="">
                                    <h4 className="cta-title color-white">Online Pharmacy</h4>
                                    <p className="cta-desc color-gray">
                                    You can save time and money when you buy medicine online or through a mail-order pharmacy.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
      </div>

      <div className='why_testimial'>
        <div className='container-fluid grt_1'>
            <div className='row top_margin'>
                <div className='col-md-4 pr_0'>
                    <div className='img_box'>
                        <img src={require("../../assets/testimonial/t1.jpg")} alt='pic'/>
                    </div>
                </div>
                <div className='col-md-8 pl_0'>
                    <div className='people_text'>
                        <h2>Why People Love Us!</h2>
                        <div className='love_text'>
                            <Slider {...testimonialslider}>
                                <div>
                                    <div className='post-slide'>
                                        <div className='t_text'>
                                            <p>They have cultivated a loyal following of functional and
                                            integrative medicine professionals, unified by a desire to prevent disease and attain health.
                                            They alued partners in providing only high quality testing to help us achieve clinical results
                                            faster .</p>
                                        </div>
                                        <div className="testimonial-meta d-flex align-items-center">
                                            <div className="testimonial-thmb">
                                                <img src={require("../../assets/testimonial/3.jpg")} alt="pic"/>
                                            </div>
                                            <div>
                                                <h4 className="testimonial-meta-title">Anna Mudson</h4>
                                                <p className="testimonial-meta-desc">Optime Labs</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className='post-slide'>
                                        <div className='t_text'>
                                            <p>They have cultivated a loyal following of functional and
                                            integrative medicine professionals, unified by a desire to prevent disease and attain health.
                                            They alued partners in providing only high quality testing to help us achieve clinical results
                                            faster .</p>
                                        </div>
                                        <div className="testimonial-meta d-flex align-items-center">
                                            <div className="testimonial-thmb">
                                                <img src={require("../../assets/testimonial/3.jpg")} alt="pic"/>
                                            </div>
                                            <div>
                                                <h4 className="testimonial-meta-title">Anna Mudson</h4>
                                                <p className="testimonial-meta-desc">Optime Labs</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Slider>   
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>




    </div>
  )
}

export default Testimonials
