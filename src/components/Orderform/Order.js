
import { useEffect, useState, useRef } from "react";
import usePageMeta from "../Seo/Seo";
import { getAllProducts } from '../../store/thunks/productThunk';
import { useDispatch, useSelector } from 'react-redux';
import emailjs from '@emailjs/browser';

const SERVICE_ID = "service_jffft35"
const YOUR_TEMPLATE_ID ="template_2ynn5ap"
const YOUR_PUBLIC_KEY = "mon7ZTBXHdv7oXhEK"

const Order = () => {
    const { productsPercategory } = useSelector(state => state.products)
    const form = useRef();
    const dispatch = useDispatch()
    const [selectedProduct, setSelectedProduct] = useState({})
    const [formDta, setFormData] = useState({
    })
    const [error, setError]= useState('')
    const onChangeValue = (e) => {
        setFormData({
            ...formDta,
            [e.target.name]: e.target.value
        })
    }





    useEffect(() => {
        dispatch(getAllProducts())
    }, [dispatch])
    const validate =()=>{
        if(!formDta.product){
            setError("please select a product")
        }
        if(!formDta.firstName){
            setError("please enter First Name")
        }
        if(!formDta.lastName){
            setError("please enter Last Name ")
        }
        if(!formDta.address){
            setError("please enter address")
        }
        if(!formDta.city){
            setError("please enter city")
        }
        if(!formDta.country){
            setError("please enter country")
        }
        if(!formDta.state){
            setError("please enter state")
        }
        if(!formDta.date){
            setError("please enter date")
        }
        if(!formDta.zip){
            setError("please enter zipcode")
        }
        if(!formDta.height){
            setError("please enter height")
        }
        if(!formDta.weight){
            setError("please enter weight")
        }
        // return false
    }
    // const [selectedOption, setSelectedOption] = useState("");

    // const handleOptionChange = (event) => {
    //   setSelectedOption(event.target.value);
    // };
    const onSubmit=(e)=>{
        e.preventDefault()
        emailjs
        .sendForm(SERVICE_ID, YOUR_TEMPLATE_ID, form.current, {
          publicKey: YOUR_PUBLIC_KEY,
        })
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    }
    // console.log({ error })
    usePageMeta({
        title: 'Order',
        description: 'Gabapentinshop Order',
        keywords: 'Gabapentinshop Order',
    });
useEffect(()=>{
if(selectedProduct){
    console.log(selectedProduct)
    setFormData(prevState=> ({
        ...prevState,
        name:selectedProduct.title,
        id:selectedProduct.id,
        price:selectedProduct.regular_price

    }
    ))
}
},[selectedProduct])
    return (
        <div>



            <div className='online_order'>
                <div className='container'>
                    <form className='order_box_123'
                    //  onSubmit={onSubmit}
                      ref={form}>
                        <div className='row'>
                            <div className='col-md-6'>
                                <div className='order_input'>
                                    <h4>Select Your Product <span>*</span></h4>
                                    <select className="form-control" onChange={e => setSelectedProduct(productsPercategory.filter(item => item.id == e.target.value)[0])} value={selectedProduct.title} name="product">
                                        <option value="">Select Your Product</option>
                                        {productsPercategory && productsPercategory.length > 0 && productsPercategory.map(product =>
                                        (
                                            <option key={product.id} value={product.id}>{product.title}</option>
                                        )
                                        )}
                                    </select>
                                </div>
                            </div>
                            <input value={selectedProduct.title} style={{display:"none"}} name="product" readOnly/> 
                            <input value={selectedProduct.id} style={{display:"none"}} name="id" readOnly/>
                            <div className='col-md-6'>
                                <div className='order_input'>
                                    <h4>Product Price <span>*</span></h4>
                                    <input type="text" className="form-control" placeholder="" name="productPrice" value={`$${selectedProduct.regular_price || 0}`} readOnly/>
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className='order_input'>
                                    <h4>First Name <span>*</span></h4>
                                    <input type="text" className="form-control" placeholder="" name="firstName" required onChange={onChangeValue} />
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className='order_input'>
                                    <h4>Last Name <span>*</span></h4>
                                    <input type="text" className="form-control" placeholder="" name="lastName" required onChange={onChangeValue} />
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className='order_input'>
                                    <h4>Phone Number <span>*</span></h4>
                                    <input type="text" className="form-control" placeholder="" name="phoneNumber" required onChange={onChangeValue} />
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className='order_input'>
                                    <h4>Email Address <span>*</span></h4>
                                    <input type="email" className="form-control" placeholder="" name="email" required onChange={onChangeValue} />
                                </div>
                            </div>
                            <div className='col-md-12'>
                                <div className='order_input'>
                                    <h4>Address<span>*</span></h4>
                                    <textarea className="form-control note_i" placeholder="" name="address" required onChange={onChangeValue}></textarea>
                                </div>
                            </div>

                            <div className='col-md-6'>
                                <div className='order_input'>
                                    <h4>City <span>*</span></h4>
                                    <input type="text" className="form-control" placeholder="" name="city" required onChange={onChangeValue} />
                                </div>
                            </div>

                            <div className='col-md-6'>
                                <div className='order_input'>
                                    <h4>State/Province <span>*</span></h4>
                                    <input type="text" className="form-control" placeholder="" name="state" required onChange={onChangeValue} />
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className='order_input'>
                                    <h4>Zip/Postal Code <span>*</span></h4>
                                    <input type="text" className="form-control" placeholder="" name="zip" required onChange={onChangeValue} />
                                </div>
                            </div>


                            <div className='col-md-6'>
                                <div className='order_input'>
                                    <h4>Country <span>*</span></h4>
                                    <select className="form-control" name="country" required onChange={onChangeValue}>
                                        <option value="">-- Select a Country --</option>
                                        <option value="United States">United States</option>
                                        <option value="Canada">Canada</option>
                                        <option value="India">India</option>
                                        <option value="United Kingdom">United Kingdom</option>
                                        <option value="Australia">Australia</option>
                                        <option value="Germany">Germany</option>
                                        <option value="France">France</option>
                                        <option value="Japan">Japan</option>
                                        <option value="China">China</option>
                                        <option value="Brazil">Brazil</option>
                                    </select>
                                </div>
                            </div>

                            <div className='col-md-6'>
                                <div className='order_input'>
                                    <h4>Gender <span>*</span></h4>
                                    <select className="form-control" required name="gender" onChange={onChangeValue}>
                                        <option value="">-- Select Gender --</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className='order_input'>
                                    <h4>Date Of Birth <span>*</span></h4>
                                    <input type="date" className="form-control" placeholder="" name="date" required onChange={onChangeValue} />
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className='order_input'>
                                    <h4>Height <span>*</span></h4>
                                    <input type="text" className="form-control" placeholder="" name="height" required onChange={onChangeValue} />
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className='order_input'>
                                    <h4>Weight <span>*</span></h4>
                                    <input type="text" className="form-control" placeholder="" name="weight" required onChange={onChangeValue} />
                                </div>
                            </div>
                            <div className='col-md-12'>
                                <div className='order_input border_top_1'>
                                    <h3>I agree not to take any over-the-counter medicines without approval from my pharmacist.
                                    </h3>
                                    <ul className='agree_list'>
                                        <li>
                                            <input type="radio" id="agree-1" name="isPregnant" value="I agree" onChange={onChangeValue}/>
                                            <label htmlFor="agree-1">I agree</label>
                                        </li>

                                        <li>
                                            <input type="radio" id="agree-2" name="isPregnant" value="I Disagree" onChange={onChangeValue}/>
                                            <label htmlFor="agree-2">I Disagree</label>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className='col-md-12'>
                                <div className='order_input mt-3'>
                                    <h3>If you disagree, please explain why I agree not to take medication if I am pregnant, breast-feeding,
                                        or trying to get pregnant.
                                    </h3>
                                    <ul className='agree_list'>
                                        <li>
                                            <input type="radio" id="agree-3" name="noMedication" value="I agree" />
                                            <label htmlFor="agree-3">I agree</label>
                                        </li>
                                        <li>
                                            <input type="radio" id="agree-4" name="noMedication" value="I Disagree" />
                                            <label htmlFor="agree-4">I Disagree</label>
                                        </li>
                                    </ul>
                                    <h4 className='mt-3'>If you disagree, please explain why:</h4>
                                    <textarea className="form-control note_2" placeholder="" name="noMedication"></textarea>

                                </div>
                            </div>
                            <div className='col-md-12'>
                                <div className='order_input mt-3'>
                                    <h3>Please list all current medical conditions. Choose "None" if none
                                    </h3>
                                    <ul className='agree_list'>
                                        <li>
                                            <input type="radio" id="agree-5" name="medicalCondition" value="I agree" onChange={onChangeValue}/>
                                            <label htmlFor="agree-5">None</label>
                                        </li>
                                        <li>
                                            <input type="radio" id="agree-6" name="medicalCondition" value="I Disagree" onChange={onChangeValue}/>
                                            <label htmlFor="agree-6">I will Specify</label>
                                        </li>
                                    </ul>
                                    <textarea className="form-control note_2 mt-3" placeholder="" name="medicalCondition" onChange={onChangeValue}></textarea>
                                </div>
                            </div>
                            <div className='col-md-12'>
                                <div className='order_input mt-3'>
                                    <h3>Is there anything in your medical history that you consider to be relevant? If yes, please specify. Choose "None" if none.
                                    </h3>
                                    <ul className='agree_list'>
                                        <li>
                                            <input type="radio" id="agree-7" name="medicalHistory" value="I agree" onChange={onChangeValue}/>
                                            <label htmlFor="agree-7">None</label>
                                        </li>
                                        <li>
                                            <input type="radio" id="agree-8" name="medicalHistory" value="I Disagree" onChange={onChangeValue}/>
                                            <label htmlFor="agree-8">I will Specify</label>
                                        </li>
                                    </ul>
                                    <textarea className="form-control note_2 mt-3" placeholder="" name="medicalHistory" onChange={onChangeValue}></textarea>
                                </div>
                            </div>
                            <div className='col-md-12'>
                                <div className='order_input mt-3'>
                                    <h3>Please list all over-the-counter and prescription medications that you are currently taking and
                                        the length of time for each. Choose "None" if none.
                                    </h3>
                                    <ul className='agree_list'>
                                        <li>
                                            <input type="radio" id="agree-9" name="counterPrescription" value="I agree" onChange={onChangeValue}/>
                                            <label htmlFor="agree-9">None</label>
                                        </li>
                                        <li>
                                            <input type="radio" id="agree-10" name="counterPrescription" value="I Disagree" onChange={onChangeValue}/>
                                            <label htmlFor="agree-10">I will Specify</label>
                                        </li>
                                    </ul>
                                    <textarea className="form-control note_2 mt-3" placeholder="" name="counterPrescription" onChange={onChangeValue}></textarea>
                                </div>
                            </div>

                            <div className='col-md-12'>
                                <div className='order_input mt-3'>
                                    <h3>Please list all past or present allergies including allergies to any medications. Choose "None" if none.

                                    </h3>
                                    <ul className='agree_list'>
                                        <li>
                                            <input type="radio" id="agree-11" name="allergies" value="I agree" onChange={onChangeValue}/>
                                            <label htmlFor="agree-11">None</label>
                                        </li>
                                        <li>
                                            <input type="radio" id="agree-12" name="allergies" value="I Disagree" onChange={onChangeValue}/>
                                            <label htmlFor="agree-12">I will Specify</label>
                                        </li>
                                    </ul>
                                    <textarea className="form-control note_2 mt-3" placeholder="" name="allergies" onChange={onChangeValue}></textarea>
                                </div>
                            </div>
                            <div className='col-md-12'>
                                <div className='order_input mt-3'>
                                    <h3>Please list all past surgeries and provide details including the condition that was treated with each surgery. Choose "None" if none.


                                    </h3>
                                    <ul className='agree_list'>
                                        <li>
                                            <input type="radio" id="agree-13" name="surgeryInfo" value="I agree" onChange={onChangeValue}/>
                                            <label htmlFor="agree-13">None</label>
                                        </li>
                                        <li>
                                            <input type="radio" id="agree-14" name="surgeryInfo" value="I Disagree" onChange={onChangeValue}/>
                                            <label htmlFor="agree-14">I will Specify</label>
                                        </li>
                                    </ul>
                                    <textarea className="form-control note_2 mt-3" placeholder="" name="surgeryInfo" onChange={onChangeValue}></textarea>
                                </div>
                            </div>


                            <div className='col-md-12'>
                                <div className='order_input mt-3'>
                                    <h3>Please explain the specific medical reason for ordering this medication. The physician must know the exact nature of your medical problem in order to prescribe this medication. (This cannot be left blank. )


                                    </h3>
                                    <ul className='agree_list'>
                                        <li>
                                            <input type="radio" id="agree-15" name="medicalProblem" value="I agree" onChange={onChangeValue}/>
                                            <label htmlFor="agree-15">None</label>
                                        </li>
                                        <li>
                                            <input type="radio" id="agree-16" name="medicalProblem" value="I Disagree" onChange={onChangeValue}/>
                                            <label htmlFor="agree-16">I will Specify</label>
                                        </li>
                                    </ul>
                                    <textarea className="form-control note_2 mt-3" placeholder="" name="medicalProblem" onChange={onChangeValue}></textarea>
                                </div>
                            </div>
                            <div className='col-md-12'>
                                <div className='order_input mt-3'>
                                    <ul className='agree_list list_dirt'>
                                        <li>
                                            <input className="ert" type="checkbox" id="checked" name="confirmation" value="I agree" />
                                            <label htmlFor="checked"> I double checked the information and confirm all the information is correct ,
                                                and I will pay you a money order when I pick up the drugs. I also know the order cannot be
                                                cancelled when I click "place order now</label>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* <div className="col-md-12">
                        <div className="payment_scc">
                            <h4>5. Payment Information</h4>
                            <h5>Free Shipping</h5>
                            <div className="mb-4">
                                <label className="it_ero">
                                    <input type="radio" name="visibility" value="hide" onChange={handleOptionChange} className="mr-2"/>
                                    Cash On Delivery
                                </label>
                                <label className="it_ero">
                                    <input type="radio" name="visibility" value="show" onChange={handleOptionChange} className="mr-2"/>
                                    Credit card
                                </label>
                            </div>

                            {selectedOption === "show" && (
                                <div className="p-4 bg-green-100 border border-green-500 rounded mb-4">
                                   <div className="row">
                                        <div className='col-md-6'>
                                            <div className='order_input'>
                                                <h6>Name On Card <span>*</span></h6>
                                                <input type="text" className="form-control" placeholder="Enter Name On Card" name="text"/>
                                            </div>
                                        </div>
                                        <div className='col-md-6'>
                                            <div className='order_input'>
                                                <h6>Credit Card Number <span>*</span></h6>
                                                <input type="text" className="form-control" placeholder="Enter Credit Card Number" name="text"/>
                                            </div>
                                        </div>
                                        <div className='col-md-6'>
                                            <div className='order_input'>
                                                <h6>Expiration Date <span>*</span></h6>
                                                <input type="text" className="form-control" placeholder="Enter Expiration Date" name="text"/>
                                            </div>
                                        </div>
                                        <div className='col-md-6'>
                                            <div className='order_input'>
                                                <h6>CVV <span>*</span></h6>
                                                <input type="text" className="form-control" placeholder="Enter CVV" name="text"/>
                                            </div>
                                        </div>

                                   </div>
                                </div>
                            )}
                        </div>
                    </div> */}
                            <div className="col-md-12">
                                <div className="mt-5">
                                    <input  className="button_blue" value="Place Order" onClick={(e)=>onSubmit(e)}/>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Order
