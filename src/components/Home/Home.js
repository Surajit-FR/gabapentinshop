import React, { useEffect } from 'react'

import Homebanner from './Homebanner'
import Product from './Product'
import About from '../Common/About'
import Blog from './Blog'
import Testimonials from '../Common/Testimonials'
import Getfree from './Getfree'

import usePageMeta from '../Seo/Seo'
import { useDispatch, useSelector } from 'react-redux'
import { getHomePageData } from '../../store/thunks/homeThunk'
import Preloader from '../Preloader/Preloader'

const Home = () => {

    usePageMeta({
        title: 'Home',
        description: 'Gabapentinshop Home',
        keywords: 'Gabapentinshop Home',
    });

    const dispatch = useDispatch()
    const { homeData } = useSelector(state => state.home)

    useEffect(() => {
        dispatch(getHomePageData())
    }, [dispatch])

    return (
        <>
        <Preloader/>
            <Homebanner data={homeData?.banner_data}/>
            <About 
            data={homeData?.about_data} 
            />
            <Product />
            <Testimonials data={homeData?.testimonial_data}/>
            <Getfree />
            <Blog />
        </>
    )
}

export default Home
