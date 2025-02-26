import React, { useEffect } from 'react'
import Inner_common_banner from '../Common/Inner-common-banner'
import Contact_form from './Contact-form'
import Contact_map from './Contact-map'
import contactinnerimg from '../../img/contact/inner1.jpg'
import usePageMeta from '../Seo/Seo'
import { useDispatch, useSelector } from 'react-redux'
import { getContactData } from '../../store/thunks/contactUsThunk'


const Contactinner = () => {
  usePageMeta({
      title:'Contact Us',
      description:'Gabapentinshop Contact Us',
      keywords:'Gabapentinshop Contact Us',
  });
const dispatch= useDispatch()
const {contactUsData} = useSelector(state=> state.contact)
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
