
import { useState } from "react";
import usePageMeta from "../Seo/Seo";



const Order = () => {

    // const [selectedOption, setSelectedOption] = useState("");

    // const handleOptionChange = (event) => {
    //   setSelectedOption(event.target.value);
    // };

    usePageMeta({
        title:'Order',
        description:'Gabapentinshop Order',
        keywords:'Gabapentinshop Order',
    });

  return (
    <div>



      <div className='online_order'>
        <div className='container'>
            <form className='order_box_123'>
                <div className='row'>
                    <div className='col-md-6'>
                        <div className='order_input'>
                            <h4>Select Your Product <span>*</span></h4>
                            <select className="form-control">
                                <option value="">Select Your Product</option>		
                                <option value="47">Gabapentin 400 mg – 90 Tabs</option>		
                                <option value="46">Gabapentin 400 mg – 120 Tabs</option>	
                                <option value="45"> Gabapentin 600 mg – 90 Tabs</option>		
                                <option value="44"> Gabapentin 300 mg – 90 Tabs</option>		
                                <option value="43"> Gabapentin 300 mg – 120 Tabs</option>		
                                <option value="42">Trazodone 50 Mg 180 Tab</option>		
                                <option value="41">Trazodone 50 Mg 90 Tab</option>		
                                <option value="40">Trazodone 50 Mg 60 Tab</option>		
                                <option value="39">Trazodone 100 Mg 180 Tab</option>		
                                <option value="38">Trazodone 100 Mg 90 Tab</option>		
                                <option value="37">Trazodone 100 Mg 60 Tab</option>		
                                <option value="36">Trazodone 150 Mg 60 Tab</option>		
                                <option value="35">Trazodone 150 Mg 90 Tab</option>		
                                <option value="34">White Butalbital/APAP/Caffeine (Generic Fioricet )- 50/325/40 mg- 90 Tabs </option>		
                                <option value="33">White Butalbital/APAP/Caffeine (Generic Fioricet )- 50/325/40 mg- 120 Tabs </option>		
                                <option value="32">White Butalbital/APAP/Caffeine (Generic Fioricet )- 50/325/40 mg- 180 Tabs </option>		
                                <option value="31">Melatonin 5 mg-30 Pills</option>		
                                <option value="30">Melatonin 5 mg - 60 Pills</option>		
                                <option value="29">Melatonin 5 mg - 90 Pills</option>		
                                <option value="28">Melatonin 5 mg -120Pills</option>		
                                <option value="27">Melatonin 5 mg -180 Pills</option>		
                                <option value="26">Benzonatate 100mg - 90 pills</option>		
                                <option value="25">Benzonatate 100mg - 120 pills</option>		
                                <option value="24">Benzonatate 100mg - 180 pills</option>		
                                <option value="23">Trazodone 150 Mg 180 Tab</option>		
                                <option value="22">Baclofen 20 Mg 180 Tab</option>		
                                <option value="21">Methacarbomal 500 mg 180 Tablets</option>		
                                <option value="19">Cyclobenzaprine 10mg 180 Tablets.</option>		
                                <option value="18">Zanaflex (Tizaden) 4 mg 90 Tablets</option>		
                                <option value="17">Zanaflex (Tizaden) 4 mg 120 Tablets</option>		
                                <option value="16">Zanaflex (Tizaden) 4 mg  180 Tablets</option>		
                                <option value="15">Blue Butalbital/APAP/Caffeine (Generic Fioricet )- 50/325/40 mg- 90 Tabs</option>		
                                <option value="14">Blue Butalbital/APAP/Caffeine (Generic Fioricet )- 50/325/40 mg- 120 Tabs</option>		
                                <option value="13">Blue Butalbital/APAP/Caffeine (Generic Fioricet )- 50/325/40 mg- 180 Tabs </option>		
                                <option value="12">Gabapentin 800 mg – 90 Tabs</option>		
                                <option value="11">Gabapentin 800 mg – 180 Tabs</option>		
                                <option value="10">Gabapentin 600 mg – 180 Tabs </option>		
                                <option value="9">Gabapentin 400 mg – 180 Tabs</option>		
                                <option value="8"> Gabapentin 300 mg – 180 Tabs</option>		
                                <option value="7">Gabapentin 600mg- 120 Tabs</option>		
                                <option value="6">Gabapentin 800mg- 120 Tabs</option>
                            </select>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='order_input'>
                            <h4>Product Price <span>*</span></h4>
                            <input type="text" className="form-control" placeholder="" name="text"/>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='order_input'>
                            <h4>First Name <span>*</span></h4>
                            <input type="text" className="form-control" placeholder="" name="text"/>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='order_input'>
                            <h4>Last Name <span>*</span></h4>
                            <input type="text" className="form-control" placeholder="" name="text"/>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='order_input'>
                            <h4>Phone Number <span>*</span></h4>
                            <input type="text" className="form-control" placeholder="" name="text"/>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='order_input'>
                            <h4>Email Address <span>*</span></h4>
                            <input type="email" className="form-control" placeholder="" name="email"/>
                        </div>
                    </div>
                    <div className='col-md-12'>
                        <div className='order_input'>
                            <h4>Address<span>*</span></h4>
                            <textarea className="form-control note_i" placeholder=""></textarea>
                        </div>
                    </div>

                    <div className='col-md-6'>
                        <div className='order_input'>
                            <h4>City <span>*</span></h4>
                            <input type="text" className="form-control" placeholder="" name="city"/>
                        </div>
                    </div>

                    <div className='col-md-6'>
                        <div className='order_input'>
                            <h4>State/Province <span>*</span></h4>
                            <input type="text" className="form-control" placeholder="" name="state"/>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='order_input'>
                            <h4>Zip/Postal Code <span>*</span></h4>
                            <input type="text" className="form-control" placeholder="" name="zip"/>
                        </div>
                    </div>

                  
                    <div className='col-md-6'>
                        <div className='order_input'>
                            <h4>Country <span>*</span></h4>
                            <select className="form-control">
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
                            <select className="form-control">
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
                            <input type="date" className="form-control" placeholder="" name="date"/>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='order_input'>
                            <h4>Height <span>*</span></h4>
                            <input type="text" className="form-control" placeholder="" name="Height"/>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='order_input'>
                            <h4>Weight <span>*</span></h4>
                            <input type="text" className="form-control" placeholder="" name="Weight"/>
                        </div>
                    </div>
                    <div className='col-md-12'>
                        <div className='order_input border_top_1'>
                            <h3>I agree not to take any over-the-counter medicines without approval from my pharmacist.
                            </h3>
                            <ul className='agree_list'>
                                <li>
                                    <input type="radio" id="agree-1" name="agree_1" value="I agree"/>
                                    <label htmlFor="agree-1">I agree</label>
                                </li>

                                <li>
                                    <input type="radio" id="agree-2" name="agree_1" value="I Disagree"/>
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
                                    <input type="radio" id="agree-3" name="agree_3" value="I agree"/>
                                    <label htmlFor="agree-3">I agree</label>
                                </li>
                                <li>
                                    <input type="radio" id="agree-4" name="agree_3" value="I Disagree"/>
                                    <label htmlFor="agree-4">I Disagree</label>
                                </li>
                            </ul>
                            <h4 className='mt-3'>If you disagree, please explain why:</h4>
                            <textarea className="form-control note_2" placeholder=""></textarea>

                        </div>
                    </div>
                    <div className='col-md-12'>
                        <div className='order_input mt-3'>
                            <h3>Please list all current medical conditions. Choose "None" if none
                            </h3>
                            <ul className='agree_list'>
                                <li>
                                    <input type="radio" id="agree-5" name="agree_5" value="I agree"/>
                                    <label htmlFor="agree-5">None</label>
                                </li>
                                <li>
                                    <input type="radio" id="agree-6" name="agree_5" value="I Disagree"/>
                                    <label htmlFor="agree-6">I will Specify</label>
                                </li>
                            </ul>
                            <textarea className="form-control note_2 mt-3" placeholder=""></textarea>
                        </div>
                    </div>    
                    <div className='col-md-12'>
                        <div className='order_input mt-3'>
                            <h3>Is there anything in your medical history that you consider to be relevant? If yes, please specify. Choose "None" if none.
                            </h3>
                            <ul className='agree_list'>
                                <li>
                                    <input type="radio" id="agree-7" name="agree_6" value="I agree"/>
                                    <label htmlFor="agree-7">None</label>
                                </li>
                                <li>
                                    <input type="radio" id="agree-8" name="agree_6" value="I Disagree"/>
                                    <label htmlFor="agree-8">I will Specify</label>
                                </li>
                            </ul>
                            <textarea className="form-control note_2 mt-3" placeholder=""></textarea>
                        </div>
                    </div>   
                    <div className='col-md-12'>
                        <div className='order_input mt-3'>
                            <h3>Please list all over-the-counter and prescription medications that you are currently taking and 
                                the length of time for each. Choose "None" if none.
                            </h3>
                            <ul className='agree_list'>
                                <li>
                                    <input type="radio" id="agree-9" name="agree_7" value="I agree"/>
                                    <label htmlFor="agree-9">None</label>
                                </li>
                                <li>
                                    <input type="radio" id="agree-10" name="agree_7" value="I Disagree"/>
                                    <label htmlFor="agree-10">I will Specify</label>
                                </li>
                            </ul>
                            <textarea className="form-control note_2 mt-3" placeholder=""></textarea>
                        </div>
                    </div>   

                    <div className='col-md-12'>
                        <div className='order_input mt-3'>
                            <h3>Please list all past or present allergies including allergies to any medications. Choose "None" if none.

                            </h3>
                            <ul className='agree_list'>
                                <li>
                                    <input type="radio" id="agree-11" name="agree_8" value="I agree"/>
                                    <label htmlFor="agree-11">None</label>
                                </li>
                                <li>
                                    <input type="radio" id="agree-12" name="agree_8" value="I Disagree"/>
                                    <label htmlFor="agree-12">I will Specify</label>
                                </li>
                            </ul>
                            <textarea className="form-control note_2 mt-3" placeholder=""></textarea>
                        </div>
                    </div>  
                    <div className='col-md-12'>
                        <div className='order_input mt-3'>
                            <h3>Please list all past surgeries and provide details including the condition that was treated with each surgery. Choose "None" if none.


                            </h3>
                            <ul className='agree_list'>
                                <li>
                                    <input type="radio" id="agree-13" name="agree_9" value="I agree"/>
                                    <label htmlFor="agree-13">None</label>
                                </li>
                                <li>
                                    <input type="radio" id="agree-14" name="agree_9" value="I Disagree"/>
                                    <label htmlFor="agree-14">I will Specify</label>
                                </li>
                            </ul>
                            <textarea className="form-control note_2 mt-3" placeholder=""></textarea>
                        </div>
                    </div>  


                    <div className='col-md-12'>
                        <div className='order_input mt-3'>
                            <h3>Please explain the specific medical reason for ordering this medication. The physician must know the exact nature of your medical problem in order to prescribe this medication. (This cannot be left blank. )


                            </h3>
                            <ul className='agree_list'>
                                <li>
                                    <input type="radio" id="agree-15" name="agree_10" value="I agree"/>
                                    <label htmlFor="agree-15">None</label>
                                </li>
                                <li>
                                    <input type="radio" id="agree-16" name="agree_10" value="I Disagree"/>
                                    <label htmlFor="agree-16">I will Specify</label>
                                </li>
                            </ul>
                            <textarea className="form-control note_2 mt-3" placeholder=""></textarea>
                        </div>
                    </div>  
                    <div className='col-md-12'>
                        <div className='order_input mt-3'>
                            <ul className='agree_list list_dirt'>
                                <li>
                                    <input className="ert" type="checkbox" id="checked" name="checked" value="I agree"/>
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
                            <input type="submit" className="button_blue" value="Place Order"/>
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
