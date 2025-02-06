import React from 'react'
import Inner_common_banner from '../Common/Inner-common-banner'
import Baclofen_section from './Baclofen-section'
import Description from './Description'
import Product_section from './Product-section'
import Product from '../Home/Product'
import usePageMeta from '../Seo/Seo'
import baclofenimg from '../../assets/product/b1.jpg'

const Baclofeninner = () => {
  usePageMeta({
    title:'Baclofen',
    description:'Gabapentinshop Baclofen',
    keywords:'Gabapentinshop Baclofen',
});

  return (
    <>
      <Inner_common_banner title={"Baclofen"} subtitle={"Baclofen"} background={baclofenimg}/>
      <Baclofen_section/>
      <Description/>
      <Product_section/>
    </>
  )
}

export default Baclofeninner
