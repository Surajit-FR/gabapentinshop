import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';


// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';


const Single_product = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div>

      <div className='single_product'>
        <div className='container'>
            <div className='row no-gutters'>

                <div className='col-md-12 col-lg-5'>
                    <div className='swiper_boxc'>
                        <Swiper
                            style={{
                            '--swiper-navigation-color': '#fff',
                            '--swiper-pagination-color': '#fff',
                            }}
                            loop={true}
                            spaceBetween={10}
                            navigation={true}
                            thumbs={{ swiper: thumbsSwiper }}
                            modules={[FreeMode, Navigation, Thumbs]}
                            className="mySwiper2"
                        >
                            <SwiperSlide>
                                <img src={require("../../assets/product/1.png")} alt="shoe"/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={require("../../assets/product/1.png")} alt="shoe"/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={require("../../assets/product/1.png")} alt="shoe"/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={require("../../assets/product/1.png")} alt="shoe"/>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div className='siwper_list'>
                        <Swiper
                            onSwiper={setThumbsSwiper}
                            loop={true}
                            spaceBetween={10}
                            slidesPerView={4}
                            freeMode={true}
                            watchSlidesProgress={true}
                            modules={[FreeMode, Navigation, Thumbs]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <img src={require("../../assets/product/1.png")} alt="shoe"/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={require("../../assets/product/1.png")} alt="shoe"/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={require("../../assets/product/1.png")} alt="shoe"/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={require("../../assets/product/1.png")} alt="shoe"/>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>

                <div className='col-md-12 col-lg-7'>
                    <div className='singel_text'>
                        <h4>Gabapentin 800mg- 120 Tabs</h4>
                        <h5 className='prices'>$82.00</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eveniet veniam tempora fuga tenetur placeat 
                            sapiente architecto illum soluta consequuntur, aspernatur quidem at sequi ipsa!
                        </p>
                        <a className='add_to_cart' href='#'>Add to cart</a>
                        <p><b>Category:</b> <a href='/'> Men's Perfume</a></p>
                    </div>
                </div>

            </div>
        </div>
      </div>

    </div>
  )
}

export default Single_product
