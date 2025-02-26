import React, { useEffect } from 'react'
import Inner_common_banner from '../Common/Inner-common-banner'
import privacyimg from '../../assets/policy/b1.webp'
import Privacy_body from './Privacy-body'
import usePageMeta from '../Seo/Seo'
import { useDispatch, useSelector } from 'react-redux'
import { getPrivacyPolicyData } from '../../store/thunks/homeThunk'

const Privacy_policy = () => {
  usePageMeta({
    title: 'Privacy Policy',
    description: 'Gabapentinshop Privacy Policy',
    keywords: 'Gabapentinshop Privacy Policy',
  });
  const dispatch = useDispatch()
  const { privacyPolicyData } = useSelector(state => state.home)
  
  useEffect(()=>{
    dispatch(getPrivacyPolicyData())
  },[dispatch])

  return (
    <div>
      <Inner_common_banner title={"Privacy policy"} subtitle={"Privacy policy"} background={privacyimg} />
      <Privacy_body data={privacyPolicyData}/>
    </div>
  )
}

export default Privacy_policy
