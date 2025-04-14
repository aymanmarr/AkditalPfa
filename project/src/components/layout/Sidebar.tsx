import { NavLink, useLocation, Link } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  Calendar, 
  FileText, 
  CreditCard,
  Settings,
  LogOut,
  MessageSquare,
  BotMessageSquare
} from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { cn } from '../../lib/utils';
import logo from '../../images/logo.png';
const getNavigationByRole = (role: string) => {
  switch (role) {
    case 'patient':
      return [
        { name: 'Tableau de bord', href: '/dashboard/patient', icon: LayoutDashboard },
        { name: 'Rendez-vous', href: '/dashboard/patient/appointments', icon: Calendar },
        { name: 'Dossier médical', href: '/dashboard/patient/records', icon: FileText },
        { name: 'Messages', href: '/dashboard/patient/messages', icon: MessageSquare },
        { name: 'Paramètres', href: '/dashboard/patient/settings', icon: Settings },
      ];
    case 'doctor':
      return [
        { name: 'Tableau de bord', href: '/dashboard/doctor', icon: LayoutDashboard },
        { name: 'Patients', href: '/dashboard/doctor/patients', icon: Users },
        { name: 'Consultations', href: '/dashboard/doctor/consultations', icon: Calendar },
        { name: 'Dossiers', href: '/dashboard/doctor/records', icon: FileText },
        { name: 'Messages', href: '/dashboard/doctor/messages', icon: MessageSquare },
        { name: 'Facturation', href: '/dashboard/doctor/billing', icon: CreditCard },
        { name: 'Chatbot', href: '/dashboard/doctor/chatbot', icon: BotMessageSquare },
        { name: 'Paramètres', href: '/dashboard/doctor/settings', icon: Settings },
      ];
    case 'assistant':
      return [
        { name: 'Tableau de bord', href: '/dashboard/assistant', icon: LayoutDashboard },
        { name: 'Rendez-vous', href: '/dashboard/assistant/appointments', icon: Calendar },
        { name: 'Patients', href: '/dashboard/assistant/patients', icon: Users },
        { name: 'Messages', href: '/dashboard/assistant/messages', icon: MessageSquare },
        { name: 'Paramètres', href: '/dashboard/assistant/settings', icon: Settings },
      ];
    default:
      return [];
  }
};

export function Sidebar() {
  const { user, logout } = useAuth();
  const location = useLocation();
  const navigation = user ? getNavigationByRole(user.role) : [];

  return (
    <div className="hidden lg:flex lg:flex-shrink-0">
      <div className="flex flex-col w-64">
        <div className="flex flex-col flex-grow bg-medical-blue-700 dark:bg-gray-800 pt-5 pb-4 overflow-y-auto">
          <div className="flex items-center flex-shrink-0 px-4">
          <Link to="/">
            <div className="">
              <img src={logo} alt="Logo" className="" />
            </div>
          </Link>
          </div>
          
          <nav className="mt-8 flex-1 px-2 space-y-1">
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                className={({ isActive }) =>
                  cn(
                    'group flex items-center px-2 py-2 text-sm font-medium rounded-md',
                    isActive
                      ? 'bg-medical-blue-800 text-white'
                      : 'text-medical-blue-100 hover:bg-medical-blue-600 hover:text-white'
                  )
                }
              >
                <item.icon className="mr-3 h-5 w-5 flex-shrink-0" />
                {item.name}
              </NavLink>
            ))}
          </nav>
          
          <div className="mt-auto px-2">
            <button
              onClick={logout}
              className="group flex items-center px-2 py-2 text-sm font-medium rounded-md text-medical-blue-100 hover:bg-medical-blue-600 hover:text-white w-full"
            >
              <LogOut className="mr-3 h-5 w-5 flex-shrink-0" />
              Déconnexion
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}