import React from 'react'
import Inner_common_banner from '../Common/Inner-common-banner'
import Contact_form from './Contact-form'
import Contact_map from './Contact-map'
import contactinnerimg from '../../img/contact/inner1.jpg'
import usePageMeta from '../Seo/Seo'


const Contactinner = () => {
  usePageMeta({
      title:'Contact Us',
      description:'Gabapentinshop Contact Us',
      keywords:'Gabapentinshop Contact Us',
  });

  return (
    <>
      <Inner_common_banner title={"Contact Us"} subtitle={"Contact Us"} background={contactinnerimg}/>
      <Contact_form/>
      <Contact_map/>
    </>
  )
}

export default Contactinner
