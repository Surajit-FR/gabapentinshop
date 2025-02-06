import React from 'react'
import { Link } from 'react-router-dom'
const Blog_single_body = () => {
  return (
    <div>
        <div className="blog_single">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-8">
                        <div className="post-item-single">
                            <div className="post-img">
                                <div className="post-meta-date">
                                    <span className="day">30</span>
                                    <span className="month">Jan 2022</span>
                                </div>
                                <Link to="#">
                                    <img src={require("../../assets/blog/singel-1.jpg")} alt="pic"/>
                                </Link>
                            </div>
                            <div className="post-body pb-0">
                                <div className="post-desc">
                                    <p>Driven by the principles of cooperation, coordination, collaboration and communication, the goal of
                                    the continental strategy is to prevent severe illness and death from COVID-19 infection in African
                                    Union Member States and minimize social disruption and the economic consequences of COVID-19. PACT
                                    aims to strengthen capacity to test for COVID-19 across Africa, with emphasis on countries that have
                                    only minimal capacity.</p>
                                    <p> This will ensure that at least 10 million Africans, who would have not been tested, get tested in
                                    the next six months. PACT will help meet the need of the Heads of State and Government for an
                                    Africa-led and Africa-owned response.</p>
                                <div className="row">
                                    <div className="col-md-6">
                                        <img className="singel" src={require("../../assets/blog/singel-2.jpg")} alt="pic"/>
                                    </div>
                                    <div className="col-md-6">
                                        <img className="singel" src={require("../../assets/blog/singel-3.jpg")} alt="pic"/>
                                    </div>
                                </div>
                                    <p>“As businesses, we are nothing without a healthy and productive workforce. I cannot express in
                                    words the gratitude many of us feel for the renewed mandate of Africa CDC from the African Union to
                                    accelerate testing through the PACT initiative so that we can more effectively treat our compatriots
                                    who have succumbed to this disease.” </p>
                                    <p>PACT will be coordinated and led by Africa CDC, in close collaboration with the Africa Task Force
                                    for Coronavirus (AFTCOR). Subsidiary initiatives shall cover the technology dimension, social
                                    marketing and communications, knowledge sharing and dissemination, among others. AfroChampions, the
                                    pan-African business leadership network, is a strategic partner for mobilising the continental
                                    private sector in support of the subsidiary initiatives.</p>
                                    <p>Africa CDC, with the mandate of the African Union Commission, shall embark on multi-stakeholder
                                    partnerships to advance this and other subsidiary initiatives. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-4">
                        <aside className="sidebar has-marign-left ">
                            <div className="widget widget-posts">
                                <h5 className="widget-title">Recent Posts</h5>
                                <div className="widget-content">
                                
                                <div className="widget-post-item d-flex align-items-center">
                                    <div className="widget-post-img">
                                        <Link to="/">
                                            <img src={require("../../assets/blog/post-1.jpg")} alt="thumb"/>
                                        </Link>
                                    </div>
                                    <div className="widget-post-content">
                                        <span className="widget-post-date">Sep 19, 2022</span>
                                        <h4 className="widget-post-title">
                                            <Link to="/">Succession Risks That Threaten Your Leadership</Link>
                                        </h4>
                                    </div>
                                </div>
                                
                                    <div className="widget-post-item d-flex align-items-center">
                                        <div className="widget-post-img">
                                            <Link to="/">
                                                <img src={require("../../assets/blog/post-1.jpg")} alt="thumb"/>
                                            </Link>
                                        </div>
                                        <div className="widget-post-content">
                                            <span className="widget-post-date">July 7, 2022</span>
                                            <h4 className="widget-post-title">
                                                <Link to="/">Do Employee Surveys Tell About Employee?</Link>
                                            </h4>
                                        </div>
                                    </div>
                                
                                    <div className="widget-post-item d-flex align-items-center">
                                        <div className="widget-post-img">
                                            <Link to="/">
                                                <img src={require("../../assets/blog/post-1.jpg")} alt="thumb"/>
                                            </Link>
                                        </div>
                                        <div className="widget-post-content">
                                            <span className="widget-post-date">March 13, 2022</span>
                                            <h4 className="widget-post-title">
                                                <Link to="/">Succession Risks That Threaten Your Leadership</Link>
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="widget widget-categories">
                                <h5 className="widget-title">Categories</h5>
                                <div className="widget-content">
                                    <ul className="list-unstyled mb-0">
                                        <li>
                                            <Link to="/">
                                                <span className="cat-title">Baclofen</span>
                                                <span className="cat-count">2</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/">
                                                <span className="cat-title">Gabapentin</span>
                                                <span className="cat-count">4</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/">
                                                <span className="cat-title">Generic Fioricet</span>
                                                <span className="cat-count">3</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/">
                                                <span className="cat-title">Methocarbamol</span>
                                                <span className="cat-count">12</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/">
                                                <span className="cat-title">Zanaflex</span>
                                                <span className="cat-count">7</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/">
                                                <span className="cat-title">Viagra</span>
                                                <span className="cat-count">5</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Blog_single_body
