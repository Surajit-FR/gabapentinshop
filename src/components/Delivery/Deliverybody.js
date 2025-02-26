import React from 'react'

const Deliverybody = ({data}) => {

  return (
    <div>
      <div className='policy_box'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-12'>
                    <div className='policy_text'>
                        <h2>Delivery Information</h2>
                        <p>
                          {data && data.delivery_data && data.delivery_data.length>0 && data.delivery_data.map(item=> item.page_content)}
                        </p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Deliverybody
