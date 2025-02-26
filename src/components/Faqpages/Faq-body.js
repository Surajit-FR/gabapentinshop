import React from 'react'


const Faq_body = ({ data }) => {
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
                        <div className="col-sm-12 col-md-12 col-lg-12">
                            <div className="accordion" id="accordionExample">

                                {data && data.length > 0 && data.map((ques, index) => (
                                    <div className="accordion-item" key={index}>
                                        <h2 className="accordion-header">
                                            <button className="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target={`#collapse${index}`}

                                                aria-expanded="false"
                                                aria-controls={`collapse${index}`}
                                            >
                                                {ques.faq_questions}
                                            </button>
                                        </h2>
                                        <div id={`collapse${index}`} className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <p>
                                                    {ques.faq_answers}
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                ))}

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Faq_body
