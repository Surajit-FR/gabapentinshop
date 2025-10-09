import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';


// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { Link, useNavigate } from 'react-router-dom';


const SingleProduct = ({ data }) => {
    const navigate = useNavigate()
    const onPressEnquiry = () => {
        localStorage.setItem("productDate", JSON.stringify(data))
        navigate(`/order`)
    }
    // const [thumbsSwiper, setThumbsSwiper] = useState(null);
// console.log({data});

    return (
        <div>
            {data && data.id ? 
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
                                    // thumbs={{ swiper: thumbsSwiper }}
                                    modules={[FreeMode, Navigation, Thumbs]}
                                    className="mySwiper2"
                                >
                                    <SwiperSlide>
                                        <img src={data.image} alt={data.title} />
                                    </SwiperSlide>

                                </Swiper>
                            </div>
                            {/* <div className='siwper_list'>
                        <Swiper
                            onSwiper={setThumbsSwiper}
                            loop={true}
                            spaceBetween={10}
                            slidesPerView={1}
                            freeMode={true}
                            watchSlidesProgress={true}
                            modules={[FreeMode, Navigation, Thumbs]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <img src={data.img} alt={data.title}/>
                            </SwiperSlide>
                            {/* <SwiperSlide>
                                <img src={require("../../assets/product/1.png")} alt="shoe"/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={require("../../assets/product/1.png")} alt="shoe"/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={require("../../assets/product/1.png")} alt="shoe"/>
                            </SwiperSlide> */}
                            {/* </Swiper> */}
                            {/* </div> */}
                        </div>

                        <div className='col-md-12 col-lg-7'>
                            <div className='singel_text'>
                                <h1>{data.title}</h1>
                                <h5 className='prices'>${data.regular_price}</h5>
                                <p>{data.description}
                                </p>
                                {/* <Link className='add_to_cart'
                        //  href='#'
                        to='/order'
                         >Add to cart
                         </Link> */}
                                <div
                                    onClick={() => onPressEnquiry()}
                                >
                                    <Link className='add_to_cart'
                                    //  href='#'
                                    // to='/order'
                                    >Buy now
                                        {/* Buy Now */}
                                    </Link>
                                </div>
                                <p><b>Category:</b> <a href='/'>{data.categories[0]?.name}</a></p>
                            </div>
                        </div>

                    </div>
                </div>
            </div> : null}

          

        </div>
    )
}

export default SingleProduct
