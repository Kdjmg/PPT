import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const PaymentPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { cartItems, totalPrice } = location.state || { cartItems: [], totalPrice: 0 };

  const [customerInfo, setCustomerInfo] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    address: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCustomerInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleConfirmPayment = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/confirmation', { state: { customerInfo, cartItems, totalPrice } });
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-3xl mx-auto bg-white p-8 shadow-lg rounded-lg">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Informations de Paiement</h2>
        <form onSubmit={handleConfirmPayment} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Prénom</label>
              <input
                type="text"
                name="firstName"
                value={customerInfo.firstName}
                onChange={handleInputChange}
                className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="Votre prénom"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Nom</label>
              <input
                type="text"
                name="lastName"
                value={customerInfo.lastName}
                onChange={handleInputChange}
                className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="Votre nom"
                required
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Numéro de téléphone</label>
            <input
              type="tel"
              name="phoneNumber"
              value={customerInfo.phoneNumber}
              onChange={handleInputChange}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Votre numéro de téléphone"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Adresse</label>
            <input
              type="text"
              name="address"
              value={customerInfo.address}
              onChange={handleInputChange}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Votre adresse postale"
              required
            />
          </div>
          <div className="border-t border-gray-200 pt-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Résumé du Panier</h3>
            <ul className="space-y-4">
              {cartItems.map((item: { title: string; img:string, quantity: number; price: string }, index: number) => (
                <li key={index} className="flex justify-between items-center bg-gray-50 p-4 rounded-lg shadow-sm">
                  <img src={item.img} className='w-[15%]' alt="" />
                  <span className="font-medium text-gray-800">{item.title}</span>
                  <span className="text-gray-600">{item.quantity} x {item.price}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex justify-between items-center">
              <span className="text-xl font-bold text-gray-900">Total:</span>
              <span className="text-2xl font-bold text-blue-600">{totalPrice.toFixed(2)}€</span>
            </div>
          </div>
          <div className="flex justify-end mt-6">
         
          <div className="relative">
  <img src="/messi.png" className="absolute right-4 bottom-0 z-0" alt="" />
  <button
    type="submit"
    className="z-10 w-full md:w-auto inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg shadow-sm text-white bg-gradient-to-r from-red-500 via-blue-500 to-black hover:from-red-600 hover:via-blue-600 hover:to-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-300"
  >
    Confirmer et Payer
  </button>
</div>

         


          </div>
        </form>
      </div>
    </div>
  );
};

export default PaymentPage;
