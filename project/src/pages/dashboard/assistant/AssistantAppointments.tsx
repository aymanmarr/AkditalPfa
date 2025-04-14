import React from 'react';
import { 
  Calendar, 
  Clock, 
  Search, 
  Filter,
  Plus,
  CheckCircle2,
  X,
  Video
} from 'lucide-react';

const appointments = [
  {
    id: 1,
    patient: 'Marie Lambert',
    doctor: 'Dr. Sophie Martin',
    date: '2024-03-25',
    time: '09:00',
    type: 'Consultation',
    status: 'confirmé',
  },
  {
    id: 2,
    patient: 'Thomas Petit',
    doctor: 'Dr. Jean Dupont',
    date: '2024-03-25',
    time: '10:30',
    type: 'Première consultation',
    status: 'en attente',
  },
  {
    id: 3,
    patient: 'Sophie Martin',
    doctor: 'Dr. Pierre Dubois',
    date: '2024-03-25',
    time: '14:00',
    type: 'Consultation vidéo',
    status: 'confirmé',
  },
];

export function AssistantAppointments() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
          <Calendar className="w-6 h-6 text-medical-blue-500" />
          Rendez-vous
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
            Nouveau rendez-vous
          </button>
          <button className="p-2 text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200">
            <Filter className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="grid gap-6">
        {appointments.map((appointment) => (
          <div 
            key={appointment.id}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="flex flex-col md:flex-row justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-medical-blue-100 dark:bg-medical-blue-900/50 flex items-center justify-center">
                  {appointment.type === 'Consultation vidéo' ? (
                    <Video className="w-6 h-6 text-medical-blue-600 dark:text-medical-blue-400" />
                  ) : (
                    <Clock className="w-6 h-6 text-medical-blue-600 dark:text-medical-blue-400" />
                  )}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-gray-900 dark:text-white">{appointment.patient}</h3>
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      appointment.status === 'confirmé'
                        ? 'bg-medical-green-100 text-medical-green-800 dark:bg-medical-green-900/50 dark:text-medical-green-400'
                        : 'bg-amber-100 text-amber-800 dark:bg-amber-900/50 dark:text-amber-400'
                    }`}>
                      {appointment.status}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{appointment.doctor}</p>
                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                    <Calendar className="w-4 h-4" />
                    <span>{appointment.date}</span>
                    <Clock className="w-4 h-4 ml-2" />
                    <span>{appointment.time}</span>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
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
                {appointment.type === 'Consultation vidéo' && (
                  <button className="p-2 text-medical-blue-600 hover:bg-medical-blue-100 dark:text-medical-blue-400 dark:hover:bg-medical-blue-900/50 rounded-lg transition-colors duration-200">
                    <Video className="w-5 h-5" />
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}