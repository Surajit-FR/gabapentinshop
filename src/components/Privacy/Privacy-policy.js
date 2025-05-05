import React, { useEffect } from 'react'
import Inner_common_banner from '../Common/Inner-common-banner'
import privacyimg from '../../assets/policy/b1.webp'
import Privacy_body from './Privacy-body'
import usePageMeta from '../Seo/Seo'
import { useDispatch, useSelector } from 'react-redux'
import { getPrivacyPolicyData } from '../../store/thunks/homeThunk'

const Privacy_policy = () => {
  const dispatch = useDispatch()
  const { privacyPolicyData } = useSelector(state => state.home)

  usePageMeta({
    title: privacyPolicyData?.meta_data?.meta_title,
    description: privacyPolicyData?.meta_data?.meta_description,
    keywords: privacyPolicyData?.meta_data?.meta_keyword,
});

  useEffect(()=>{
    dispatch(getPrivacyPolicyData())
  },[dispatch])

  return (
    <div style={{background:'red'}}>
      <Inner_common_banner title={"Privacy policy"} subtitle={"Privacy policy"} background={privacyimg} />
      <Privacy_body data={privacyPolicyData}/>
    </div>
  )
}

export default Privacy_policy
