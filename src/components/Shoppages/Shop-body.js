import React from 'react'
import { Link } from 'react-router-dom'


const Shop_body = ({ products }) => {

    return (
        <div>
            <div className='shop_body_section'>
                <div className='container'>
                    <div className='row'>
                        {products && products.length > 0 && products.map(prod => (
                            <div className='col-md-6 col-lg-3' key={prod.id}>
                                <div className="min_box s_min_box">
                                    <div className="box7">
                                        <img 
                                        src={prod.productimage || prod.image} alt={prod.Description || prod.description} />
                                        {/* <div className="box-content">
                                            <div className="icon">
                                                <Link to="/order">Add To Cart</Link>
                                            </div>
                                        </div> */}
                                    </div>
                                    <div className="text_v">
                                        <h3>{prod.post_title || prod.title}</h3>
                                        <Link to={`/product-details/${prod.id}`}
                                          className="cl_iert">
                                           Enquiry Now
                                            {/* Buy Now */}
                                        </Link>
                                        <span className="n_per">${prod.regular_price}</span>
                                        <div className="clearfix"></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Shop_body
