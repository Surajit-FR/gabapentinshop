import React from 'react'


const About = () => {
  return (
    <div>
        <div className='about-layout2'>
            <div className='container'>
                <div className="row">
                    <div className="col-sm-12 col-md-10 col-lg-7 col-xl-7">
                        <div className="tile-gallery mb-xl-50">
                            <div className="image-one">
                                <img className="animate-float-bob-x" src={require("../../assets/about/2.jpg")} alt="Image" />
                            </div>
                            <div className="image-two">
                                <img src={require("../../assets/about/1.jpg")} alt="Image" />
                            </div>
                            <div className="image-three">
                                <img src={require("../../assets/about/3.jpg")} alt="Image" />
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-10 col-lg-5 col-xl-5">
                        <div className="about-Text">
                            <h2 className="wow animate__fadeInUp" data-wow-delay="0.3s">About GabapentinShop</h2>
                            <p className="mb-30">Welcome to GabapentinShop, your trusted source for high-quality medications, including gabapentin 
                                and Fioricet. At GabapentinShop, we prioritize your health and well-being, offering a seamless online shopping 
                                experience backed by professional expertise and a commitment to excellence.
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
                                <img className="author-singnture" src={require("../../assets/about/singnture2.png")} alt="pic"/>
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
