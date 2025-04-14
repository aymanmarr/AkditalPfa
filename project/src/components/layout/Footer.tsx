
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
} from 'lucide-react';
import logo from '../../images/logo.png';
export function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <img src={logo}
            alt="Akdital"
            className="w-40 "
            />
            <p className="text-gray-600 dark:text-gray-400">
              Votre plateforme médicale de confiance pour une gestion optimale de vos soins de santé.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-medical-blue-600 dark:hover:text-medical-blue-400">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-medical-blue-600 dark:hover:text-medical-blue-400">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-medical-blue-600 dark:hover:text-medical-blue-400">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-medical-blue-600 dark:hover:text-medical-blue-400">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gray-900 dark:text-white font-semibold mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 dark:text-gray-400 hover:text-medical-blue-600 dark:hover:text-medical-blue-400">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/login" className="text-gray-600 dark:text-gray-400 hover:text-medical-blue-600 dark:hover:text-medical-blue-400">
                  Connexion
                </Link>
              </li>
              <li>
                <a href="#services" className="text-gray-600 dark:text-gray-400 hover:text-medical-blue-600 dark:hover:text-medical-blue-400">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-600 dark:text-gray-400 hover:text-medical-blue-600 dark:hover:text-medical-blue-400">
                  À propos
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-gray-900 dark:text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="/login" className="text-gray-600 dark:text-gray-400 hover:text-medical-blue-600 dark:hover:text-medical-blue-400">
                  Téléconsultation
                </a>
              </li>
              <li>
                <a href="/login" className="text-gray-600 dark:text-gray-400 hover:text-medical-blue-600 dark:hover:text-medical-blue-400">
                  Rendez-vous
                </a>
              </li>
              <li>
                <a href="/login" className="text-gray-600 dark:text-gray-400 hover:text-medical-blue-600 dark:hover:text-medical-blue-400">
                  Prescriptions
                </a>
              </li>
              <li>
                <a href="/login" className="text-gray-600 dark:text-gray-400 hover:text-medical-blue-600 dark:hover:text-medical-blue-400">
                  Dossiers médicaux
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-gray-900 dark:text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                <Phone className="w-5 h-5" />
                <span>+212 (0) 522 23 14 14</span>
              </li>
              <li className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                <Mail className="w-5 h-5" />
                <a href="mailto:communication@akdital.ma" className="hover:text-medical-blue-600 dark:hover:text-medical-blue-400">
                communication@akdital.ma
                </a>
              </li>
              <li className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                <MapPin className="w-5 h-5" />
                <span>246 Rte de l'Oasis, Casablanca 20250</span>
              </li>
            </ul>
          </div>
        </div>
        


        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              © 2025 Akdital. Tous droits réservés.
            </p>
            <div className="flex items-center gap-6">
              <Link to="/About" className="text-sm text-gray-600 dark:text-gray-400 hover:text-medical-blue-600 dark:hover:text-medical-blue-400">
                Politique de confidentialité
              </Link>
              <Link to="/terms" className="text-sm text-gray-600 dark:text-gray-400 hover:text-medical-blue-600 dark:hover:text-medical-blue-400">
                Conditions d'utilisation
              </Link>
              <Link to="/legal" className="text-sm text-gray-600 dark:text-gray-400 hover:text-medical-blue-600 dark:hover:text-medical-blue-400">
                Mentions légales
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}