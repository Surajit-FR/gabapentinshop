import React, { useEffect } from 'react'
import Inner_common_banner from '../Common/Inner-common-banner'
import Termsbody from './Termsbody'
import termsimg from '../../assets/terms/b1.jpg'

import usePageMeta from '../Seo/Seo'
import { useDispatch, useSelector } from 'react-redux'
import { getTermsAndConditionsData } from '../../store/thunks/homeThunk'

const TermsConditions = () => {
  usePageMeta({
    title:'Terms & Conditions',
    description:'Gabapentinshop Terms & Conditions',
    keywords:'Gabapentinshop Terms & Conditions',
});
const dispatch = useDispatch()
const {termsAndConditions} = useSelector(state=> state.home)

useEffect(()=>{
  dispatch(getTermsAndConditionsData())
},[dispatch])

  return (
    <div>
      <Inner_common_banner title={"Terms & Conditions"} subtitle={"Terms & Conditions"} background={termsimg} />
      <Termsbody data={termsAndConditions}/>
    </div>
  )
}

export default TermsConditions
