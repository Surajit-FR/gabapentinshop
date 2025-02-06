import React, { useState } from "react";

import { Link } from 'react-router-dom'

const Getfree = () => {

  // const [isModalOpen, setIsModalOpen] = useState(false);

  // const openModal = () => setIsModalOpen(true);
  // const closeModal = () => setIsModalOpen(false);

  // const overlayStyle = {
  //   position: "fixed",
  //   top: 0,
  //   left: 0,
  //   width: "100vw",
  //   height: "100vh",
  //   background: "rgba(0, 0, 0, 0.5)",
  //   display: "flex",
  //   justifyContent: "center",
  //   alignItems: "center",
  //   zIndex: 1000,
  // };
  
  // const modalStyle = {
  //   background: "#fff",
  //   width: "100%",
  //   maxWidth:"800px",
  //   borderRadius: "8px",
  //   boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
  //   overflow: "hidden",
  // };
  
  // const headerStyle = {
  //   padding: "10px 20px",
  //   background: "#f1f1f1",
  //   borderBottom: "1px solid #ddd",
  //   display: "flex",
  //   justifyContent: "space-between",
  //   alignItems: "center",
  // };
  
  // const closeButtonStyle = {
  //   background: "none",
  //   border: "none",
  //   fontSize: "18px",
  //   cursor: "pointer",
  // };
  
  // const bodyStyle = {
  //   padding: "20px",
  //   textAlign: "center",
  // };
  
  // const footerStyle = {
  //   padding: "10px 20px",
  //   borderTop: "1px solid #ddd",
  //   textAlign: "right",
  // };
  
  // const buttonStyle = {
  //   fontSize:"16px",
  //   Color:"#fff",
  //   lineHeight:"27px",
  //   padding:"12px 30px",
  //   background:"#f4572e",
  //   borderRadius:"40px",
  //   border:"0px",
  //   float: "left",
  // };

  return (
    <div>
      <div className='cta_box' style={{backgroundImage: `url(${require("../../assets/getfree/1.jpg")})`}}>
        <div className='container'>
            <div className='row get_por'>
                <div className='col-md-8'>
                    <div className="cta_text">
                        <h5>Get Free Consultations</h5>
                        <h3>Looking a Doctors to Get Your Services</h3>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className="cta_text">
                        <ul>
                            <li>
                              <Link to="/order"> Get Free Quote</Link>
                            </li>
                            <li>
                              <Link to="/shopinner"> Shop Now</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Getfree
