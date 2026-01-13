import React, { useEffect } from 'react'
import Inner_common_banner from '../Common/Inner-common-banner'
import Faq_body from './Faq-body'
import faqinnerimg from '../../img/faqs/inner1.jpg'
import usePageMeta from '../Seo/Seo'
import { useDispatch, useSelector } from 'react-redux'
import { getFaqData } from '../../store/thunks/faqThunk'
import Preloader from '../Preloader/Preloader'


const Faqinner = () => {
  const dispatch = useDispatch()
  const { faqData , meta_tags_faq_page} = useSelector(state => state.faq)
  usePageMeta({
    title: meta_tags_faq_page?.meta_title,
    description: meta_tags_faq_page?.meta_description,
    keywords: meta_tags_faq_page?.meta_keyword,
  });
  useEffect(() => {
    dispatch(getFaqData())
  }, [dispatch])

  return (
    <>
        <Preloader/>

      <Inner_common_banner title={"Faqs"} subtitle={"Faqs"} background={faqinnerimg} />
      <Faq_body data={faqData} />

    </>
  )
}

export default Faqinner
