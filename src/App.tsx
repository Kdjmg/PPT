import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './auth/AuthProvider';
import { Home } from './pages/Home';
import { Menu } from './pages/Menu';
import { Contact } from './pages/Contact';
import Nav from './components/Nav';
import { Footer } from './components/Footer';
import PaymentPage from './pages/PaymentPage';
import AdminApp from './admin/AdminApp';
import useCurrentPath from './hooks/useCurrentPath';
import BasketPage from './pages/BasketPage';
import { CartProvider } from './contexts/CartContext';

const App: React.FC = () => {

  const currentPath = useCurrentPath();
  const isAdminPath = currentPath.startsWith('/admin')
  return (
    <CartProvider>
      <AuthProvider>
        {!isAdminPath && <Nav />}        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/basket" element={<BasketPage />} />
          <Route path="/admin/*" element={<AdminApp />} />
        </Routes>
        {!isAdminPath && <Footer />}
        </AuthProvider>
        </CartProvider>
  );
};

export default App;
