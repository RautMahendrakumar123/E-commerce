
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/header/Header';
import Homepage from './pages/homepage/Homepage';
import Footer from './components/footer/Footer';
import Cartpage from './pages/cart/Cartpage';
import PageNotFound from './components/pagenotfound/PageNotFound';
import ProfilePage from './pages/profile/ProfilePage';
import OrderPage from './pages/orders/OrderPage';

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Header />
        <div className="main-content">
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/cart' element={<Cartpage />} />
            <Route path='/profile' element={<ProfilePage />} />
            <Route path='/order' element={<OrderPage />} />
            <Route path='*' element={<PageNotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;