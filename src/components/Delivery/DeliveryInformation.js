import React from 'react'
import Inner_common_banner from '../Common/Inner-common-banner'
import Deliverybody from './Deliverybody'
import deliveryimg from '../../assets/delivery/b1.jpg'
import usePageMeta from '../Seo/Seo'

const DeliveryInformation = () => {
  usePageMeta({
    title:'Delivery Information',
    description:'Gabapentinshop Delivery Information',
    keywords:'Gabapentinshop Delivery Information',
  });
  return (
    <div>
      <Inner_common_banner title={"Delivery Information"} subtitle={"Delivery Information"} background={deliveryimg}/>
      <Deliverybody/>
    </div>
  )
}

export default DeliveryInformation
