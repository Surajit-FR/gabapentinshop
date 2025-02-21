import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { getAllBlogs } from '../../store/thunks/blogThunk'


const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
const Bloggrid = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { blogs } = useSelector(state => state.blogs)
    const onClickBlog = (id, slug) => {
        localStorage.setItem("blogId", id)
        navigate(`/blog/${slug}`)
    }
    useEffect(() => {
        dispatch(getAllBlogs())
    }, [dispatch])

    return (
        <>
            <div className='blog_grid blog-layout1'>
                <div className='container'>
                    <div className='row'>
                        {blogs && blogs.length > 0 && blogs.map(blog => (

                            <div className='col-md-6 col-lg-4'
                                onClick={() => onClickBlog(blog.id, blog.slug)}
                                key={blog.id}
                            >
                                <div className="post-item blog_inner1">
                                    <div className="post-img">
                                        <div className="post-meta-date">
                                            <span className="day">{new Date(blog.date).getDate()}</span>
                                            <span className="month">{month[new Date(blog.date).getMonth()]} {new Date(blog.date).getFullYear()}</span>
                                        </div>
                                        <Link
                                        // to={`/blog-single/${blog.id}`}
                                        >

                                            <img src={blog.image || require("../../assets/blog/1.jpg")} alt="pic" />
                                        </Link>
                                    </div>
                                    <div className="post-body">
                                        <div className="post-meta d-flex align-items-center">
                                            <div className="post-meta-cat">
                                                <Link
                                                // to={`/blog-single/${blog.id}`}
                                                >{blog.title}</Link>
                                            </div>
                                            <Link className="post-meta-author"
                                            // to={`/blog-single/${blog.id}`}
                                            >{blog.author}</Link>
                                        </div>
                                        <div className="post-title">
                                            <Link
                                            //  to={`/blog-single/${blog.id}`}
                                            >
                                                {blog.title}
                                            </Link>
                                        </div>
                                        <p className="post-desc"
                                            style={{
                                                overflow: "hidden",
                                                display: "-webkit-box",
                                                WebkitLineClamp: 3,
                                                lineClamp: 2,
                                                WebkitBoxOrient: "vertical",
                                            }}
                                        >{blog.description}
                                        </p>
                                        <Link
                                            // to={`/blog-single/${blog.id}`} 
                                            className="read_more">
                                            <i className="plus-icon">+</i>
                                            Read More
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}








                        {/* <div className='col-md-6 col-lg-4'>
                    <div className="post-item blog_inner1">
                        <div className="post-img">
                            <div className="post-meta-date">
                                <span className="day">30</span>
                                <span className="month">Jan 2022</span>
                            </div>
                            <Link to="/blog-single">
                                <img src={require("../../assets/blog/1.jpg")} alt="pic"/>
                            </Link>
                        </div>
                        <div className="post-body">
                            <div className="post-meta d-flex align-items-center">
                                <div className="post-meta-cat">
                                    <Link to="/blog-single">Mental Health</Link>
                                </div>
                                <Link className="post-meta-author" to="/blog-single">Martin King</Link>
                            </div>
                            <div className="post-title">
                                <Link to="/blog-single">
                                    Partnership to Increase COVID19 Testing Capacity and Track All
                                    COVID-19 Variants
                                </Link>
                            </div>
                            <p className="post-desc">It’s normal to feel anxiety, worry and grief any time you’re diagnosed with a
                            condition that’s certainly true if you test positive for COVID-19, or are presumed to be positive...
                            </p>
                            <Link to="/blog-single" className="read_more">
                                <i className="plus-icon">+</i>
                                Read More
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='col-md-6 col-lg-4'>
                    <div className="post-item blog_inner1">
                        <div className="post-img">
                            <div className="post-meta-date">
                                <span className="day">30</span>
                                <span className="month">Jan 2022</span>
                            </div>
                            <Link to="/blog-single">
                                <img src={require("../../assets/blog/1.jpg")} alt="pic"/>
                            </Link>
                        </div>
                        <div className="post-body">
                            <div className="post-meta d-flex align-items-center">
                                <div className="post-meta-cat">
                                    <Link to="/blog-single">Mental Health</Link>
                                </div>
                                <Link className="post-meta-author" to="/blog-single">Martin King</Link>
                            </div>
                            <div className="post-title">
                                <Link to="/blog-single">
                                    Partnership to Increase COVID19 Testing Capacity and Track All
                                    COVID-19 Variants
                                </Link>
                            </div>
                            <p className="post-desc">It’s normal to feel anxiety, worry and grief any time you’re diagnosed with a
                            condition that’s certainly true if you test positive for COVID-19, or are presumed to be positive...
                            </p>
                            <Link to="/blog-single" className="read_more">
                                <i className="plus-icon">+</i>
                                Read More
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='col-md-6 col-lg-4'>
                    <div className="post-item blog_inner1">
                        <div className="post-img">
                            <div className="post-meta-date">
                                <span className="day">30</span>
                                <span className="month">Jan 2022</span>
                            </div>
                            <Link to="/blog-single">
                                <img src={require("../../assets/blog/1.jpg")} alt="pic"/>
                            </Link>
                        </div>
                        <div className="post-body">
                            <div className="post-meta d-flex align-items-center">
                                <div className="post-meta-cat">
                                    <Link to="/blog-single">Mental Health</Link>
                                </div>
                                <Link className="post-meta-author" to="/blog-single">Martin King</Link>
                            </div>
                            <div className="post-title">
                                <Link to="/blog-single">
                                    Partnership to Increase COVID19 Testing Capacity and Track All
                                    COVID-19 Variants
                                </Link>
                            </div>
                            <p className="post-desc">It’s normal to feel anxiety, worry and grief any time you’re diagnosed with a
                            condition that’s certainly true if you test positive for COVID-19, or are presumed to be positive...
                            </p>
                            <Link to="/blog-single" className="read_more">
                                <i className="plus-icon">+</i>
                                Read More
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='col-md-6 col-lg-4'>
                    <div className="post-item blog_inner1">
                        <div className="post-img">
                            <div className="post-meta-date">
                                <span className="day">30</span>
                                <span className="month">Jan 2022</span>
                            </div>
                            <Link to="/blog-single">
                                <img src={require("../../assets/blog/1.jpg")} alt="pic"/>
                            </Link>
                        </div>
                        <div className="post-body">
                            <div className="post-meta d-flex align-items-center">
                                <div className="post-meta-cat">
                                    <Link to="/blog-single">Mental Health</Link>
                                </div>
                                <Link className="post-meta-author" to="/blog-single">Martin King</Link>
                            </div>
                            <div className="post-title">
                                <Link to="/blog-single">
                                    Partnership to Increase COVID19 Testing Capacity and Track All
                                    COVID-19 Variants
                                </Link>
                            </div>
                            <p className="post-desc">It’s normal to feel anxiety, worry and grief any time you’re diagnosed with a
                            condition that’s certainly true if you test positive for COVID-19, or are presumed to be positive...
                            </p>
                            <Link to="/blog-single" className="read_more">
                                <i className="plus-icon">+</i>
                                Read More
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='col-md-6 col-lg-4'>
                    <div className="post-item blog_inner1">
                        <div className="post-img">
                            <div className="post-meta-date">
                                <span className="day">30</span>
                                <span className="month">Jan 2022</span>
                            </div>
                            <Link to="/blog-single">
                                <img src={require("../../assets/blog/1.jpg")} alt="pic"/>
                            </Link>
                        </div>
                        <div className="post-body">
                            <div className="post-meta d-flex align-items-center">
                                <div className="post-meta-cat">
                                    <Link to="/blog-single">Mental Health</Link>
                                </div>
                                <Link className="post-meta-author" to="/blog-single">Martin King</Link>
                            </div>
                            <div className="post-title">
                                <Link to="/blog-single">
                                    Partnership to Increase COVID19 Testing Capacity and Track All
                                    COVID-19 Variants
                                </Link>
                            </div>
                            <p className="post-desc">It’s normal to feel anxiety, worry and grief any time you’re diagnosed with a
                            condition that’s certainly true if you test positive for COVID-19, or are presumed to be positive...
                            </p>
                            <Link to="/blog-single" className="read_more">
                                <i className="plus-icon">+</i>
                                Read More
                            </Link>
                        </div>
                    </div>
                </div> */}

                    </div>
                </div>
            </div>
        </>
    )
}

export default Bloggrid
