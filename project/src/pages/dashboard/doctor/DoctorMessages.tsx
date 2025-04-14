import React from 'react';
import { MessageSquare, Send, Search } from 'lucide-react';

const messages = [
  {
    id: 1,
    patient: 'Marie Lambert',
    message: 'Bonjour Docteur, je souhaiterais prendre rendez-vous pour la semaine prochaine.',
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
  {
    id: 3,
    patient: 'Sophie Martin',
    message: 'J\'ai une question concernant mon traitement.',
    date: '2024-03-20',
    time: '16:45',
    unread: false,
  },
];

export function DoctorMessages() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
          <MessageSquare className="w-6 h-6 text-medical-blue-500" />
          Messages
        </h2>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Rechercher dans les messages..."
            className="pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-medical-blue-500 dark:focus:ring-medical-blue-400 focus:border-transparent w-64"
          />
        </div>
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
                    {message.patient.charAt(0)}
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