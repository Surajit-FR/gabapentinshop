import React, { useEffect } from 'react'
import Inner_common_banner from '../Common/Inner-common-banner'
import Blog_single_body from './Blog-single-body'
import bloginnerimg from '../../img/blog/inner1.jpg'
import usePageMeta from '../Seo/Seo'
import { useDispatch, useSelector } from 'react-redux'
import { getBlogDetails } from '../../store/thunks/blogThunk'
import { useLocation } from 'react-router-dom'

const Blogsingle = () => {
  const dispatch = useDispatch()
  const { singleBlog } = useSelector(state => state.blogs)
  const location = useLocation();
  const pathName = location.pathname
  // console.log({ pathName })
  const idArr = pathName.split("-")
  // console.log({ idArr: idArr.at(-1) });
  const updatedId = idArr.at(-1)
  // const blogId = localStorage.getItem("blogId")
  useEffect(() => {
    // if(blogId){
    //   dispatch(getBlogDetails(blogId))
    // }
    if (updatedId) {
      dispatch(getBlogDetails(updatedId))
    }
  }, [updatedId, dispatch])

  usePageMeta({
    title: singleBlog?.meta_title,
    description: singleBlog?.meta_description,
    keywords: singleBlog?.meta_keyword,
  });

  return (
    <>
      <Inner_common_banner title={"Blog"} subtitle={"Blog"} background={bloginnerimg} />
      <Blog_single_body data={singleBlog} />
    </>
  )
}

export default Blogsingle
