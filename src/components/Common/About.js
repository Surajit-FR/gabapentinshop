import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getHomePageData } from '../../store/thunks/homeThunk'


const About = () => {
 const dispatch = useDispatch()
    const { homeData } = useSelector(state => state.home)

    useEffect(() => {
        dispatch(getHomePageData())
    }, [dispatch])
    const data=homeData?.about_data
    const ac = document.getElementById('aboutContents')
    if(ac && data && data.length>0){
        ac.innerHTML = data.map(item=> item.about_content)
    }
  return (
    <div>
        <div className='about-layout2'>
            <div className='container'>
                <div className="row">
                    <div className="col-sm-12 col-md-10 col-lg-7 col-xl-7">
                        <div className="tile-gallery mb-xl-50">
                            <div className="image-one">
                                <img className="animate-float-bob-x" src={require("../../assets/about/2.jpg")} alt="dummy 1" />
                            </div>
                            <div className="image-two">
                                <img src={require("../../assets/about/1.jpg")} alt="dummy two" />
                            </div>
                            <div className="image-three">
                                <img src={require("../../assets/about/3.jpg")} alt="dummy three" />
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-10 col-lg-5 col-xl-5">
                        <div className="about-Text">
                            <h2 className="wow animate__fadeInUp" data-wow-delay="0.3s" id="aboutContents"></h2>
                            <p className="mb-30">
                                {/* {data && data.length> 0 && data.map(item=> item.about_content)} */}
                            </p>
                            <ul className="features-list-layout2 list-unstyled mb_10">
                                <li className="feature-item">
                                    <span className='feature-icon'></span>
                                    <h4 className="feature-title mb-0">Quality Assurance</h4>
                                </li>
                                <li className="feature-item">
                                    <span className='feature-icon'></span>
                                    <h4 className="feature-title mb-0">Expert Guidance</h4>
                                </li>
                                <li className="feature-item">
                                    <span className='feature-icon'></span>
                                    <h4 className="feature-title mb-0">Customer Care</h4>
                                </li>
                            </ul>
                            <div className="author-meta d-flex flex-wrap align-items-center mr-30">
                                <div className="author-img">
                                    <img src={require("../../assets/about/7.jpg")} alt="thumb"/>
                                </div>
                                <div>
                                    <h4 className="author-title">Jane Winston</h4>
                                    <span className="author-desc">Our Founder</span>
                                </div>
                                <img className="author-singnture" src={require("../../assets/about/singnture2.png")} alt="demo pic"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About
