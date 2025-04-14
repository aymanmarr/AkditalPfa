import React from 'react';
import { FileText, Download } from 'lucide-react';

const records = [
  {
    id: 1,
    type: 'Consultation',
    doctor: 'Dr. Sophie Martin',
    date: '2024-03-20',
    description: 'Consultation cardiologique de routine',
    documents: ['Compte rendu', 'ECG'],
  },
  {
    id: 2,
    type: 'Analyses',
    doctor: 'Dr. Jean Dupont',
    date: '2024-03-15',
    description: 'Bilan sanguin complet',
    documents: ['Résultats d\'analyses'],
  },
];

export function PatientRecords() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
          <FileText className="w-6 h-6 text-medical-blue-500" />
          Dossier médical
        </h2>
      </div>

      <div className="grid gap-6">
        {records.map((record) => (
          <div 
            key={record.id}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="flex justify-between items-start">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="font-semibold text-gray-900 dark:text-white">{record.type}</h3>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-medical-blue-100 text-medical-blue-800 dark:bg-medical-blue-900/50 dark:text-medical-blue-400">
                    {record.date}
                  </span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">{record.doctor}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">{record.description}</p>
                
                <div className="mt-4 flex flex-wrap gap-2">
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
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}