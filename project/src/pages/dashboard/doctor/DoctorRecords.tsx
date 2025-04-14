import React from 'react';
import {
  FileText,
  Search,
  Filter,
  Download,
  Upload,
  Calendar,
  Plus
} from 'lucide-react';

const records = [
  {
    id: 1,
    patient: 'Marie Lambert',
    type: 'Consultation',
    date: '2024-03-20',
    category: 'Cardiologie',
    description: 'Suivi tension artérielle',
    documents: ['Compte rendu', 'ECG', 'Prescription'],
  },
  {
    id: 2,
    patient: 'Thomas Petit',
    type: 'Analyses',
    date: '2024-03-18',
    category: 'Biologie',
    description: 'Bilan sanguin complet',
    documents: ['Résultats analyses', 'Interprétation'],
  },
  {
    id: 3,
    patient: 'Sophie Martin',
    type: 'Échographie',
    date: '2024-03-15',
    category: 'Obstétrique',
    description: 'Échographie T2',
    documents: ['Compte rendu', 'Images', 'Mesures'],
  },
];

export function DoctorRecords() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          Dossiers médicaux
        </h2>
        <div className="flex items-center gap-4">
          <div className="relative flex-1 md:flex-initial">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Rechercher..."
              className="w-full md:w-64 pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-medical-blue-500 dark:focus:ring-medical-blue-400 focus:border-transparent"
            />
          </div>
          <button className="px-4 py-2 bg-medical-blue-600 text-white rounded-lg hover:bg-medical-blue-700 transition-colors duration-200 flex items-center gap-2">
            <Plus className="w-5 h-5" />
            Nouveau dossier
          </button>
          <button className="p-2 text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200">
            <Filter className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="grid gap-6">
        {records.map((record) => (
          <div
            key={record.id}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="flex flex-col md:flex-row justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="font-semibold text-gray-900 dark:text-white">{record.patient}</h3>
                  <span className="px-2 py-1 text-xs rounded-full bg-medical-blue-100 text-medical-blue-800 dark:bg-medical-blue-900/50 dark:text-medical-blue-400">
                    {record.type}
                  </span>
                  <span className="px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300">
                    {record.category}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-2">
                  <Calendar className="w-4 h-4" />
                  <span>{record.date}</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                  {record.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {record.documents.map((doc, index) => (
                    <button
                      key={index}
                      className="inline-flex items-center px-3 py-1 rounded-lg text-sm font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 transition-colors duration-200"
                    >
                      <Download className="w-4 h-4 mr-1" />
                      {doc}
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex items-start gap-2">
                <button className="p-2 text-medical-blue-600 hover:bg-medical-blue-100 dark:text-medical-blue-400 dark:hover:bg-medical-blue-900/50 rounded-lg transition-colors duration-200">
                  <Upload className="w-5 h-5" />
                </button>
                <button className="p-2 text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200">
                  <FileText className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}