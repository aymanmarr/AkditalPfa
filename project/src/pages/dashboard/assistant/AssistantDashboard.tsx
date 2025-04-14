import React from 'react';
import { 
  Calendar,
  Bell,
  Users,
  Phone,
  Plus,
  Search,
  CheckCircle2,
  X,
  MessageSquare,
  Clock
} from 'lucide-react';

const appointments = [
  {
    id: 1,
    patient: 'Marie Lambert',
    doctor: 'Dr. Sophie Martin',
    date: '2024-03-27',
    time: '09:00',
    type: 'Consultation',
    status: 'confirmé',
  },
  {
    id: 2,
    patient: 'Thomas Petit',
    doctor: 'Dr. Jean Dupont',
    date: '2024-03-27',
    time: '10:30',
    type: 'Suivi',
    status: 'en attente',
  },
  {
    id: 3,
    patient: 'Sophie Martin',
    doctor: 'Dr. Pierre Dubois',
    date: '2024-03-27',
    time: '14:00',
    type: 'Première consultation',
    status: 'confirmé',
  },
];

const reminders = [
  {
    id: 1,
    patient: 'Marie Lambert',
    type: 'Rappel rendez-vous',
    date: '2024-03-26',
    time: '10:00',
    status: 'envoyé',
  },
  {
    id: 2,
    patient: 'Thomas Petit',
    type: 'Résultats disponibles',
    date: '2024-03-26',
    time: '14:30',
    status: 'en attente',
  },
];

const requests = [
  {
    id: 1,
    patient: 'Paul Dubois',
    type: 'Demande de rendez-vous',
    date: '2024-03-25',
    time: '16:45',
    status: 'nouveau',
    message: 'Souhaite un rendez-vous pour la semaine prochaine',
  },
  {
    id: 2,
    patient: 'Sophie Martin',
    type: 'Question administrative',
    date: '2024-03-25',
    time: '15:30',
    status: 'en cours',
    message: 'Demande d\'informations sur les documents à fournir',
  },
];

export function AssistantDashboard() {
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Tableau de bord assistant
        </h1>
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
            Nouveau rendez-vous
          </button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-medical-blue-100 dark:bg-medical-blue-900/50 rounded-lg">
              <Calendar className="w-6 h-6 text-medical-blue-600 dark:text-medical-blue-400" />
            </div>
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">RDV aujourd'hui</p>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">12</h3>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-medical-green-100 dark:bg-medical-green-900/50 rounded-lg">
              <Bell className="w-6 h-6 text-medical-green-600 dark:text-medical-green-400" />
            </div>
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Rappels à envoyer</p>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">5</h3>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-purple-100 dark:bg-purple-900/50 rounded-lg">
              <MessageSquare className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Demandes en attente</p>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">3</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Today's Appointments */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
            <Calendar className="w-5 h-5 text-medical-blue-500" />
            Rendez-vous du jour
          </h2>
          <div className="space-y-4">
            {appointments.map((appointment) => (
              <div 
                key={appointment.id}
                className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4 group hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-medical-blue-100 dark:bg-medical-blue-900/50 flex items-center justify-center">
                      <Clock className="w-6 h-6 text-medical-blue-600 dark:text-medical-blue-400" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold text-gray-900 dark:text-white">
                          {appointment.patient}
                        </h3>
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          appointment.status === 'confirmé'
                            ? 'bg-medical-green-100 dark:bg-medical-green-900/50 text-medical-green-600 dark:text-medical-green-400'
                            : 'bg-amber-100 dark:bg-amber-900/50 text-amber-600 dark:text-amber-400'
                        }`}>
                          {appointment.status}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {appointment.time} - {appointment.doctor}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {appointment.type}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {appointment.status === 'en attente' && (
                      <>
                        <button className="p-2 text-medical-green-600 hover:bg-medical-green-100 dark:text-medical-green-400 dark:hover:bg-medical-green-900/50 rounded-lg transition-colors duration-200">
                          <CheckCircle2 className="w-5 h-5" />
                        </button>
                        <button className="p-2 text-red-600 hover:bg-red-100 dark:text-red-400 dark:hover:bg-red-900/50 rounded-lg transition-colors duration-200">
                          <X className="w-5 h-5" />
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Reminders */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
            <Bell className="w-5 h-5 text-medical-green-500" />
            Rappels
          </h2>
          <div className="space-y-4">
            {reminders.map((reminder) => (
              <div 
                key={reminder.id}
                className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4 group hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-medical-green-100 dark:bg-medical-green-900/50 flex items-center justify-center">
                      <Bell className="w-6 h-6 text-medical-green-600 dark:text-medical-green-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">
                        {reminder.patient}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {reminder.type}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {reminder.date} à {reminder.time}
                      </p>
                    </div>
                  </div>
                  {reminder.status === 'en attente' && (
                    <button className="px-4 py-2 bg-medical-green-600 text-white rounded-lg hover:bg-medical-green-700 transition-colors duration-200">
                      Envoyer
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Patient Requests */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 lg:col-span-2">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
            <MessageSquare className="w-5 h-5 text-purple-500" />
            Demandes des patients
          </h2>
          <div className="space-y-4">
            {requests.map((request) => (
              <div 
                key={request.id}
                className={`bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4 group hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 ${
                  request.status === 'nouveau' ? 'border-l-4 border-purple-500' : ''
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center">
                      <Users className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold text-gray-900 dark:text-white">
                          {request.patient}
                        </h3>
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          request.status === 'nouveau'
                            ? 'bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-400'
                            : 'bg-medical-blue-100 dark:bg-medical-blue-900/50 text-medical-blue-600 dark:text-medical-blue-400'
                        }`}>
                          {request.status}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {request.type}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {request.date} à {request.time}
                      </p>
                      <p className="mt-2 text-gray-700 dark:text-gray-300">
                        {request.message}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="p-2 text-medical-blue-600 hover:bg-medical-blue-100 dark:text-medical-blue-400 dark:hover:bg-medical-blue-900/50 rounded-lg transition-colors duration-200">
                      <Phone className="w-5 h-5" />
                    </button>
                    <button className="p-2 text-medical-green-600 hover:bg-medical-green-100 dark:text-medical-green-400 dark:hover:bg-medical-green-900/50 rounded-lg transition-colors duration-200">
                      <CheckCircle2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}