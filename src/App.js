
import Navbar from './Navbar';
import Fotter from './Fotter';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './store/store';
import AllRoutes from './routes/AllRoutes';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import usePageMeta from './components/Seo/Seo';

function App() {

  const location =useLocation()
 usePageMeta({
  canonic: `https://gabapentinshop.com/${location.pathname}`
 })

  
  return (
    <>
      <Provider store={store}>
        <div className="preLoading">
          <Navbar />
          <AllRoutes />
          <Fotter />
        </div>
      </Provider>

    </>
  );
}

export default App;
