import React, { useEffect } from 'react'
import Inner_common_banner from '../Common/Inner-common-banner'
import Faq_body from './Faq-body'
import faqinnerimg from '../../img/faqs/inner1.jpg'
import usePageMeta from '../Seo/Seo'
import { useDispatch, useSelector } from 'react-redux'
import { getFaqData } from '../../store/thunks/faqThunk'


const Faqinner = () => {
  const dispatch = useDispatch()
  const { faqData } = useSelector(state => state.faq)
  usePageMeta({
    title: 'Faqs',
    description: 'Gabapentinshop Faqs',
    keywords: 'Gabapentinshop Faqs',
  });
  useEffect(() => {
    dispatch(getFaqData())
  }, [dispatch])

  return (
    <>

      <Inner_common_banner title={"Faqs"} subtitle={"Faqs"} background={faqinnerimg} />
      <Faq_body data={faqData} />

    </>
  )
}

export default Faqinner
