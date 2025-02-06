import React from 'react'
import { Link } from 'react-router-dom'

const Faq_body = () => {
  return (
    <div>
        <div className="faq">
            <div className="container">

                
                <div className="row">
                    <div className="col-12">
                        <div className="heading-layout2">
                            <h2>Frequently Asked Questions</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-8">
                        <div className="accordion" id="accordionExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        How much gabapentin can I take for pain?
                                    </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                    <p>It is also useful for treatment of chronic neuropathic pain. Gabapentin comes in many sizes including 100,
                                        300, 400, 600, and 800 mg. The usual dose is 1800-5400 mg a day but the dose can vary depending on how well 
                                        it works for you and your tolerance of the medication.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        Is gabapentin good for back pain?
                                    </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p>
                                            People with radiating chronic spine pain may be prescribed gabapentin or pregabalin to treat
                                            their nerve-related neck, back and/or leg pain. ... While all prescription and OTC drugs carry risk for
                                            side effects, the FDA has released a special safety alert specifically for gabapentin and pregabalin.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" 
                                    data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        Is Gabapentin a muscle relaxer?
                                    </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p>
                                            Gabapentin is an anti-seizure (anticonvulsant) medication used to prevent seizures and to treat 
                                            post-herpetic neuralgia, the pain that follows an episode of shingles. Baclofen is a muscle relaxant 
                                            used to treat skeletal muscle spasms, muscle clonus, rigidity, and pain caused by disorders such as
                                            multiple sclerosis.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" 
                                    data-bs-target="#collapsefour" aria-expanded="false" aria-controls="collapsefour">
                                        Is gabapentin considered a painkiller?
                                    </button>
                                </h2>
                                <div id="collapsefour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p>
                                        Gabapentin, also known by the brand name Neurontin, is a prescription painkiller belonging to its own drug class,
                                        Gabapentinoids. It is considered an anti-convulsant,  and is most commonly used to treat epilepsy, restless 
                                        leg syndrome, hot flashes, and neuropathic pain.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" 
                                    data-bs-target="#collapsefive" aria-expanded="false" aria-controls="collapsefive">
                                        What is the most common side effect of gabapentin?
                                    </button>
                                </h2>
                                <div id="collapsefive" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p>Dizziness and drowsiness are common gabapentin side effects. Weight gain and uncoordinated movement
                                            are possible side effects.
                                        </p>
                                    </div>
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
                        </aside>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Faq_body
