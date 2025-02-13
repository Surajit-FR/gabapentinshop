
import Navbar from './Navbar';
import Fotter from './Fotter';
import './App.css';
import { Provider } from 'react-redux';
import Preloader from './components/Preloader/Preloader';
import { store } from './store/store';
import AllRoutes from './routes/AllRoutes';
import Thankyou from './components/Thankyou/Thankyou';

function App() {
  return (
    <>
      <Provider store={store}>
        <Preloader />
        <Navbar />
        <Thankyou />
        {/* <AllRoutes /> */}
        <Fotter />
        
      </Provider>
    </>
  );
}

export default App;
