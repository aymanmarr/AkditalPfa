import React from 'react';
import { 
  Calendar, 
  FileText, 
  MessageSquare, 
  Clock, 
  Download,
  X,
  Video,
  CreditCard
} from 'lucide-react';

const upcomingAppointments = [
  {
    id: 1,
    doctor: 'Dr. Sophie Martin',
    specialty: 'Cardiologie',
    date: '2024-03-25',
    time: '14:30',
    type: 'Consultation vidéo',
    status: 'confirmé',
  },
  {
    id: 2,
    doctor: 'Dr. Jean Dupont',
    specialty: 'Dermatologie',
    date: '2024-03-28',
    time: '10:00',
    type: 'Présentiel',
    status: 'en attente',
  },
];

const recentPrescriptions = [
  {
    id: 1,
    doctor: 'Dr. Sophie Martin',
    date: '2024-03-20',
    medications: ['Amoxicilline 500mg', 'Paracétamol 1000mg'],
    status: 'actif',
  },
  {
    id: 2,
    doctor: 'Dr. Jean Dupont',
    date: '2024-03-15',
    medications: ['Ibuprofène 400mg'],
    status: 'terminé',
  },
];

const messages = [
  {
    id: 1,
    doctor: 'Dr. Sophie Martin',
    message: 'Bonjour, comment vous sentez-vous depuis notre dernière consultation ?',
    date: '2024-03-22',
    time: '09:15',
    unread: true,
  },
  {
    id: 2,
    doctor: 'Dr. Jean Dupont',
    message: 'Vos résultats d\'analyses sont disponibles.',
    date: '2024-03-21',
    time: '14:30',
    unread: false,
  },
];

export function PatientDashboard() {
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Tableau de bord patient
        </h1>
        <button className="px-4 py-2 bg-medical-blue-600 text-white rounded-lg hover:bg-medical-blue-700 transition-colors duration-200 flex items-center gap-2">
          <Video className="w-5 h-5" />
          Nouvelle consultation vidéo
        </button>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-medical-blue-100 dark:bg-medical-blue-900/50 rounded-lg">
              <Calendar className="w-6 h-6 text-medical-blue-600 dark:text-medical-blue-400" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Prochain RDV</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Dans 3 jours</p>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-medical-green-100 dark:bg-medical-green-900/50 rounded-lg">
              <FileText className="w-6 h-6 text-medical-green-600 dark:text-medical-green-400" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Ordonnances</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">2 actives</p>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-purple-100 dark:bg-purple-900/50 rounded-lg">
              <MessageSquare className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Messages</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">1 non lu</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Upcoming Appointments */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
            <Calendar className="w-5 h-5 text-medical-blue-500" />
            Rendez-vous à venir
          </h2>
          <div className="space-y-4">
            {upcomingAppointments.map((appointment) => (
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
                    <h3 className="font-semibold text-gray-900 dark:text-white">{appointment.doctor}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{appointment.specialty}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {appointment.date} à {appointment.time}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {appointment.type === 'Consultation vidéo' && (
                    <button className="p-2 text-medical-blue-600 hover:bg-medical-blue-100 dark:text-medical-blue-400 dark:hover:bg-medical-blue-900/50 rounded-lg transition-colors duration-200">
                      <Video className="w-5 h-5" />
                    </button>
                  )}
                  <button className="p-2 text-red-600 hover:bg-red-100 dark:text-red-400 dark:hover:bg-red-900/50 rounded-lg transition-colors duration-200">
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Prescriptions */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
            <FileText className="w-5 h-5 text-medical-green-500" />
            Ordonnances récentes
          </h2>
          <div className="space-y-4">
            {recentPrescriptions.map((prescription) => (
              <div 
                key={prescription.id}
                className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4 group hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
              >
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">{prescription.doctor}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{prescription.date}</p>
                  </div>
                  <button className="p-2 text-medical-blue-600 hover:bg-medical-blue-100 dark:text-medical-blue-400 dark:hover:bg-medical-blue-900/50 rounded-lg transition-colors duration-200">
                    <Download className="w-5 h-5" />
                  </button>
                </div>
                <div className="mt-2">
                  <div className="flex flex-wrap gap-2">
                    {prescription.medications.map((medication, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-medical-green-100 dark:bg-medical-green-900/50 text-medical-green-600 dark:text-medical-green-400 rounded-full text-sm"
                      >
                        {medication}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Messages */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 lg:col-span-2">
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
                        {message.doctor.split(' ')[1][0]}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">{message.doctor}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {message.date} à {message.time}
                      </p>
                    </div>
                  </div>
                  {message.unread && (
                    <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-400 rounded-full text-xs">
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