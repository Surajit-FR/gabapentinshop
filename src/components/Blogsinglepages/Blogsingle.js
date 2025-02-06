import React from 'react'
import Inner_common_banner from '../Common/Inner-common-banner'
import Blog_single_body from './Blog-single-body'
import bloginnerimg from '../../img/blog/inner1.jpg'
import usePageMeta from '../Seo/Seo'



const Blogsingle = () => {
  
  usePageMeta({
      title:'Blog Single',
      description:'Gabapentinshop Blog Single',
      keywords:'Gabapentinshop Blog Single',
  });

  return (
    <>
        <Inner_common_banner title={"Blog Single"} subtitle={"Blog Single"} background={bloginnerimg}/>
        <Blog_single_body/>
    </>
  )
}

export default Blogsingle
