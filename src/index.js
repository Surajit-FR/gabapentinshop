import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App';
// import Index from './components/Index';
import PrivateOne from './routes/PrivateOne';
import PublicRouteAccess from './routes/PublicRouteAccess';
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
  <RouterProvider router={router} future={{ v7_startTransition: true }} />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
