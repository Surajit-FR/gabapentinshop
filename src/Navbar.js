import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect, } from "react"

import { NavLink,useNavigate } from "react-router-dom"
import harderlogo from '../src/img/logo/logo.png'
import { useDispatch, useSelector } from 'react-redux'
import { getCategoryList } from './store/thunks/categoryThunk'




const Haeder_navbar_menu = () => {
  const {categories} = useSelector(state=> state.categories)
  const navigate= useNavigate()
  const dispatch= useDispatch()
  const navRef= useRef(null)
  const [isOpen,setIsOpen]= useState(false)
  // const [submenuOpen, setSubmenuOpen] = useState({});
  // const toggleSubmenu = (key) => {
  //   setSubmenuOpen((prev) => ({ ...prev, [key]: !prev[key] }));
  // };
  const handleClickOutside = (event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      setIsOpen(false);
    }
};
  const [isSticky, setIsSticky] = useState(false);
  // Function to handle scroll event and check if the header should be sticky
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
const oncategoryClick = (id)=>{
  navigate(`/shop-now/${id}`)
}


const onClickProd = () =>{
  setIsOpen(!isOpen)
}
//-----//


useEffect(()=>{
  dispatch(getCategoryList())
},[dispatch])
  // UseEffect to add and remove the scroll event listener
  useEffect(() => {
    // Attach the scroll event handler
    window.addEventListener("scroll", handleScroll);
    document.addEventListener('click', handleClickOutside, true);
    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);
  return  (
   

    <div className='harder_section'>
      <div className='harder_top'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-6'>
                <div className='h_top'>
                  <Link className='email_top' to="mailto:admin@gabapentinshop.com">Email : admin@gabapentinshop.com</Link>
                </div>
              </div>
              <div className='col-md-6'>
                <div className='h_top ri_right'>
                  <div className='d-flex det_hit'>
                    {/* <form className="header-topbar-search">
                      <input type="text" className="form-control" placeholder="Type Search Words"/>
                      <button className="header-topbar-search-btn"><i className="fa fa-search"></i></button>
                    </form> */}
                    <ul className='socal_media harder_socal'>
                        <li>
                            <Link to='https://www.facebook.com/profile.php?id=61560727872011' target="_blank"><i className="fa-brands fa-facebook-f"></i></Link>
                        </li>
                        <li>
                            <Link to='https://www.instagram.com/gabapentinshop' target="_blank"><i className="fa-brands fa-instagram"></i></Link>
                        </li>
                        <li>
                            <Link to='https://x.com/ShopGabapentin' target="_blank"><i className="fa-brands fa-x-twitter"></i></Link>
                        </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
      <div className={`harder_top_1 sticky-header ${isSticky ? 'sticky' : ''}`}>
          <nav className="navbar navbar-expand-lg navbar-dark">
            <div className="container">
              <NavLink className="navbar-brand" to="/">
                <img src={harderlogo} alt="Logo" />
              </NavLink>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                <ul className="navbar-nav harder_menu">
                  {/* Home */}
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/" end>
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/about-us">
                      About Us
                    </NavLink>
                  </li>

                  {/* About with Submenu */}
                  <li className="nav-item dropdown" ref={navRef} 
                      onMouseLeave={()=>setIsOpen(false)}
                  >

                    <button
                      className="nav-link dropdown-toggle btn btn-link" onClick={() => onClickProd()
                      // toggleSubmenu("about")
                      }
                      >
                      Products 
                    </button>
                
                    <ul className={`dropdown-menu ${isOpen? "show": ''}`}>
                    {categories && categories.length > 0 && 
                    categories.map(cat=>(
                      <li key={cat.term_id} onClick={()=>oncategoryClick(cat.term_id)}>
                        
                      <NavLink className="dropdown-item" to="#">
                        {cat.name}
                        
                      </NavLink>
                    </li>
                    ))}

                    </ul>
                  </li>
                
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/blog">
                      Blog
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink className="nav-link" to="/faq">
                      FAQ
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/contact-us">
                      Contact Us
                    </NavLink>
                  </li>
                </ul>
                <div className="d-flex right1">
                  <ul className='menu_shop'>
                    <li>
                      <Link className='sh_1' to='/shop-all'>
                        Shop Now
                      </Link>
                    </li>
                    {/* <li>
                      <Link className='action-btn-cart' to='/'>
                        <i className="fa-solid fa-cart-shopping"></i>
                        <span className="cart-counter">3</span>
                      </Link>
                    </li> */}
                  </ul>
                </div>
              </div>

              
            </div>
          </nav>
      </div>

    </div>
  ) 
}

export default Haeder_navbar_menu
