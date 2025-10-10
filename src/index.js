import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App';
// import Index from './components/Index';
import PrivateOne from './routes/PrivateOne';
import PublicRouteAccess from './routes/PublicRouteAccess';
import Blogsingle from './components/Blogsinglepages/Blogsingle';
import ProductDetails from './components/Product-details/ProductDetails';
import { Provider } from 'react-redux';
import { store } from './store/store';
import Shopinner from './components/Shoppages/Shopinner';
import Haeder_navbar_menu from './Navbar';
import Fotter from './Fotter';
// import PublicRouteAccess from './routes/PublicRouteAccess';
// import Home from './components/Home/Home';


const router = createBrowserRouter([
  {
    path: '/*', element:
      <PublicRouteAccess>
        <App />
      </PublicRouteAccess>
  },
  {
    path: '/*', element: (
      <>
        <PrivateOne>
          <App />
        </PrivateOne>
      </>
    ),
  },
  {
    path: '/blog/:blog_id', element:
      // <PublicRouteAccess>
      <>
        <Haeder_navbar_menu />

        <Blogsingle />
        <Fotter />

      </>

    // </PublicRouteAccess>
  },
  {
    path: "/product-details/:product_id", element:
      // <PublicRouteAccess>
      <>
        <Haeder_navbar_menu />
        <ProductDetails />
        <Fotter />

      </>
    // </PublicRouteAccess>
  },
  {
    path: "/shop-now/:id", element:
      // <PublicRouteAccess>
      <>
        <Haeder_navbar_menu />
        <Shopinner />
        <Fotter />

      </>
    // </PublicRouteAccess>
  },
  // {
  //   path: '/home', element: (
  //     <>
  //       <PublicRouteAccess>
  //         {/* <Login /> */}
  //         <Home />
  //       </PublicRouteAccess>
  //     </>
  //   ),
  // },
], {
  future: {
    v7_relativeSplatPath: true,
    v7_fetcherPersist: true,
    v7_normalizeFormMethod: true,
    v7_partialHydration: true,
    v7_skipActionErrorRevalidation: true,
  }
});
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  // <App />
  <Provider store={store}>
    <div className="preLoading">
      <RouterProvider router={router} future={{ v7_startTransition: true }} />
    </div>
    {/* // </React.StrictMode> */}
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
