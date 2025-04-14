import React, { useState } from 'react';
import { 
  Search, 
  Plus, 
  Filter, 
  FileText, 
  Calendar, 
  MoreVertical,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

const patients = [
  {
    id: 1,
    name: 'Marie Lambert',
    age: 45,
    gender: 'F',
    phone: '+33 6 12 34 56 78',
    email: 'marie.lambert@email.com',
    address: '123 Rue de la Santé, Paris',
    lastVisit: '2024-03-20',
    nextAppointment: '2024-03-27',
    condition: 'Hypertension',
    status: 'Suivi régulier',
  },
  {
    id: 2,
    name: 'Thomas Petit',
    age: 32,
    gender: 'M',
    phone: '+33 6 23 45 67 89',
    email: 'thomas.petit@email.com',
    address: '456 Avenue du Bien-être, Lyon',
    lastVisit: '2024-03-18',
    nextAppointment: '2024-04-01',
    condition: 'Consultation générale',
    status: 'Nouveau patient',
  },
  {
    id: 3,
    name: 'Sophie Martin',
    age: 28,
    gender: 'F',
    phone: '+33 6 34 56 78 90',
    email: 'sophie.martin@email.com',
    address: '789 Boulevard de la Médecine, Marseille',
    lastVisit: '2024-03-15',
    nextAppointment: null,
    condition: 'Suivi grossesse',
    status: 'En attente',
  },
];

export function DoctorPatients() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPatient, setSelectedPatient] = useState<number | null>(null);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          Mes patients
        </h2>
        <div className="flex items-center gap-4">
          <div className="relative flex-1 md:flex-initial">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Rechercher un patient..."
              className="w-full md:w-64 pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-medical-blue-500 dark:focus:ring-medical-blue-400 focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button className="px-4 py-2 bg-medical-blue-600 text-white rounded-lg hover:bg-medical-blue-700 transition-colors duration-200 flex items-center gap-2">
            <Plus className="w-5 h-5" />
            Nouveau patient
          </button>
          <button className="p-2 text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200">
            <Filter className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Patient List */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 dark:bg-gray-700/50">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Patient
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Contact
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Dernière visite
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Prochain RDV
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
              {patients.map((patient) => (
                <React.Fragment key={patient.id}>
                  <tr 
                    className="group hover:bg-gray-50 dark:hover:bg-gray-700/50 cursor-pointer"
                    onClick={() => setSelectedPatient(selectedPatient === patient.id ? null : patient.id)}
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="h-10 w-10 flex-shrink-0">
                          <div className="h-10 w-10 rounded-full bg-medical-blue-100 dark:bg-medical-blue-900/50 flex items-center justify-center">
                            <span className="text-medical-blue-600 dark:text-medical-blue-400 font-medium">
                              {patient.name.charAt(0)}
                            </span>
                          </div>
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900 dark:text-white">
                            {patient.name}
                          </div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">
                            {patient.age} ans • {patient.gender}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900 dark:text-white">{patient.phone}</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">{patient.email}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      {patient.lastVisit}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      {patient.nextAppointment || '-'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        patient.status === 'Suivi régulier'
                          ? 'bg-medical-green-100 text-medical-green-800 dark:bg-medical-green-900/50 dark:text-medical-green-400'
                          : patient.status === 'Nouveau patient'
                          ? 'bg-medical-blue-100 text-medical-blue-800 dark:bg-medical-blue-900/50 dark:text-medical-blue-400'
                          : 'bg-amber-100 text-amber-800 dark:bg-amber-900/50 dark:text-amber-400'
                      }`}>
                        {patient.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="p-2 text-medical-blue-600 hover:bg-medical-blue-100 dark:text-medical-blue-400 dark:hover:bg-medical-blue-900/50 rounded-lg transition-colors duration-200">
                          <FileText className="w-5 h-5" />
                        </button>
                        <button className="p-2 text-medical-green-600 hover:bg-medical-green-100 dark:text-medical-green-400 dark:hover:bg-medical-green-900/50 rounded-lg transition-colors duration-200">
                          <Calendar className="w-5 h-5" />
                        </button>
                        <button className="p-2 text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200">
                          <MoreVertical className="w-5 h-5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                  {selectedPatient === patient.id && (
                    <tr>
                      <td colSpan={6} className="px-6 py-4 bg-gray-50 dark:bg-gray-700/50">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div>
                            <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                              <Phone className="w-4 h-4 text-gray-400" />
                              Contact
                            </h4>
                            <p className="text-sm text-gray-600 dark:text-gray-300">{patient.phone}</p>
                            <p className="text-sm text-gray-600 dark:text-gray-300">{patient.email}</p>
                          </div>
                          <div>
                            <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                              <MapPin className="w-4 h-4 text-gray-400" />
                              Adresse
                            </h4>
                            <p className="text-sm text-gray-600 dark:text-gray-300">{patient.address}</p>
                          </div>
                          <div>
                            <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                              <FileText className="w-4 h-4 text-gray-400" />
                              Condition
                            </h4>
                            <p className="text-sm text-gray-600 dark:text-gray-300">{patient.condition}</p>
                          </div>
                        </div>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}