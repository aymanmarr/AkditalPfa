import React from 'react';
import { 
  Calendar, 
  Clock, 
  Video,
  CheckCircle2,
  X,
  MessageSquare,
  FileText,
  Plus
} from 'lucide-react';

const consultations = [
  {
    id: 1,
    patient: 'Marie Lambert',
    date: '2024-03-25',
    time: '09:00',
    type: 'Suivi',
    mode: 'Présentiel',
    status: 'confirmé',
    notes: 'Contrôle tension artérielle',
  },
  {
    id: 2,
    patient: 'Thomas Petit',
    date: '2024-03-25',
    time: '10:30',
    type: 'Première consultation',
    mode: 'Vidéo',
    status: 'en attente',
    notes: 'Consultation générale',
  },
  {
    id: 3,
    patient: 'Sophie Martin',
    date: '2024-03-25',
    time: '14:00',
    type: 'Suivi grossesse',
    mode: 'Présentiel',
    status: 'confirmé',
    notes: 'Échographie T2',
  },
];

export function DoctorConsultations() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          Consultations
        </h2>
        <button className="px-4 py-2 bg-medical-blue-600 text-white rounded-lg hover:bg-medical-blue-700 transition-colors duration-200 flex items-center gap-2">
          <Plus className="w-5 h-5" />
          Nouvelle consultation
        </button>
      </div>

      <div className="grid gap-6">
        {consultations.map((consultation) => (
          <div 
            key={consultation.id}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-medical-blue-100 dark:bg-medical-blue-900/50 flex items-center justify-center">
                  {consultation.mode === 'Vidéo' ? (
                    <Video className="w-6 h-6 text-medical-blue-600 dark:text-medical-blue-400" />
                  ) : (
                    <Clock className="w-6 h-6 text-medical-blue-600 dark:text-medical-blue-400" />
                  )}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      {consultation.patient}
                    </h3>
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      consultation.status === 'confirmé'
                        ? 'bg-medical-green-100 text-medical-green-800 dark:bg-medical-green-900/50 dark:text-medical-green-400'
                        : 'bg-amber-100 text-amber-800 dark:bg-amber-900/50 dark:text-amber-400'
                    }`}>
                      {consultation.status}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                    <Calendar className="w-4 h-4" />
                    <span>{consultation.date}</span>
                    <Clock className="w-4 h-4 ml-2" />
                    <span>{consultation.time}</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                    {consultation.type} • {consultation.mode}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    {consultation.notes}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className="p-2 text-medical-blue-600 hover:bg-medical-blue-100 dark:text-medical-blue-400 dark:hover:bg-medical-blue-900/50 rounded-lg transition-colors duration-200">
                  <FileText className="w-5 h-5" />
                </button>
                <button className="p-2 text-purple-600 hover:bg-purple-100 dark:text-purple-400 dark:hover:bg-purple-900/50 rounded-lg transition-colors duration-200">
                  <MessageSquare className="w-5 h-5" />
                </button>
                {consultation.mode === 'Vidéo' && (
                  <button className="p-2 text-medical-green-600 hover:bg-medical-green-100 dark:text-medical-green-400 dark:hover:bg-medical-green-900/50 rounded-lg transition-colors duration-200">
                    <Video className="w-5 h-5" />
                  </button>
                )}
                {consultation.status === 'en attente' && (
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
  );
}