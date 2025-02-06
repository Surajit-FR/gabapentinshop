import React from 'react'
import { Link } from 'react-router-dom'

const Product_section = () => {
  return (
    <div>
      <div className="cta_layout">
        <div className="container">
          <div className="row">

            <div className="col-md-5">
              <div className="backlofen2">
                <img src={require("../../assets/product/backlofen1.jpg")} alt='pic'/>
              </div>
            </div>
            
            <div className="col-md-7">
              <div className="tabels">
                <table className="table table-striped">
                  <tr>
                    <th scope="col" width="60%">Product Name</th>
                    <th scope="col" width="20%" valign="middle" align="center">Unit Price</th>
                    <th scope="col" width="20%">Post Order</th>
                  </tr>
                  <tr>
                    <td>Baclofen 20mg  180 pill</td>
                    <td valign="middle" align="left">
                      <span className="unit-amount">$175.00</span>
                    </td>
                    <td><Link to="/order" className="btnorder btn-primary">order now</Link></td>
                  </tr>
                  <tr>
                    <td>Baclofen 20mg  120 pill</td>
                    <td valign="middle" align="left">
                      <span className="unit-amount">$156.00</span>
                    </td>
                      <td><Link to="/order" className="btnorder btn-primary">order now</Link></td>
                  </tr>
                  <tr>
                    <td>Baclofen 10mg  180 pill</td>
                    <td valign="middle" align="left">
                      <span className="unit-amount">$155.00</span>
                    </td>
                    <td><Link to="/order" className="btnorder btn-primary">order now</Link></td>
                  </tr>
                  <tr>
                    <td>Baclofen 20mg  90 pill</td>
                    <td valign="middle" align="left">
                      <span className="unit-amount">$145.00</span>
                    </td>
                    <td><Link to="/order" className="btnorder btn-primary">order now</Link></td>
                  </tr>
                  <tr>
                    <td>Baclofen 10mg  120 pill</td>
                    <td valign="middle" align="left">
                      <span className="unit-amount">$144.00</span>
                    </td>
                    <td><Link to="/order" className="btnorder btn-primary">order now</Link></td>
                  </tr>
                  <tr>
                    <td>Baclofen 10mg  90 pill</td>
                    <td valign="middle" align="left">
                      <span className="unit-amount">$135.00</span>
                    </td>
                    <td><Link to="/order" className="btnorder btn-primary">order now</Link></td>
                  </tr>
                  <tr>
                    <td>Baclofen 20mg  60 pill</td>
                    <td valign="middle" align="left">
                      <span className="unit-amount">$134.00</span>
                    </td>
                    <td><Link to="/order" className="btnorder btn-primary">order now</Link></td>
                  </tr>
                  <tr>
                    <td>Baclofen 10mg  60 pill</td>
                    <td valign="middle" align="left">
                      <span className="unit-amount">$130.00</span>
                    </td>
                    <td>
                      <Link to="/order" className="btnorder btn-primary">order now</Link>
                    </td>
                  </tr>
                </table>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Product_section
