import React from 'react'

const CustomLoader = () => {
  return (
    <div className='col-lg-12 col-md-12 col-sm-12' style={{ height: "400px", justifyContent: "center", alignItems: "center", display: 'flex' }}>

    <div className="spinner-border text-primary" role="status"></div> 
    </div>
  )
}

export default CustomLoader