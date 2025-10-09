import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getAllBlogs } from '../../store/thunks/blogThunk'
import CustomLoader from '../shared/CustomLoader'
import usePageMeta from '../Seo/Seo'
import AllBlogContents from './AllBlogContents'
import PaginatedItems from '../shared/PaginatedItems'




const Bloggrid = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { blogs, loading, meta_tags_all_blogs } = useSelector(state => state.blogs)
    const onClickBlog = (id, slug) => {
        localStorage.setItem("blogId", id)
        navigate(`/blog/${slug}-${id}`)
    }
    useEffect(() => {
        dispatch(getAllBlogs())
    }, [dispatch])
    usePageMeta({
        title: meta_tags_all_blogs?.meta_title,
        description: meta_tags_all_blogs?.meta_description,
        keywords: meta_tags_all_blogs?.meta_keyword,
      });
    return (
        <>
            {loading === "All blogs pending" ?
                <CustomLoader />

                :
                <div className='blog_grid blog-layout1'>
                    <div className='container'>
                        <div className='row'>
                            {/* {blogs && blogs.length > 0 && blogs.map(blog => (

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
                            ))} */}
                            {/* <AllBlogContents blogs={blogs} onClickBlog={onClickBlog}/> */}
                            <PaginatedItems itemsPerPage={6} items={blogs} onClickBlog={onClickBlog}/>
                        </div>
                    </div>

                </div>
            }

        </>
    )
}

export default Bloggrid
