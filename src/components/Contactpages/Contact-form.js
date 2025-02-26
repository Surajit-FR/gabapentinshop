import React from 'react'
import { useState, useEffect, useCallback } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Contact_form = ({ data }) => {

    const navigate = useNavigate()
    const [formDta, setFormData] = useState({
    })
    const [errors, setErrors] = useState({});
    const [submitting, setSubmitting] = useState(false);
    const [loading, setLoading] = useState(false)

    const onChangeValue = (e) => {
        setErrors({})
        setSubmitting(false)
        setFormData({
            ...formDta,
            [e.target.name]: e.target.value
        })
    }
    const validateValues = (inputValues) => {
        let errors = {};
        if (!inputValues.name) {
            errors.name = "Name is Required";
        }
        if (!inputValues.email || !inputValues.email.includes('@')) {
            errors.email = "Valid email is required";
        }
        if (!inputValues.phone) {
            errors.phone = "Phone is Required";
        }
        if (!inputValues.message) {
            errors.message = "Message is required";
        }
        return errors;
    };
    const onSubmit = (e) => {
        e.preventDefault()
        setErrors(validateValues(formDta));
        setSubmitting(true);

    }
    const dataToEmit = data && data.length > 0 && data.map((item) =>

        item.get_in_touch_content
    )
    const htmlContent = (value) => {
        if (value && value.length > 0) {
            return `<div>${value.toString()} </div>`
        }
        return ''

    }
    const tc = document.getElementById("textContent")
    if (tc && dataToEmit && dataToEmit.length > 0) {
        tc.innerHTML = htmlContent(dataToEmit)
    }

    const finishSubmit = useCallback(() => {
        setLoading(true)
        navigate('/thank-you')
        // emailjs
        //     .sendForm(SERVICE_ID, YOUR_TEMPLATE_ID, form.current, {
        //         publicKey: YOUR_PUBLIC_KEY,
        //     })
        //     .then(
        //         () => {
        //             console.log('SUCCESS!');
        //             setSubmitting(false)
        //             setLoading(false)
        //             alert("Form Submitted Successfully")
        //         },
        //         (error) => {
        //             console.log('FAILED...', error.text);
        //             setSubmitting(false)
        //             setLoading(false)
        //             alert("Something Went Wrong...Please try Again Later")

        //         },
        //     );
        // setSubmitting(false)
    }, [])
    useEffect(() => {
        if (Object.keys(errors).length === 0 && submitting) {
            finishSubmit();
        }
    }, [errors, submitting, finishSubmit]);
    return (
        <div>
            <div className="contact_layout1">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-7">
                            <div className="heading-layout2 mb-50">
                                {data && data.length > 0 && data.map((item, index) => (

                                    <h3 className="mb-3" key={index}>{item.get_in_touch_caption}</h3>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-4">
                            <div className="text-block" id="textContent">
                            </div>
                            <Link to="/shop" className="shop_btn">
                                <span>Shop Now</span>
                                <i className="icon-arrow-right"></i>
                            </Link>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-8">
                            <form className="contact-panel-form" id="contactForm" onSubmit={onSubmit}>
                                <div className="row">
                                    <div className="col-sm-12 col-md-4 col-lg-4">
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Name" name="name" onChange={onChangeValue} />
                                        </div>
                                        {errors.name ? (
                                            <p className="error">
                                                {errors.name}
                                            </p>
                                        ) : null}
                                    </div>
                                    <div className="col-sm-12 col-md-4 col-lg-4">
                                        <div className="form-group">
                                            <input type="email" className="form-control" placeholder="Email" name="email" onChange={onChangeValue} />
                                        </div>
                                        {errors.email ? (
                                            <p className="error">
                                                {errors.email}
                                            </p>
                                        ) : null}
                                    </div>
                                    <div className="col-sm-12 col-md-4 col-lg-4">
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Phone" name="phone" onChange={onChangeValue} />
                                        </div>
                                        {errors.phone ? (
                                            <p className="error">
                                                {errors.phone}
                                            </p>
                                        ) : null}
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group">
                                            <textarea className="form-control height_1" placeholder="Additional Details"
                                                name="message"
                                                onChange={onChangeValue}
                                            ></textarea>
                                        </div>
                                        {errors.message ? (
                                            <p className="error">
                                                {errors.message}
                                            </p>
                                        ) : null}
                                        <button type="submit" className="request_btn mt-10">
                                            <span>Submit Request</span> <i className="icon-arrow-right"></i>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact_form
