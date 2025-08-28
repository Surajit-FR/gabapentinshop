import React, { useEffect } from 'react'
import Inner_common_banner from '../Common/Inner-common-banner'
import Contact_form from './Contact-form'
import Contact_map from './Contact-map'
import contactinnerimg from '../../img/contact/inner1.jpg'
import usePageMeta from '../Seo/Seo'
import { useDispatch, useSelector } from 'react-redux'
import { getContactData } from '../../store/thunks/contactUsThunk'


const Contactinner = () => {

const dispatch= useDispatch()
const {contactUsData, meta_tags_contct_us} = useSelector(state=> state.contact)
usePageMeta({
  title:meta_tags_contct_us?.meta_title,
  description:meta_tags_contct_us?.meta_description,
  keywords:meta_tags_contct_us?.meta_keyword,
  canonic: 'https://gabapentinshop.com/contact-us',
});
useEffect(()=>{
  dispatch(getContactData())
},[dispatch])
  return (
    <>
      <Inner_common_banner title={"Contact Us"} subtitle={"Contact Us"} background={contactinnerimg}/>
      <Contact_form data={contactUsData}/>
      <Contact_map/>
    </>
  )
}

export default Contactinner
