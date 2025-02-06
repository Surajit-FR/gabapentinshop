import React from 'react'
import Inner_common_banner from '../Common/Inner-common-banner'
import Faq_body from './Faq-body'
import faqinnerimg from '../../img/faqs/inner1.jpg'
import usePageMeta from '../Seo/Seo'


const Faqinner = () => {

  usePageMeta({
      title:'Faqs',
      description:'Gabapentinshop Faqs',
      keywords:'Gabapentinshop Faqs',
  });

  return (
    <>
 
      <Inner_common_banner title={"Faqs"} subtitle={"Faqs"} background={faqinnerimg}/>
      <Faq_body/>
      
    </>
  )
}

export default Faqinner
