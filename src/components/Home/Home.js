import React from 'react'

import Homebanner from './Homebanner'
import Product from './Product'
import About from '../Common/About'
import Blog from './Blog'
import Testimonials from '../Common/Testimonials'
import Getfree from './Getfree'

import usePageMeta from '../Seo/Seo'

const Home = () => {

    usePageMeta({
        title:'Home',
        description:'Gabapentinshop Home',
        keywords:'Gabapentinshop Home',
    });

    return (
        <>
            <Homebanner />
            <About/>
            <Product />
            <Testimonials />
            <Getfree />
            <Blog /> 
        </>
    )
}

export default Home
