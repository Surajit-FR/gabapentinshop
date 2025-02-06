import React from 'react'
import Inner_common_banner from '../Common/Inner-common-banner'
import Returnsbody from './Returnsbody'
import returnsimg from '../../assets/returns/b1.jpg'
import usePageMeta from '../Seo/Seo'

const ReturnsPolicy = () => {
  usePageMeta({
    title:'Returns Policy',
    description:'Gabapentinshop Returns Policy',
    keywords:'Gabapentinshop Returns Policy',
});
  return (
    <div>
        <Inner_common_banner title={"Returns Policy"} subtitle={"Returns Policy"} background={returnsimg}/>
        <Returnsbody/>
    </div>
  )
}

export default ReturnsPolicy
