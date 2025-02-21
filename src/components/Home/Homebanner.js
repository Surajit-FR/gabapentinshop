import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link, useNavigate } from 'react-router-dom';

const Homebanner = () => {
const navigate = useNavigate()
const onClickShopAll = () =>{
  localStorage.setItem("catId","all")
  localStorage.setItem("categoryName","Shop")
  navigate("/shop")
}
    const homeslider = {
      dots: true,           
      infinite: true,      
      speed: 500,           
      slidesToShow:1,     
      slidesToScroll: 1,    
      autoplay: true,       
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

        <div className='home_banner'>
          <Slider {...homeslider}>
            <div>
              <div className='item'>
                <img src={require("../../assets/banner/1.jpg")} alt="pic"/>
                <div className='cover'>
                  <div className='container'>
                    <div className='header-content'>
                      <h2>Best Quality Medications at <span>Low Prices</span></h2>
                      <div onClick ={()=>onClickShopAll()}>
                      <Link
                      //  to="/shop-all"
                        className="btn-white">
                          <span>Shop Now!</span>
                          <i className="icon-arrow-right"></i>
                      </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className='item'>
                <img src={require("../../assets/banner/2.jpg")} alt="pic"/>
                <div className='cover'>
                  <div className='container'>
                    <div className='header-content'>
                      <h2>Best Quality Medications at <span>Low Prices</span></h2>
                      <div
                      onClick ={()=>onClickShopAll()}
                      >
                      <Link 
                      to="/shop" 
                      className="btn-white">
                          <span>Shop Now!</span>
                          <i className="icon-arrow-right"></i>
                      </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </Slider>

        </div>
    </div>
  )
}

export default Homebanner
