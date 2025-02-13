import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getAllBlogs } from '../../store/thunks/blogThunk'

const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

const Blog = () => {
    const dispatch = useDispatch()
    const { blogs } = useSelector(state => state.blogs)
    useEffect(() => {
        dispatch(getAllBlogs())
    }, [dispatch])
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
                        {blogs && blogs.length > 0 && blogs.map(item => (
                            <div className="col-sm-12 col-md-6 col-lg-4" key={item.id}>
                                <div className="post-item">
                                    <div className="post-img">
                                        <div className="post-meta-date">
                                            <span className="day">{new Date(item.date).getDate()}</span>
                                            <span className="month">{month[new Date(item.date).getMonth()]} {new Date(item.date).getFullYear()}</span>
                                        </div>
                                        <Link to={`/blog-single/${item.id}`}>
                                            <img src={item.image || require("../../assets/blog/1.jpg")} alt="Image" />
                                        </Link>
                                    </div>
                                    <div className="post-body">
                                        <div className="post-meta d-flex align-items-center">
                                            <div className="post-meta-cat">
                                                <Link to={`/blog-single/${item.id}`}>{item.title}</Link>
                                            </div>
                                            <Link className="post-meta-author" to="/">{item.author}</Link>
                                        </div>
                                        <div className="post-title">
                                            <Link to={`/blog-single/${item.id}`}>
                                            <p
                                                style={{
                                                    overflow: "hidden",
                                                    display: "-webkit-box",
                                                    WebkitLineClamp: 3,
                                                    lineClamp: 2,
                                                    WebkitBoxOrient: "vertical",
                                                }}
                                            >
                                                {item.description}
                                                </p>
                                            </Link>
                                        </div>
                                        <Link to={`/blog-single/${item.id}`} className="read_more">
                                            <i className="plus-icon">+</i>
                                            Read More
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}

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
