import { Link } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';
import { Footer } from '../../components/layout/Footer';
import marocImage from "../../images/maroc.png";
import logo from "../../images/logo.png";
import {
  Shield,
  Clock,
  UserPlus,
  Stethoscope,
  FileText,
  Activity,
  ArrowRight,
  CheckCircle,
  Heart,
  Brain,
  Pill,
  Microscope,
  Syringe,
  Laptop,
  Moon,
  Sun,
  MapPin,
} from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Sécurité maximale',
    description: 'Vos données médicales sont protégées par un cryptage de niveau avancé',
    color: 'text-medical-blue-500',
    delay: '0ms',
  },
  {
    icon: Clock,
    title: 'Disponible 24/7',
    description: 'Accédez à vos informations médicales à tout moment, où que vous soyez',
    color: 'text-medical-green-500',
    delay: '100ms',
  },
  {
    icon: UserPlus,
    title: 'Prise en charge simplifiée',
    description: 'Processus d\'admission et de suivi optimisé pour votre confort',
    color: 'text-purple-500',
    delay: '200ms',
  },
];

const services = [
  {
    icon: Heart,
    title: 'Cardiologie',
    description: 'Suivi cardiaque avancé',
    color: 'text-red-500',
  },
  {
    icon: Brain,
    title: 'Neurologie',
    description: 'Expertise neurologique',
    color: 'text-indigo-500',
  },
  {
    icon: Pill,
    title: 'Pharmacie',
    description: 'Gestion des prescriptions',
    color: 'text-emerald-500',
  },
  {
    icon: Microscope,
    title: 'Laboratoire',
    description: 'Analyses médicales',
    color: 'text-amber-500',
  },
  {
    icon: Syringe,
    title: 'Vaccinations',
    description: 'Programme vaccinal',
    color: 'text-blue-500',
  },
  {
    icon: Laptop,
    title: 'Télémédecine',
    description: 'Consultations à distance',
    color: 'text-violet-500',
  },
];

const benefits = ['Communication directe avec les praticiens',
  'Historique médical complet et accessible',
  'Des professionnels de santé qualifiés',
  'Notifications et rappels personnalisés',
  'Technologie de pointe',
  'Accessibilité et proximité',
];
const Region = [
    "Région de Souss-Massa",
  "Région de Marrakech-Safi",
  "Région de Béni Mellal-Khénifra",
  "Région de Casablanca-Settat",
  "Région de Laâyoune-Sakia El Hamra",
  "Région de Drâa-Tafilalet",
  "Région de Fès-Meknès",
  "Région de Rabat-Salé-Kénitra",
  "Région de Tanger-Tétouan-Al Hoceïma",
];
export function HomePage() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-gradient-to-b from-medical-blue-50 via-white to-medical-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Theme Toggle Button - Fixed Position */}

      <button
        onClick={toggleTheme}
        className="fixed top-4 right-4 z-50 p-2 rounded-lg bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300"
        aria-label="Toggle theme"
      >
        {theme === 'dark' ? (
          <Sun className="w-6 h-6 text-amber-500" />
        ) : (
          <Moon className="w-6 h-6 text-gray-700" />
        )}
      </button>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
    <div className="text-center relative z-10">
      
      {/* Badge d'information */}
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-medical-blue-100/50 dark:bg-medical-blue-900/50 backdrop-blur-sm mb-8 animate-fade-in">
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-medical-blue-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-medical-blue-500"></span>
        </span>
        <span className="text-medical-blue-800 dark:text-medical-blue-200 font-medium">
          Plateforme médicale nouvelle génération
        </span>
      </div>

      {/* Logo avec marge supérieure */}
      <div className="flex justify-center mt-10">
        <img src={logo} alt="Logo" className="w-35 h-20" />
      </div>

      {/* Titre avec marge supérieure */}
      <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-medical-blue-600 via-medical-blue-500 to-medical-green-500 dark:from-medical-blue-400 dark:to-medical-green-400 bg-clip-text text-transparent mb-6 mt-10 animate-fade-in">
        Votre santé, notre priorité
      </h1>

      {/* Texte avec marge supérieure */}
      <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10 mt-6 animate-slide-in">
      Notre clinique combine expertise médicale et intelligence artificielle
      pour offrir des soins personnalisés et efficaces à nos patients.
      </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 animate-slide-in" style={{ animationDelay: '200ms' }}>
              <Link
                to="/login"
                className="group relative px-8 py-3 bg-medical-blue-600 text-white rounded-full font-semibold hover:bg-medical-blue-700 transition-all duration-300 hover:shadow-glow flex items-center justify-center gap-2 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Commencer maintenant
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-medical-blue-600 to-medical-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              
              <a
                href="#features"
                className="px-8 py-3 bg-white dark:bg-gray-800 text-medical-blue-600 dark:text-medical-blue-400 rounded-full font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 border border-medical-blue-200 dark:border-gray-600 hover:shadow-lg flex items-center justify-center"
              >
                En savoir plus
              </a>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-medical-blue-400/20 to-medical-green-400/20 dark:from-medical-blue-600/20 dark:to-medical-green-600/20 rounded-full blur-3xl -z-10 animate-pulse-slow" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-medical-blue-400/10 dark:bg-medical-blue-600/10 rounded-full blur-2xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-medical-green-400/10 dark:bg-medical-green-600/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '-3s' }} />
      </div>

      {/* Features Section */}
      <section id="features" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 animate-fade-in">
            Une plateforme conçue pour vous
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 animate-slide-in">
            Découvrez nos fonctionnalités innovantes pour une meilleure expérience de santé
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-gray-800 rounded-2xl p-8 transition-all duration-300 hover:shadow-glow hover:-translate-y-1"
              style={{ animationDelay: feature.delay }}
            >
              <div className={`inline-flex p-3 rounded-xl ${feature.color} bg-opacity-50 mb-4 transition-transform duration-300 group-hover:scale-110`}>
                <feature.icon className={`w-8 h-8 ${feature.color}`} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>

      {/* Services Grid */}
      <section id="services" className="py-20 bg-medical-blue-50/50 dark:bg-gray-800/50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Nos services spécialisés
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Une gamme complète de services médicaux pour votre bien-être
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="group bg-white dark:bg-gray-800 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`inline-flex p-3 rounded-xl bg-opacity-10 ${service.color} bg-current mb-4 transition-transform duration-300 group-hover:scale-110`}>
                  {service.icon ? (
                    <service.icon className={`w-6 h-6 ${service.color}`} />
                  ) : (
                    <span className={`w-6 h-6 ${service.color}`}>Icon</span>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {service.description}
                </p>
          </div>
        ))}

          </div>
        </div>

        {/* Decorative circles */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-medical-green-400/10 rounded-full blur-2xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-medical-blue-400/10 rounded-full blur-3xl" />
      </section>

      {/* Benefits Section */}
      <section id="about" className="py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-medical-blue-500/20 to-medical-green-500/20 rounded-3xl blur-2xl" />
              <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  Pourquoi choisir notre plateforme ?
                </h2>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 animate-slide-in-left"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <CheckCircle className="w-6 h-6 text-medical-green-500 flex-shrink-0 mt-0.5" />
                      <p className="text-gray-600 dark:text-gray-300">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <Stethoscope className="w-8 h-8 text-medical-blue-500 mb-4" />
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Consultations</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Suivi médical personnalisé</p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <FileText className="w-8 h-8 text-purple-500 mb-4" />
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Dossiers</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Historique complet</p>
                </div>
              </div>
              <div className="space-y-6 mt-12">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <Activity className="w-8 h-8 text-medical-green-500 mb-4" />
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Monitoring</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Suivi en temps réel</p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <Shield className="w-8 h-8 text-amber-500 mb-4" />
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Sécurité</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Protection maximale</p>
                </div>
                
              </div>
            </div>


          <div className="flex justify-center">
            <img src={marocImage} alt="Maroc" className=" justify-right" />
          </div>
            <div className="text-center relative z-10">
              <p className="text-xs text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10 mt-6 animate-slide-in">
              Le Groupe AKDITAL est le leader de la santé privée au Maroc,
              avec une présence stratégique de 32 établissements de santé répartis dans les principales villes,
              représentant plus de 20 % de la capacité de santé privée du pays.
              </p>
              <div className="space-y-4 ml-20" >
                {Region.map((Region, index) => (
                <div key={index} className="flex items-start gap-3 animate-slide-in-left" style={{ animationDelay: `${index * 100}ms` }}>
                  <MapPin className="w-4 h-4 text-medical-blue-500 flex-shrink-0 mt-0.5" />
                  <p className="text-s text-gray-600 dark:text-gray-300">{Region}</p>
                </div>
                ))}
              </div>
            </div>





          </div>
        </div>
      </section>
                
      {/* Footer */}
      <Footer />
    </div>
  );
}