import React from 'react';

const History: React.FC = () => {
  // Exemple de données, vous pouvez les remplacer par des données dynamiques
  const orders = [
    {
      id: 1,
      clientName: 'Mehdi Hook',
      address: '123 Main St, Springfield',
      summary: 'pates carbo , tacos L poulet tenders sauce samourai tiramisu',
      number: 'O6 98 87 45 76',
      price: '45.00',
      status: 'Payer',
    },
    {
      id: 2,
      clientName: 'Hamza coach éclaté au sol',
      address: '456 Oak St, Springfield',
      summary: '2x Tacos XL poulet tenders cordon bleu nuggets',
      number: 'O7 98 87 45 76',
      price: '32.50 ',
      status: 'Paiement refuser',
    },
    // Ajoutez plus de données selon vos besoins
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
