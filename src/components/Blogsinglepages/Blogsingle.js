import React, { useEffect, useState } from 'react'
import Inner_common_banner from '../Common/Inner-common-banner'
import Blog_single_body from './Blog-single-body'
import bloginnerimg from '../../img/blog/inner1.jpg'
import usePageMeta from '../Seo/Seo'

import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getBlogDetails } from '../../store/thunks/blogThunk'

const Blogsingle = () => {
  const {blog_id} = useParams()
  const dispatch = useDispatch()
  const {singleBlog} = useSelector(state=> state.blogs)

  useEffect(()=>{
    if(blog_id){
      dispatch(getBlogDetails(blog_id))
    }
  },[blog_id,dispatch])
  console.log(singleBlog)
  usePageMeta({
      title:'Blog Single',
      description:'Gabapentinshop Blog Single',
      keywords:'Gabapentinshop Blog Single',
  });

  return (
    <>
        <Inner_common_banner title={"Blog Single"} subtitle={"Blog Single"} background={bloginnerimg}/>
        <Blog_single_body data={singleBlog}/>
    </>
  )
}

export default Blogsingle
