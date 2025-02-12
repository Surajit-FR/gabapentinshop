import {  Routes, Route, 
    // Link
 } from 'react-router-dom';
import Home from '../components/Home/Home';
import Aboutinner from '../components/Aboutpages/Aboutinner';
import Baclofeninner from '../components/Productpages/Baclofeninner';
import Shopinner from '../components/Shoppages/Shopinner';
import ProductDetails from '../components/Product-details/ProductDetails';
import Bloginner from '../components/blogpages/Bloginner';
import Blogsingle from '../components/Blogsinglepages/Blogsingle';
import Faqinner from '../components/Faqpages/Faqinner';
import Contactinner from '../components/Contactpages/Contactinner';
import Order from '../components/Orderform/Order';
import DeliveryInformation from '../components/Delivery/DeliveryInformation';
import PrivacyPolicy from '../components/Privacy/Privacy-policy';
import TermsConditions from '../components/Terms/TermsConditions';
import ReturnsPolicy from '../components/Returns/ReturnsPolicy';
// import Fotter from '../Fotter';
import Backtotop from '../Backtotop';
// import Preloader from '../components/Preloader/Preloader';
// import Navbar from '../Navbar';

const AllRoutes = () => {
  return (
    <>
    {/* <Router> */}
          {/* <Preloader />
          <Navbar /> */}
          {/* Define Routes */}
          <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/about-us" element={<Aboutinner />} />
              <Route path="/baclofen" element={<Baclofeninner />} />
              <Route path="/shop-now/:id" element={<Shopinner />} />
              <Route path="/shop-all" element={<Shopinner />} />
              <Route path="/product-details/:product_id" element={<ProductDetails />} />
              <Route path="/blog" element={<Bloginner />} />
              <Route path="/blog-single/:blog_id" element={<Blogsingle />} />
              <Route path="/faq" element={<Faqinner />} />
              <Route path="/contact-us" element={<Contactinner />} />
              <Route path="/order" element={<Order />} />
              <Route path="/delivery-information" element={<DeliveryInformation />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/tnc" element={<TermsConditions />} />
              <Route path="/returns-policy" element={<ReturnsPolicy />} />
          </Routes>
          {/* Define Routes */}
          {/* <Fotter /> */}
      {/* </Router> */}
      <Backtotop />
      </>
  )
}

export default AllRoutes