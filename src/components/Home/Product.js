import React from 'react'
import $ from "jquery"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';


const Product = () => {

    const productslider = {
        dots: true,           
        infinite: true,      
        speed: 500,           
        slidesToShow:4,     
        slidesToScroll: 1,    
        autoplay: false,       
        autoplaySpeed: 3000,  
        responsive: [
          {
            breakpoint: 768, 
            settings: {
              slidesToShow: 3, 
            },
          },
          {
            breakpoint: 1024, 
            settings: {
              slidesToShow: 3, 
            },
          },
          {
            breakpoint: 1199, 
            settings: {
              slidesToShow: 3, 
            },
          },
        ],
      }

    return (
        <div>



            <div className='services-layout4'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <div className='heading-layout2 find text-center'>
                                <h4>Find the Right Test for Your Needs!</h4>
                                <h3>Providing the Diverse Needs of Your <span>Patient Community</span></h3>
                            </div>
                        </div>
                    </div>

                    <Slider {...productslider}>
                        <div>
                            <div className="post-slide">
                                <div className="post-img">
                                    <div className="min_box">
                                        <div className="box7">
                                            <img className="pic-1" src={require("../../assets/product/1.png")} alt='pic'/>
                                            <div className="box-content">
                                                <div className="icon">
                                                    <Link to="/">Add To Cart</Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text_v">
                                            <h3>Gabapentin 800mg- 120 Tabs</h3>
                                            <Link to="/" className="cl_iert">Buy Now</Link>
                                            <span className="n_per">$170.00</span>
                                            <div className="clearfix"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="post-slide">
                                <div className="post-img">
                                    <div className="min_box">
                                        <div className="box7">
                                            <img className="pic-1" src={require("../../assets/product/1.png")} alt='pic'/>
                                            <div className="box-content">
                                                <div className="icon">
                                                    <Link to="/">Add To Cart</Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text_v">
                                            <h3>Gabapentin 800mg- 120 Tabs</h3>
                                            <Link to="/" className="cl_iert">Buy Now</Link>
                                            <span className="n_per">$170.00</span>
                                            <div className="clearfix"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="post-slide">
                                <div className="post-img">
                                    <div className="min_box">
                                        <div className="box7">
                                            <img className="pic-1" src={require("../../assets/product/1.png")} alt='pic'/>
                                            <div className="box-content">
                                                <div className="icon">
                                                    <Link to="/">Add To Cart</Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text_v">
                                            <h3>Gabapentin 800mg- 120 Tabs</h3>
                                            <Link to="/" className="cl_iert">Buy Now</Link>
                                            <span className="n_per">$170.00</span>
                                            <div className="clearfix"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="post-slide">
                                <div className="post-img">
                                    <div className="min_box">
                                        <div className="box7">
                                            <img className="pic-1" src={require("../../assets/product/1.png")} alt='pic'/>
                                            <div className="box-content">
                                                <div className="icon">
                                                    <Link to="/">Add To Cart</Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text_v">
                                            <h3>Gabapentin 800mg- 120 Tabs</h3>
                                            <Link to="/" className="cl_iert">Buy Now</Link>
                                            <span className="n_per">$170.00</span>
                                            <div className="clearfix"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="post-slide">
                                <div className="post-img">
                                    <div className="min_box">
                                        <div className="box7">
                                            <img className="pic-1" src={require("../../assets/product/1.png")} alt='pic'/>
                                            <div className="box-content">
                                                <div className="icon">
                                                    <Link to="/">Add To Cart</Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text_v">
                                            <h3>Gabapentin 800mg- 120 Tabs</h3>
                                            <Link to="/" className="cl_iert">Buy Now</Link>
                                            <span className="n_per">$170.00</span>
                                            <div className="clearfix"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default Product
