import React, { useEffect } from 'react'
import Inner_common_banner from '../Common/Inner-common-banner'
import Returnsbody from './Returnsbody'
import returnsimg from '../../assets/returns/b1.jpg'
import usePageMeta from '../Seo/Seo'
import { useDispatch, useSelector } from 'react-redux'
import { getReturnPolicydata } from '../../store/thunks/homeThunk'

const ReturnsPolicy = () => {
  usePageMeta({
    title:'Returns Policy',
    description:'Gabapentinshop Returns Policy',
    keywords:'Gabapentinshop Returns Policy',
});
const dispatch = useDispatch()
const {returnPolicydata} = useSelector(state=> state.home)
useEffect(()=>{
  dispatch(getReturnPolicydata())
},[dispatch])
  return (
    <div>
        <Inner_common_banner title={"Returns Policy"} subtitle={"Returns Policy"} background={returnsimg}/>
        <Returnsbody data={returnPolicydata}/>
    </div>
  )
}

export default ReturnsPolicy
