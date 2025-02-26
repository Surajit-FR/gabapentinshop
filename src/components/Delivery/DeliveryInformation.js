import React, { useEffect } from 'react'
import Inner_common_banner from '../Common/Inner-common-banner'
import Deliverybody from './Deliverybody'
import deliveryimg from '../../assets/delivery/b1.jpg'
import usePageMeta from '../Seo/Seo'
import { useDispatch, useSelector } from 'react-redux'
import { getDeliveryInfoData } from '../../store/thunks/homeThunk'

const DeliveryInformation = () => {
  usePageMeta({
    title: 'Delivery Information',
    description: 'Gabapentinshop Delivery Information',
    keywords: 'Gabapentinshop Delivery Information',
  });

  const dispatch = useDispatch()
  const { deliveryInfodata } = useSelector(state => state.home)

  useEffect(()=>{
    dispatch(getDeliveryInfoData())
  },[dispatch])

  return (
    <div>
      <Inner_common_banner title={"Delivery Information"} subtitle={"Delivery Information"} background={deliveryimg} />
      <Deliverybody data={deliveryInfodata}/>
    </div>
  )
}

export default DeliveryInformation
