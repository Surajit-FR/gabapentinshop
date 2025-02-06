import React from 'react'
import { Link } from 'react-router-dom'


const Inner_banner = ({ title, subtitle, background,}) => {
  const bannerStyle = {
    backgroundImage:`url(${background})`, 
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed', 
  };

  return (
    <div className="Inner_banner" style={bannerStyle}>
      <div className='a_top'>
        <div className='container'>
          <h1>{title}</h1>
          <ul>
              <li>
                  <i className="fa-solid fa-house"></i>
                  <Link to='/'>Home</Link>
              </li>
              <li><i className="fa-solid fa-chevron-right"></i></li>
              <li>
                {subtitle}
              </li>
          </ul>
        </div>
      </div>
    </div>
  );
};


const Inner_common_banner = ({title, subtitle, background}) => {
  return (
    <>
        <div className='about_pages'>
            <Inner_banner title={title} subtitle={subtitle} background={background}/>
        </div>
    </>
  )
}

export default Inner_common_banner
