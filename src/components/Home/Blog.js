import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getAllBlogs } from '../../store/thunks/blogThunk'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

const Blog = () => {
    const dispatch = useDispatch()
    const { blogs } = useSelector(state => state.blogs)
    const navigate = useNavigate()
    const onClickBlog = (id, slug) => {
        localStorage.setItem("blogId", id)
        navigate(`/blog/${slug}`)
    }
    useEffect(() => {
        dispatch(getAllBlogs())
    }, [dispatch])

    // const blog_home_slider = {
    //     dots: false,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 3,
    //     slidesToScroll: 3,
    //     autoplay: false,
    //     autoplaySpeed: 3000,
    //     responsive: [
    //       {
    //         breakpoint: 767,
    //         settings: {
    //           slidesToShow:1,
    //         },
    //       },
    //       {
    //         breakpoint: 1024,
    //         settings: {
    //           slidesToShow: 2,
    //         },
    //       },
    //     ],
    //   }
    


    return (
        <div>
            <div className='blog-layout1'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="heading-layout2 find text-center">
                                <h4 className="heading-subtitle">Recent Articles</h4>
                                <h3 className="heading-title">Tips, News & Updates</h3>
                            </div>
                        </div>
                    </div>

                    


                    <div className="row">
                    {/* <Slider {...blog_home_slider}> */}
                        {blogs && blogs.length > 0 && blogs.slice(0,3).map(item => (
                            <div className="col-sm-12 col-md-6 col-lg-4" key={item.id}>
                                <div className="post-item blog_margin">
                                    <div className="post-img">
                                        <div className="post-meta-date">
                                            <span className="day">{new Date(item.date).getDate()}</span>
                                            <span className="month">{month[new Date(item.date).getMonth()]} {new Date(item.date).getFullYear()}</span>
                                        </div>
                                        <div
                                            onClick={() => onClickBlog(item.id, item.slug)}
                                        >
                                            <Link to={`/blog/${item.slug}`}>
                                                <img src={item.image || require("../../assets/blog/1.jpg")} alt="Image" />
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="post-body beg">
                                        <div className="post-meta d-flex align-items-center">
                                            <div className="post-meta-cat"
                                                onClick={() => onClickBlog(item.id, item.slug)}
                                            >
                                                <Link
                                                // to={`/blog/${item.id}`}
                                                >{item.title}</Link>
                                            </div>
                                            <Link className="post-meta-author" to="/">{item.author}</Link>
                                        </div>
                                        <div className="post-title"
                                            onClick={() => onClickBlog(item.id, item.slug)}
                                        >
                                            <Link
                                            //  to={`/blog/${item.id}`}
                                            >
                                                <p className='text_overhide'
                                                >
                                                    {item.description}
                                                </p>
                                            </Link>
                                        </div>
                                        <div
                                            onClick={() => onClickBlog(item.id, item.slug)}
                                        >
                                            <Link
                                                to={`/blog/${item.slug}`}
                                                className="read_more">
                                                <i className="plus-icon">+</i>
                                                Read More
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    {/* </Slider> */}
                    </div>
                    <div className="row">
                        <div className="col-12 text-center">
                            <Link to="/blog" className="check_posts">
                                <span>Check All Blog Posts</span>
                                <i className="fa-solid fa-arrow-right"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog
