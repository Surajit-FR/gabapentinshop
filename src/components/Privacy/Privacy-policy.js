import React from 'react'
import Inner_common_banner from '../Common/Inner-common-banner'
import privacyimg from '../../assets/policy/b1.webp'
import Privacy_body from './Privacy-body'
import usePageMeta from '../Seo/Seo'

const Privacy_policy = () => {
  usePageMeta({
    title:'Privacy Policy',
    description:'Gabapentinshop Privacy Policy',
    keywords:'Gabapentinshop Privacy Policy',
  });

  return (
    <div>
      <Inner_common_banner title={"Privacy policy"} subtitle={"Privacy policy"} background={privacyimg}/>
      <Privacy_body/>
    </div>
  )
}

export default Privacy_policy
