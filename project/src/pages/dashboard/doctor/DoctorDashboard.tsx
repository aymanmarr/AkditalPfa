import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Users,
  Search,
  Calendar,
  MessageSquare,
  FileText,
  Clock,
  CheckCircle2,
  X,
  Video,
  Plus,
  MoreVertical,
  Filter
} from 'lucide-react';

const patients = [
  {
    id: 1,
    name: 'Marie Lambert',
    age: 45,
    lastVisit: '2024-03-20',
    nextAppointment: '2024-03-27',
    status: 'Suivi régulier',
    condition: 'Hypertension',
  },
  {
    id: 2,
    name: 'Thomas Petit',
    age: 32,
    lastVisit: '2024-03-18',
    nextAppointment: '2024-04-01',
    status: 'Nouveau patient',
    condition: 'Consultation générale',
  },
  {
    id: 3,
    name: 'Sophie Martin',
    age: 28,
    lastVisit: '2024-03-15',
    nextAppointment: null,
    status: 'En attente',
    condition: 'Suivi grossesse',
  },
];

const appointments = [
  {
    id: 1,
    patient: 'Marie Lambert',
    time: '09:00',
    date: '2024-03-27',
    type: 'Suivi',
    status: 'confirmé',
  },
  {
    id: 2,
    patient: 'Paul Dubois',
    time: '10:30',
    date: '2024-03-27',
    type: 'Première consultation',
    status: 'en attente',
  },
  {
    id: 3,
    patient: 'Sophie Martin',
    time: '14:00',
    date: '2024-03-27',
    type: 'Consultation vidéo',
    status: 'confirmé',
  },
];

const messages = [
  {
    id: 1,
    patient: 'Marie Lambert',
    message: 'Docteur, puis-je prendre un rendez-vous pour la semaine prochaine ?',
    date: '2024-03-22',
    time: '15:30',
    unread: true,
  },
  {
    id: 2,
    patient: 'Thomas Petit',
    message: 'Merci pour la consultation d\'hier.',
    date: '2024-03-21',
    time: '10:15',
    unread: false,
  },
];

export function DoctorDashboard() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Tableau de bord
        </h1>
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
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-medical-blue-100 dark:bg-medical-blue-900/50 rounded-lg">
              <Users className="w-6 h-6 text-medical-blue-600 dark:text-medical-blue-400" />
            </div>
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Patients actifs</p>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">127</h3>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-medical-green-100 dark:bg-medical-green-900/50 rounded-lg">
              <Calendar className="w-6 h-6 text-medical-green-600 dark:text-medical-green-400" />
            </div>
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">RDV aujourd'hui</p>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">8</h3>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-purple-100 dark:bg-purple-900/50 rounded-lg">
              <MessageSquare className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Messages</p>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">3</h3>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-amber-100 dark:bg-amber-900/50 rounded-lg">
              <FileText className="w-6 h-6 text-amber-600 dark:text-amber-400" />
            </div>
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Dossiers à jour</p>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">98%</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Patient List */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 lg:col-span-2">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <Users className="w-5 h-5 text-medical-blue-500" />
              Patients récents
            </h2>
            <button className="p-2 text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200 flex items-center gap-2">
              <Filter className="w-5 h-5" />
              Filtrer
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left border-b border-gray-200 dark:border-gray-700">
                  <th className="pb-3 text-gray-600 dark:text-gray-400 font-medium">Patient</th>
                  <th className="pb-3 text-gray-600 dark:text-gray-400 font-medium">Âge</th>
                  <th className="pb-3 text-gray-600 dark:text-gray-400 font-medium">Dernière visite</th>
                  <th className="pb-3 text-gray-600 dark:text-gray-400 font-medium">Prochain RDV</th>
                  <th className="pb-3 text-gray-600 dark:text-gray-400 font-medium">Statut</th>
                  <th className="pb-3 text-gray-600 dark:text-gray-400 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {patients.map((patient) => (
                  <tr key={patient.id} className="group hover:bg-gray-50 dark:hover:bg-gray-700/50">
                    <td className="py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-medical-blue-100 dark:bg-medical-blue-900/50 flex items-center justify-center">
                          <span className="text-medical-blue-600 dark:text-medical-blue-400 font-medium">
                            {patient.name.split(' ')[0][0]}
                          </span>
                        </div>
                        <div>
                          <p className="font-medium text-gray-900 dark:text-white">{patient.name}</p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">{patient.condition}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 text-gray-600 dark:text-gray-300">{patient.age} ans</td>
                    <td className="py-4 text-gray-600 dark:text-gray-300">{patient.lastVisit}</td>
                    <td className="py-4 text-gray-600 dark:text-gray-300">
                      {patient.nextAppointment || '-'}
                    </td>
                    <td className="py-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        patient.status === 'Suivi régulier'
                          ? 'bg-medical-green-100 dark:bg-medical-green-900/50 text-medical-green-600 dark:text-medical-green-400'
                          : patient.status === 'Nouveau patient'
                          ? 'bg-medical-blue-100 dark:bg-medical-blue-900/50 text-medical-blue-600 dark:text-medical-blue-400'
                          : 'bg-amber-100 dark:bg-amber-900/50 text-amber-600 dark:text-amber-400'
                      }`}>
                        {patient.status}
                      </span>
                    </td>
                    <td className="py-4">
                      <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
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
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Today's Appointments */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
            <Calendar className="w-5 h-5 text-medical-green-500" />
            Rendez-vous du jour
          </h2>
          <div className="space-y-4">
            {appointments.map((appointment) => (
              <div 
                key={appointment.id}
                className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4 flex items-center justify-between group hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
              >
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-medical-blue-100 dark:bg-medical-blue-900/50 flex items-center justify-center">
                      {appointment.type === 'Consultation vidéo' ? (
                        <Video className="w-6 h-6 text-medical-blue-600 dark:text-medical-blue-400" />
                      ) : (
                        <Clock className="w-6 h-6 text-medical-blue-600 dark:text-medical-blue-400" />
                      )}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">{appointment.patient}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{appointment.time} - {appointment.type}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {appointment.status === 'en attente' ? (
                    <>
                      <button className="p-2 text-medical-green-600 hover:bg-medical-green-100 dark:text-medical-green-400 dark:hover:bg-medical-green-900/50 rounded-lg transition-colors duration-200">
                        <CheckCircle2 className="w-5 h-5" />
                      </button>
                      <button className="p-2 text-red-600 hover:bg-red-100 dark:text-red-400 dark:hover:bg-red-900/50 rounded-lg transition-colors duration-200">
                        <X className="w-5 h-5" />
                      </button>
                    </>
                  ) : (
                    appointment.type === 'Consultation vidéo' && (
                      <button className="p-2 text-medical-blue-600 hover:bg-medical-blue-100 dark:text-medical-blue-400 dark:hover:bg-medical-blue-900/50 rounded-lg transition-colors duration-200">
                        <Video className="w-5 h-5" />
                      </button>
                    )
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Messages */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
            <MessageSquare className="w-5 h-5 text-purple-500" />
            Messages récents
          </h2>
          <div className="space-y-4">
            {messages.map((message) => (
              <div 
                key={message.id}
                className={`bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4 group hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 ${
                  message.unread ? 'border-l-4 border-purple-500' : ''
                }`}
              >
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center">
                      <span className="text-purple-600 dark:text-purple-400 font-medium">
                        {message.patient.split(' ')[0][0]}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">{message.patient}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {message.date} à {message.time}
                      </p>
                    </div>
                  </div>
                  {message.unread && (
                    <span className="px-2 py-1 bg-purple-100  dark:bg-purple-900/50 text-purple-600 dark:text-purple-400 rounded-full text-xs">
                      Nouveau
                    </span>
                  )}
                </div>
                <p className="text-gray-600 dark:text-gray-300 ml-13">
                  {message.message}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
