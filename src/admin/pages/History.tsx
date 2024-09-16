import React from 'react';

const History: React.FC = () => {
  const orders = [
    {
      id: 1,
      clientName: 'Alice Smith',
      address: '789 Maple St, Riverdale',
      summary: 'burger double steak, frites cheddar bacon, milkshake vanille',
      number: '06 11 22 33 44',
      price: '28.00',
      status: 'Payer',
    },
    {
      id: 2,
      clientName: 'Bob Johnson',
      address: '321 Birch Ave, Riverdale',
      summary: 'pizza 4 fromages, salade césar, soda cola',
      number: '07 22 33 44 55',
      price: '35.50',
      status: 'Payer',
    },
    {
      id: 3,
      clientName: 'Charlie Brown',
      address: '987 Elm St, Greenwood',
      summary: 'sushi maki saumon, soupe miso, mochi thé vert',
      number: '06 33 44 55 66',
      price: '42.00',
      status: 'Payer',
    },
    {
      id: 4,
      clientName: 'Diana Miller',
      address: '654 Cedar Rd, Hilltown',
      summary: 'wrap poulet, nuggets, tiramisu chocolat',
      number: '07 44 55 66 77',
      price: '23.75',
      status: 'Paiement refusé',
    },
    {
      id: 5,
      clientName: 'Ethan Davis',
      address: '123 Pine St, Lakeside',
      summary: 'tacos XL boeuf, guacamole, frites cheddar, brownie',
      number: '06 55 66 77 88',
      price: '37.25',
      status: 'Payer',
    },
    {
      id: 6,
      clientName: 'Fiona Wilson',
      address: '432 Willow St, Mountainview',
      summary: 'poke bowl saumon avocat, chips de patate douce, cookie',
      number: '07 66 77 88 99',
      price: '29.90',
      status: 'Payer',
    }
  ];

  return (
    <div className="p-4 sm:p-6">
      <h1 className="text-xl sm:text-2xl font-bold mb-4">Historique des commandes</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nom du client</th>
              <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Adresse</th>
              <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Numéro de téléphone</th>
              <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Résumé de la commande</th>
              <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Prix</th>
              <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Statut</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {orders.map((order) => (
              <tr key={order.id}>
                <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{order.clientName}</td>
                <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.address}</td>
                <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.number}</td>
                <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.summary}</td>
                <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.price}€</td>
                <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <span
                    className={`inline-flex px-2 text-xs font-semibold leading-5 ${
                      order.status === 'Payer'
                        ? 'text-green-800 bg-green-100'
                        : 'text-red-800 bg-red-100'
                    } rounded-full`}
                  >
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default History;
