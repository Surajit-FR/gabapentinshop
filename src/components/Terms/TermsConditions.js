import React from 'react'
import Inner_common_banner from '../Common/Inner-common-banner'
import Termsbody from './Termsbody'
import termsimg from '../../assets/terms/b1.jpg'

import usePageMeta from '../Seo/Seo'

const TermsConditions = () => {
  usePageMeta({
    title:'Terms & Conditions',
    description:'Gabapentinshop Terms & Conditions',
    keywords:'Gabapentinshop Terms & Conditions',
});


  return (
    <div>
      <Inner_common_banner title={"Terms & Conditions"} subtitle={"Terms & Conditions"} background={termsimg} />
      <Termsbody/>
    </div>
  )
}

export default TermsConditions
