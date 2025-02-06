import React from 'react'
import { Link } from 'react-router-dom'


const Blog = () => {
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
            
            <div className="col-sm-12 col-md-6 col-lg-4">
                <div className="post-item">
                    <div className="post-img">
                        <div className="post-meta-date">
                            <span className="day">30</span>
                            <span className="month">Jan 2022</span>
                        </div>
                        <Link to="/">
                            <img src={require("../../assets/blog/1.jpg")} alt="Image" />
                        </Link>
                    </div>
                    <div className="post-body">
                        <div className="post-meta d-flex align-items-center">
                            <div className="post-meta-cat">
                                <Link to="/">Mental Health</Link>
                            </div>
                            <Link className="post-meta-author" to="/">Martin King</Link>
                        </div>
                        <div className="post-title">
                            <Link to="/">
                                Partnership to Increase COVID19 Testing Capacity and Track All
                                COVID-19 Variants
                            </Link>
                        </div>
                        <p className="post-desc">It’s normal to feel anxiety, worry and grief any time you’re diagnosed with a
                        condition that’s certainly true if you test positive for COVID-19, or are presumed to be positive...
                        </p>
                        <Link to="/blogsingle" className="read_more">
                            <i className="plus-icon">+</i>
                            Read More
                        </Link>
                    </div>
                </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
                <div className="post-item">
                    <div className="post-img">
                        <div className="post-meta-date">
                            <span className="day">30</span>
                            <span className="month">Jan 2022</span>
                        </div>
                        <Link to="/">
                            <img src={require("../../assets/blog/2.jpg")} alt="Image" />
                        </Link>
                    </div>
                    <div className="post-body">
                        <div className="post-meta d-flex align-items-center">
                            <div className="post-meta-cat">
                                <Link to="/">Mental Health</Link>
                            </div>
                            <Link className="post-meta-author" to="/">Martin King</Link>
                        </div>
                        <div className="post-title">
                            <Link to="/">
                                Partnership to Increase COVID19 Testing Capacity and Track All
                                COVID-19 Variants
                            </Link>
                        </div>
                        <p className="post-desc">It’s normal to feel anxiety, worry and grief any time you’re diagnosed with a
                        condition that’s certainly true if you test positive for COVID-19, or are presumed to be positive...
                        </p>
                        <Link to="/blogsingle" className="read_more">
                            <i className="plus-icon">+</i>
                            Read More
                        </Link>
                    </div>
                </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
                <div className="post-item">
                    <div className="post-img">
                        <div className="post-meta-date">
                            <span className="day">30</span>
                            <span className="month">Jan 2022</span>
                        </div>
                        <Link to="/">
                            <img src={require("../../assets/blog/3.jpg")} alt="Image" />
                        </Link>
                    </div>
                    <div className="post-body">
                        <div className="post-meta d-flex align-items-center">
                            <div className="post-meta-cat">
                                <Link to="/">Mental Health</Link>
                            </div>
                            <Link className="post-meta-author" to="/">Martin King</Link>
                        </div>
                        <div className="post-title">
                            <Link to="/">
                                Partnership to Increase COVID19 Testing Capacity and Track All
                                COVID-19 Variants
                            </Link>
                        </div>
                        <p className="post-desc">It’s normal to feel anxiety, worry and grief any time you’re diagnosed with a
                        condition that’s certainly true if you test positive for COVID-19, or are presumed to be positive...
                        </p>
                        <Link to="/blogsingle" className="read_more">
                            <i className="plus-icon">+</i>
                            Read More
                        </Link>
                    </div>
                </div>
            </div>

            </div>
            <div className="row">
            <div className="col-12 text-center">
                <Link to="/bloginner" className="check_posts">
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
