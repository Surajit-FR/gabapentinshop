import React, { useEffect } from 'react'
import Inner_common_banner from '../Common/Inner-common-banner'
import Blog_single_body from './Blog-single-body'
import bloginnerimg from '../../img/blog/inner1.jpg'
import usePageMeta from '../Seo/Seo'
import { useDispatch, useSelector } from 'react-redux'
import { getBlogDetails } from '../../store/thunks/blogThunk'

const Blogsingle = () => {
  const dispatch = useDispatch()
  const {singleBlog} = useSelector(state=> state.blogs)
  const blogId = localStorage.getItem("blogId")
  useEffect(()=>{
    if(blogId){
      dispatch(getBlogDetails(blogId))
    }
  },[blogId,dispatch])

  usePageMeta({
      title:'Blog',
      description:'Gabapentinshop Blog Single',
      keywords:'Gabapentinshop Blog Single',
  });

  return (
    <>
        <Inner_common_banner title={"Blog"} subtitle={"Blog"} background={bloginnerimg}/>
        <Blog_single_body data={singleBlog}/>
    </>
  )
}

export default Blogsingle
