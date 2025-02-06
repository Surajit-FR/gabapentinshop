import React from 'react'

import About from '../Common/About'
import Our_misson from './Our-misson'
import Testimonials from '../Common/Testimonials'
import Inner_common_banner from '../Common/Inner-common-banner'
import aboutbanneimg from '../../img/abouts/inner1.jpg'
import usePageMeta from '../Seo/Seo'



const Aboutinner = () => {
  usePageMeta({
      title:'About Us',
      description:'Gabapentinshop About Us',
      keywords:'Gabapentinshop About Us',
  });

  return (
    <>

      <Inner_common_banner title="About Us" subtitle="About Us" background={aboutbanneimg}/>
      <About/>
      <Our_misson/>
      <Testimonials />  
    </>
  )
}

export default Aboutinner
