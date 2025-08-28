import React from 'react'
import Inner_common_banner from '../Common/Inner-common-banner'
import Bloggrid from './Bloggrid'
import bloginnerimg from '../../img/blog/inner1.jpg'


const Bloginner = () => {

  return (

          <>
            <Inner_common_banner title={"Blogs"} subtitle={"Blogs"} background={bloginnerimg} />
            <Bloggrid />
          </>
  )
}

export default Bloginner
