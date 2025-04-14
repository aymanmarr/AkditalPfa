
import { Calendar, Video, X } from 'lucide-react';

const appointments = [
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

export function PatientAppointments() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
          <Calendar className="w-6 h-6 text-medical-blue-500" />
          Mes rendez-vous
        </h2>
      </div>

      <div className="grid gap-6">
        {appointments.map((appointment) => (
          <div 
            key={appointment.id}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-medical-blue-100 dark:bg-medical-blue-900/50 flex items-center justify-center">
                  {appointment.type === 'Consultation vidéo' ? (
                    <Video className="w-6 h-6 text-medical-blue-600 dark:text-medical-blue-400" />
                  ) : (
                    <Calendar className="w-6 h-6 text-medical-blue-600 dark:text-medical-blue-400" />
                  )}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">{appointment.doctor}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{appointment.specialty}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {appointment.date} à {appointment.time}
                  </p>
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium mt-2 ${
                    appointment.status === 'confirmé'
                      ? 'bg-medical-green-100 text-medical-green-800 dark:bg-medical-green-900/50 dark:text-medical-green-400'
                      : 'bg-amber-100 text-amber-800 dark:bg-amber-900/50 dark:text-amber-400'
                  }`}>
                    {appointment.status}
                  </span>
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
          </div>
        ))}
      </div>
    </div>
  );
}