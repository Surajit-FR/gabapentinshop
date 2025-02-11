import React, { useEffect } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import { getAllProducts } from '../../store/thunks/productThunk';
import { useDispatch, useSelector } from 'react-redux';


const Product = () => {
    const { productsPercategory } = useSelector(state => state.products)
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(getAllProducts())
    }, [dispatch])

    const productslider = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
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
                        {
                            productsPercategory && productsPercategory.length>0 && productsPercategory.map(product=>(
                                <div key={product.id}>
                                <div className="post-slide">
                                    <div className="post-img">
                                        <div className="min_box">
                                            <div className="box7">
                                                <img className="pic-1" src={product.image} alt='pic'/>
                                                <div className="box-content">
                                                    <div className="icon">
                                                        <Link to="/">Add To Cart</Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="text_v">
                                                <h3>{product.title}</h3>
                                                <Link to={`/product-details/${product.id}`} className="cl_iert">Buy Now</Link>
                                                <span className="n_per">${product.regular_price}</span>
                                                <div className="clearfix"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            ))
                        }
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default Product
