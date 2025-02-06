import logo from './logo.svg';
import Navbar from './Navbar';

import Home from './components/Home/Home';
import Aboutinner from './components/Aboutpages/Aboutinner';
import Baclofeninner from './components/Productpages/Baclofeninner';

import Shopinner from './components/Shoppages/Shopinner';
import Product_details from './components/Product-details/Product-details';

import Bloginner from './components/blogpages/Bloginner';
import Blogsingle from './components/Blogsinglepages/Blogsingle';
import Faqinner from './components/Faqpages/Faqinner';
import Contactinner from './components/Contactpages/Contactinner';
import About from './components/Common/About';
import Order from './components/Orderform/Order';
import Fotter from './Fotter';
import Backtotop from './Backtotop';

import DeliveryInformation from './components/Delivery/DeliveryInformation';
import Privacy_policy from './components/Privacy/Privacy-policy';
import TermsConditions from './components/Terms/TermsConditions';
import ReturnsPolicy from './components/Returns/ReturnsPolicy';

import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Preloader from './components/Preloader/Preloader';

function App() {
  return (
    <>
    <Router 
    //  basename='demo/gabapentinshop-demo' 
     >
        <Preloader/>
        <Navbar />
            {/* Define Routes */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about-us" element={<Aboutinner/>} />
              <Route path="/baclofen" element={< Baclofeninner/>} />
              <Route path="/shop-now" element={< Shopinner/>} />
              <Route path="/product-details" element={< Product_details/>} />
              <Route path="/blog" element={< Bloginner/>} />
              <Route path="/blog-single" element={<Blogsingle />} />
              <Route path="/faq" element={< Faqinner/>} />
              <Route path="/contact-us" element={< Contactinner/>} />
              <Route path="/order" element={< Order/>} />
              <Route path="/delivery-information" element={< DeliveryInformation/>} />
              <Route path="/privacy-policy" element={< Privacy_policy/>} />
              <Route path="/tnc" element={< TermsConditions/>} />
              <Route path="/returns-policy" element={< ReturnsPolicy/>} />
            </Routes>
            {/* Define Routes */}
          <Fotter/>
    </Router>

      <Backtotop/>
      
    </>
  );
}

export default App;
