
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/header/Header';
import Homepage from './pages/homepage/Homepage';
import Footer from './components/footer/Footer';
import Cartpage from './pages/cart/Cartpage';
import PageNotFound from './pages/pagenotfound/PageNotFound'
import ProfilePage from './pages/profile/ProfilePage';
import OrderPage from './pages/orders/OrderPage';
import SinglePostPage from './pages/singlepostpage/SinglePostPage';
import UserRegisterPage from './pages/userregister/UserRegisterPage'
import AdminRegisterPage from './pages/adminregister/AdminRegisterPage'
import LoginPage from './pages/login/LoginPage'

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Header />
        <div className="main-content">
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/register-user' element={<UserRegisterPage />} />
            <Route path='/register-admin' element={<AdminRegisterPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/cart' element={<Cartpage />} />
            <Route path='/profile' element={<ProfilePage />} />
            <Route path='/order' element={<OrderPage />} />
            <Route path='/singlepost' element={<SinglePostPage />} />
            <Route path='*' element={<PageNotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
