import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { mapProductsPerCategory } from '../../store/thunks/productThunk'
import { cleanup } from '../../store/reducers/productSlice'
import { getAllBlogs } from '../../store/thunks/blogThunk'
import CustomLoader from '../shared/CustomLoader'


const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

const Blog_single_body = ({ data }) => {
    const { categories } = useSelector(state => state.categories)
    const { mapProductsData } = useSelector(state => state.products)
    const { blogs, loading } = useSelector(state => state.blogs)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const htmlContent = (value) => {
        if (value && value.length > 0) {
            return `<div>${value.toString()} </div>`
        }
        return ''

    }
    const tc = document.getElementById("textContent")
    if (tc && data && data.description) {
        tc.innerHTML = htmlContent(data.description)
    }
    const oncategoryClick = (id, slug, name) => {
        localStorage.setItem("categoryName", name)
        localStorage.setItem("catId", id)
        navigate(`/shop-now/${slug}`)
    }
    const onBlogListClick = (id, slug) => {
        localStorage.setItem("blogId", id)
        navigate(`/blog/${slug}`)
    }
    useEffect(() => {
        if (categories && categories.length > 0 && mapProductsData.length === 0) {
            categories.map(item => (dispatch(mapProductsPerCategory({ id: item.term_id, name: item.name, slug: item.slug }))))
        }

    }, [dispatch, categories, mapProductsData])
    useEffect(() => {
        dispatch(getAllBlogs())
    }, [dispatch])
    useEffect(() => {
        return () => {
            dispatch(cleanup())
        }
    }, [dispatch])


    return (

        <div>
            <div className="blog_single">
                <div className="container">
                    {loading === 'single Blog Loading' ? <CustomLoader /> :
                        <div className="row">


                            <div className="col-sm-12 col-md-12 col-lg-8">
                                <div className="post-item-single">
                                    <div className="post-img">
                                        <div className="post-meta-date">
                                            <span className="day">{new Date(data.date).getDate()}</span>
                                            <span className="month">{month[new Date(data.date).getMonth()]} {new Date(data.date).getFullYear()}</span>
                                        </div>
                                        <Link to="#">
                                            <img src={data.image || require("../../assets/blog/singel-1.jpg")} alt="pic" />
                                        </Link>
                                    </div>
                                    <div className="post-body pb-0">
                                        <h1>{data.title || ''}</h1>
                                        <div className="post-desc" id="textContent">
                                            {/* <p>{data.description}</p> */}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-12 col-md-12 col-lg-4">
                                <aside className="sidebar has-marign-left ">
                                    <div className="widget widget-posts">
                                        <h5 className="widget-title">Recent Posts</h5>
                                        <div className="widget-content">
                                            {blogs && blogs.length > 0 && blogs.slice(0, 3).map(item => (
                                                <div className="widget-post-item d-flex align-items-center" key={item.id}>
                                                    <div className="widget-post-img">
                                                        <Link
                                                        // to={`/blog-single/${data.id}`}
                                                        >
                                                            <img src={item.image || require("../../assets/blog/post-1.jpg")} alt="thumb" />
                                                        </Link>
                                                    </div>
                                                    <div className="widget-post-content">
                                                        {item.date && (
                                                            <span className="widget-post-date">{

                                                                month[new Date(item.date).getMonth()]} {new Date(item.date).getDate()}, {new Date(item.date).getFullYear()}</span>
                                                        )}

                                                        <h4 className="widget-post-title"
                                                        // onClick={()=>onBlogListClick(item.id, item.slug)}
                                                        >
                                                            <Link
                                                            // to={`/blog-single/${data.slug}`}
                                                            >{item.title}</Link>
                                                        </h4>
                                                    </div>
                                                </div>
                                            ))
                                            }


                                            {/* <div className="widget-post-item d-flex align-items-center">
                                        <div className="widget-post-img">
                                            <Link to="/">
                                                <img src={require("../../assets/blog/post-1.jpg")} alt="thumb"/>
                                            </Link>
                                        </div>
                                        <div className="widget-post-content">
                                            <span className="widget-post-date">July 7, 2022</span>
                                            <h4 className="widget-post-title">
                                                <Link to="/">Do Employee Surveys Tell About Employee?</Link>
                                            </h4>
                                        </div>
                                    </div>
                                
                                    <div className="widget-post-item d-flex align-items-center">
                                        <div className="widget-post-img">
                                            <Link to="/">
                                                <img src={require("../../assets/blog/post-1.jpg")} alt="thumb"/>
                                            </Link>
                                        </div>
                                        <div className="widget-post-content">
                                            <span className="widget-post-date">March 13, 2022</span>
                                            <h4 className="widget-post-title">
                                                <Link to="/">Succession Risks That Threaten Your Leadership</Link>
                                            </h4>
                                        </div>
                                    </div> */}
                                        </div>
                                    </div>
                                    <div className="widget widget-categories">
                                        <h5 className="widget-title">Categories</h5>
                                        <div className="widget-content">

                                            <ul className="list-unstyled mb-0">
                                                {mapProductsData && mapProductsData.length > 0 && mapProductsData.map((cat, index) => (
                                                    <li key={index} onClick={() => oncategoryClick(cat.categoryId, cat.categorySlug, cat.categoryName)}>
                                                        <Link
                                                        // to="#"
                                                        >
                                                            <span className="cat-title">{cat.categoryName}</span>
                                                            <span className="cat-count">{cat.products.length}</span>
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </aside>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Blog_single_body
