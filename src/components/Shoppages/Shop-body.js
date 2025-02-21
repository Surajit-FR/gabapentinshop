import React from 'react'
import { Link, useNavigate } from 'react-router-dom'


const Shop_body = ({ products }) => {
    const navigate = useNavigate()
    const onClickEnquityNow = (id, slug) =>{
        localStorage.setItem("prodId",id)
        // const tempSlug = slug.split(' ').join('-');
        
        let tempSlug = slug.split(' ').join('-').replace(/\//g,"-");
        navigate(`/product-details/${tempSlug}`)

    }

    return (
        <div>
            <div className='shop_body_section'>
                <div className='container'>
                    <div className='row justify-content-center'>
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
                                    <div className="text_v"
                                        onClick={()=>onClickEnquityNow(prod.id,(prod.slug || prod.post_title))}
                                    
                                    >
                                        <h3>{prod.post_title || prod.title}</h3>
                                        <Link 
                                        // to={`/product-details/${prod.slug}`}
                                          className="cl_iert">
                                           Shop Now
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
