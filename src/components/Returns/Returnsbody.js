import React from 'react'

const Returnsbody = ({ data }) => {
  console.log({ data })
  return (
    <div>
      <div className='policy_box'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <div className='policy_text'>
                <h2>Returns Policy</h2>
                {data && data.delivery_data && data.delivery_data.length > 0 && data.delivery_data.map((item, index) => (
                  <p key={index}>{item.page_content}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Returnsbody
