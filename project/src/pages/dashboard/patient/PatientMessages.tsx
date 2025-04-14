import React from 'react';
import { MessageSquare, Send } from 'lucide-react';

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

export function PatientMessages() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
          <MessageSquare className="w-6 h-6 text-medical-blue-500" />
          Messages
        </h2>
      </div>

      <div className="grid gap-6">
        {messages.map((message) => (
          <div 
            key={message.id}
            className={`bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 ${
              message.unread ? 'border-l-4 border-medical-blue-500' : ''
            }`}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-medical-blue-100 dark:bg-medical-blue-900/50 flex items-center justify-center">
                  <span className="text-medical-blue-600 dark:text-medical-blue-400 font-medium">
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
                <span className="px-2 py-1 text-xs font-medium rounded-full bg-medical-blue-100 text-medical-blue-800 dark:bg-medical-blue-900/50 dark:text-medical-blue-400">
                  Nouveau
                </span>
              )}
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">{message.message}</p>
            <div className="mt-4 flex">
              <input
                type="text"
                placeholder="Répondre..."
                className="flex-1 rounded-l-lg border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-medical-blue-500 focus:border-medical-blue-500"
              />
              <button className="px-4 py-2 bg-medical-blue-600 text-white rounded-r-lg hover:bg-medical-blue-700 transition-colors duration-200 flex items-center gap-2">
                <Send className="w-4 h-4" />
                Envoyer
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}