import { Link } from 'react-router-dom'

const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
const AllBlogContents = ({blogs, onClickBlog}) => {
  return (
    <>
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
                                            to={`/blog/${blog.slug}`}
                                            target='_blank'
                                            >

                                                <img src={blog.image || require("../../assets/blog/1.jpg")} alt="pic" />
                                            </Link>
                                        </div>
                                        <div className="post-body">
                                            <div className="post-meta d-flex align-items-center">
                                                <div className="post-meta-cat">
                                                    <Link
                                                    to={`/blog/${blog.slug}`}
                                                    target='_blank'
                                                    >{blog.title}</Link>
                                                </div>
                                                <Link className="post-meta-author"
                                                to={`/blog/${blog.slug}`}
                                                target='_blank'
                                                >{blog.author}</Link>
                                            </div>
                                            <div className="post-title">
                                                <Link
                                                 to={`/blog/${blog.slug}`}
                                                 target='_blank'
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
                                                to={`/blog/${blog.slug}`} 
                                                target='_blank'
                                                className="read_more">
                                                <i className="plus-icon">+</i>
                                                Read More
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
    </>
  )
}

export default AllBlogContents