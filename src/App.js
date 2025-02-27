
import Navbar from './Navbar';
import Fotter from './Fotter';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './store/store';
import AllRoutes from './routes/AllRoutes';

function App() {
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
