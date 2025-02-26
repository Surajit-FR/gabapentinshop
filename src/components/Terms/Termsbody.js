import React from 'react'

const Termsbody = ({ data }) => {

  const dataToMap = data && data.delivery_data && data.delivery_data.length > 0 && data.delivery_data.map(item => item.page_content)
  const split = dataToMap ? dataToMap.toString().split(/\r?\n/) : ''
  const headingQues = split && split.length > 0 && split.slice(0,2)
  const payOptions = split && split.length > 0 && split.slice(3,5)
  const codOpts = split && split.length > 0 && split.slice(6,8)

  return (
    <div>
      <div className='policy_box'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <div className='policy_text'>
                {headingQues && headingQues.length>0 && headingQues.map((q,i)=> (
                  <p key={i}>{q}</p>
                ))}
                <h2>Payment Options</h2>
                {payOptions && payOptions.length>0 && payOptions.map((q,i)=> (
                  <p key={i}>{q}</p>
                ))}
                <h2>C.O.D. Orders</h2>

                {codOpts && codOpts.length>0 && codOpts.map((q,i)=> (
                  <p key={i}>{q}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Termsbody
