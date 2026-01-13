import React, { useEffect } from 'react'

import About from '../Common/About'
import Our_misson from './Our-misson'
import Testimonials from '../Common/Testimonials'
import Inner_common_banner from '../Common/Inner-common-banner'
import aboutbanneimg from '../../img/abouts/inner1.jpg'
import usePageMeta from '../Seo/Seo'
import { useDispatch, useSelector } from 'react-redux'
import { getAboutusData } from '../../store/thunks/homeThunk'
import Preloader from '../Preloader/Preloader'

const Aboutinner = () => {
  const {aboutUsData} = useSelector(state=> state.home)

  usePageMeta({
      title:aboutUsData?.meta_data?.meta_title,
      description:aboutUsData?.meta_data?.meta_description,
      keywords:aboutUsData?.meta_data?.meta_keyword,
      canonic: 'https://www.gabapentinshop.com/about-us'
  });
const dispatch = useDispatch()
useEffect(()=>{
  dispatch(getAboutusData())
},[dispatch])
  return (
    <>
        <Preloader/>

      <Inner_common_banner title="About Us" subtitle="About Us" background={aboutbanneimg}/>
      <About/>
      <Our_misson/>
      <Testimonials />  
    </>
  )
}

export default Aboutinner
