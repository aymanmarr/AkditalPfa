import { Users, Calendar, CreditCard, TrendingUp, Stethoscope, Pill as Pills, FileText, Activity } from 'lucide-react';

const stats = [
  { name: 'Patients actifs', value: '2,345', icon: Users, trend: '+5.3%', color: 'text-medical-blue-600' },
  { name: 'Consultations du jour', value: '12', icon: Calendar, trend: '+2.3%', color: 'text-medical-green-600' },
  { name: 'Revenus mensuels', value: '45,678€', icon: CreditCard, trend: '+8.1%', color: 'text-purple-600' },
  { name: 'Taux de satisfaction', value: '98%', icon: TrendingUp, trend: '+1.2%', color: 'text-amber-600' },
];

const services = [
  {
    icon: Stethoscope,
    title: 'Consultations',
    description: 'Gestion complète des rendez-vous et suivis médicaux',
    color: 'bg-medical-blue-50 text-medical-blue-700 dark:bg-medical-blue-900/20 dark:text-medical-blue-300',
  },
  {
    icon: Pills,
    title: 'Prescriptions',
    description: 'Ordonnances électroniques et suivi des traitements',
    color: 'bg-medical-green-50 text-medical-green-700 dark:bg-medical-green-900/20 dark:text-medical-green-300',
  },
  {
    icon: FileText,
    title: 'Dossiers Médicaux',
    description: 'Historique complet et données médicales sécurisées',
    color: 'bg-purple-50 text-purple-700 dark:bg-purple-900/20 dark:text-purple-300',
  },
  {
    icon: Activity,
    title: 'Suivi Santé',
    description: 'Monitoring des indicateurs de santé en temps réel',
    color: 'bg-amber-50 text-amber-700 dark:bg-amber-900/20 dark:text-amber-300',
  },
];

const recentAppointments = [
  {
    id: 1,
    patient: 'Sophie Martin',
    time: '09:00',
    type: 'Consultation générale',
    status: 'À venir',
    statusColor: 'text-medical-blue-600 bg-medical-blue-50 dark:bg-medical-blue-900/20',
  },
  {
    id: 2,
    patient: 'Lucas Bernard',
    time: '10:30',
    type: 'Suivi traitement',
    status: 'Confirmé',
    statusColor: 'text-medical-green-600 bg-medical-green-50 dark:bg-medical-green-900/20',
  },
  {
    id: 3,
    patient: 'Emma Dubois',
    time: '14:00',
    type: 'Première consultation',
    status: 'En attente',
    statusColor: 'text-amber-600 bg-amber-50 dark:bg-amber-900/20',
  },
];

const recentActivity = [
  {
    id: 1,
    type: 'Prescription',
    description: 'Ordonnance mise à jour pour Marie Lambert',
    time: 'Il y a 5 minutes',
    icon: Pills,
    iconColor: 'text-medical-green-600',
  },
  {
    id: 2,
    type: 'Dossier',
    description: 'Nouveau rapport ajouté pour Paul Durand',
    time: 'Il y a 15 minutes',
    icon: FileText,
    iconColor: 'text-purple-600',
  },
  {
    id: 3,
    type: 'Consultation',
    description: 'Rendez-vous terminé avec Thomas Petit',
    time: 'Il y a 1 heure',
    icon: Stethoscope,
    iconColor: 'text-medical-blue-600',
  },
];

export function DashboardPage() {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Tableau de bord
        </h1>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.name}
            className="bg-white dark:bg-gray-800 overflow-hidden shadow-lg rounded-xl transition-transform hover:scale-105"
          >
            <div className="p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className={`p-3 rounded-xl bg-opacity-10 ${stat.color} bg-current`}>
                    <stat.icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 dark:text-gray-400 truncate">
                      {stat.name}
                    </dt>
                    <dd className="flex items-baseline">
                      <div className="text-2xl font-bold text-gray-900 dark:text-white">
                        {stat.value}
                      </div>
                      <div className="ml-2 flex items-baseline text-sm font-semibold text-medical-green-600">
                        {stat.trend}
                      </div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => (
          <div
            key={service.title}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transition-all hover:shadow-xl"
          >
            <div className={`inline-flex p-3 rounded-xl ${service.color}`}>
              <service.icon className="h-6 w-6" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">
              {service.title}
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              {service.description}
            </p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
            Prochains rendez-vous
          </h2>
          <div className="space-y-4">
            {recentAppointments.map((appointment) => (
              <div
                key={appointment.id}
                className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg"
              >
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 rounded-full bg-medical-blue-100 dark:bg-medical-blue-900/50 flex items-center justify-center">
                      <span className="text-sm font-medium text-medical-blue-700 dark:text-medical-blue-300">
                        {appointment.time}
                      </span>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                      {appointment.patient}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {appointment.type}
                    </p>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${appointment.statusColor}`}>
                  {appointment.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
            Activité récente
          </h2>
          <div className="space-y-4">
            {recentActivity.map((activity) => (
              <div
                key={activity.id}
                className="flex space-x-4 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg"
              >
                <div className={`flex-shrink-0 ${activity.iconColor}`}>
                  <activity.icon className="h-6 w-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    {activity.type}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {activity.description}
                  </p>
                  <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                    {activity.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}