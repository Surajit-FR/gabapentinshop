import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { getAllBlogs } from '../../store/thunks/blogThunk'
import Preloader from '../Preloader/Preloader'


const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
const Bloggrid = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { blogs, loading } = useSelector(state => state.blogs)
    const onClickBlog = (id, slug) => {
        localStorage.setItem("blogId", id)
        navigate(`/blog/${slug}`)
    }
    useEffect(() => {
        dispatch(getAllBlogs())
    }, [dispatch])

    return (
        <>
                {loading === "All blogs pending" ? 
                
                
                <div className='col-lg-12 col-md-12 col-sm-12' style={{ height: "400px", justifyContent: "center", alignItems: "center", display: 'flex' }}>

                <div className="spinner-border text-primary" role="status"></div> 
                </div>
                
                :
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
                        </div>
                    </div>

            </div>
                }

        </>
    )
}

export default Bloggrid
