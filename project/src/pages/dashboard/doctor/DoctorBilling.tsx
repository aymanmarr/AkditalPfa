import React from 'react';
import { 
  CreditCard, 
  Download, 
  Search, 
  Filter,
  Plus,
  Euro,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';

const invoices = [
  {
    id: 1,
    patient: 'Marie Lambert',
    date: '2024-03-20',
    amount: 50,
    type: 'Consultation',
    status: 'payé',
  },
  {
    id: 2,
    patient: 'Thomas Petit',
    date: '2024-03-18',
    amount: 75,
    type: 'Consultation spécialisée',
    status: 'en attente',
  },
  {
    id: 3,
    patient: 'Sophie Martin',
    date: '2024-03-15',
    amount: 120,
    type: 'Procédure',
    status: 'payé',
  },
];

const stats = [
  {
    title: 'Revenus du mois',
    value: '4,250€',
    trend: '+12.5%',
    positive: true,
  },
  {
    title: 'Paiements en attente',
    value: '850€',
    trend: '-3.2%',
    positive: false,
  },
  {
    title: 'Consultations',
    value: '45',
    trend: '+8.1%',
    positive: true,
  },
];

export function DoctorBilling() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
          <CreditCard className="w-6 h-6 text-medical-blue-500" />
          Facturation
        </h2>
        <div className="flex items-center gap-4">
          <div className="relative flex-1 md:flex-initial">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Rechercher une facture..."
              className="w-full md:w-64 pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-medical-blue-500 dark:focus:ring-medical-blue-400 focus:border-transparent"
            />
          </div>
          <button className="px-4 py-2 bg-medical-blue-600 text-white rounded-lg hover:bg-medical-blue-700 transition-colors duration-200 flex items-center gap-2">
            <Plus className="w-5 h-5" />
            Nouvelle facture
          </button>
          <button className="p-2 text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200">
            <Filter className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">{stat.title}</p>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-1">{stat.value}</h3>
              </div>
              <div className={`flex items-center ${
                stat.positive ? 'text-medical-green-600' : 'text-red-600'
              }`}>
                {stat.positive ? (
                  <ArrowUpRight className="w-5 h-5" />
                ) : (
                  <ArrowDownRight className="w-5 h-5" />
                )}
                <span className="ml-1 text-sm font-medium">{stat.trend}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Invoices */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 dark:bg-gray-700/50">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Patient
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Montant
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Statut
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              {invoices.map((invoice) => (
                <tr 
                  key={invoice.id}
                  className="group hover:bg-gray-50 dark:hover:bg-gray-700/50"
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="h-10 w-10 flex-shrink-0">
                        <div className="h-10 w-10 rounded-full bg-medical-blue-100 dark:bg-medical-blue-900/50 flex items-center justify-center">
                          <span className="text-medical-blue-600 dark:text-medical-blue-400 font-medium">
                            {invoice.patient.charAt(0)}
                          </span>
                        </div>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900 dark:text-white">
                          {invoice.patient}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                    {invoice.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                    {invoice.type}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                    {invoice.amount}€
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      invoice.status === 'payé'
                        ? 'bg-medical-green-100 text-medical-green-800 dark:bg-medical-green-900/50 dark:text-medical-green-400'
                        : 'bg-amber-100 text-amber-800 dark:bg-amber-900/50 dark:text-amber-400'
                    }`}>
                      {invoice.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-2 text-medical-blue-600 hover:bg-medical-blue-100 dark:text-medical-blue-400 dark:hover:bg-medical-blue-900/50 rounded-lg transition-colors duration-200">
                        <Euro className="w-5 h-5" />
                      </button>
                      <button className="p-2 text-medical-green-600 hover:bg-medical-green-100 dark:text-medical-green-400 dark:hover:bg-medical-green-900/50 rounded-lg transition-colors duration-200">
                        <Download className="w-5 h-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}