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

const App: React.FC = () => {

  const currentPath = useCurrentPath();
  const isAdminPath = currentPath.startsWith('/admin')
  return (
    
      <AuthProvider>
        {!isAdminPath && <Nav />}        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/admin/*" element={<AdminApp />} />
        </Routes>
        {!isAdminPath && <Footer />}
        </AuthProvider>
  );
};

export default App;
