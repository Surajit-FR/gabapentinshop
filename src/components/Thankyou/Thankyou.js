import React from 'react'
import { useNavigate } from 'react-router-dom'

const Thankyou = () => {
  const navigate= useNavigate()
  const onClickHome= ()=>{
    navigate('/')
  }
  return (
    <div>
      
        <div className="thank_box">
            <div className="thanky_2">
                <h1>Thank you !</h1>
                <p>Thank you for choosing Gabapentinshop</p>
                <p>you should receive a confirmation email soon  </p>
                <button className="go-home" onClick={()=>onClickHome()}>
                    go home
                </button>
            </div>
        </div>


    </div>
  )
}

export default Thankyou
