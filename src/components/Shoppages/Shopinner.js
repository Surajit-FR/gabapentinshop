import React from 'react'
import Inner_common_banner from '../Common/Inner-common-banner'
import Shop_body from './Shop-body'
import { Link } from 'react-router-dom'
import shopinnerimg from '../../img/shop/inner1.jpg'
import usePageMeta from '../Seo/Seo'


const Shopinner = () => {
  usePageMeta({
    title:'Shop',
    description:'Gabapentinshop Shop',
    keywords:'Gabapentinshop Shop',
});

  return (
    <div>

      <Inner_common_banner title={"Shop"} subtitle={"Shop"} background={shopinnerimg}/> 
      <Shop_body/>
    </div>
  )
}

export default Shopinner
