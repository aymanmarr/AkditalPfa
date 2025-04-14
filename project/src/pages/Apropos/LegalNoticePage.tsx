import { Link } from 'react-router-dom';
import { Scale, Sun, Moon } from 'lucide-react';
import { Footer } from '../../components/layout/Footer';
import { useTheme } from '../../contexts/ThemeContext';
import logo from "../../images/logo.png";
export function LegalNoticePage() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
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
      <header className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
            <div className="flex justify-center">
              <img src={logo} alt="Logo" className="w-30 h-12" />
            </div>
            </Link>
            <Link
              to="/"
              className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-medical-blue-600 dark:hover:text-medical-blue-400"
            >
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
          <div className="flex items-center gap-3 mb-6">
            <Scale className="h-8 w-8 text-medical-blue-600 dark:text-medical-blue-400" />
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Mentions légales</h1>
          </div>

          <div className="prose prose-blue max-w-none dark:prose-invert prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-600 dark:prose-p:text-gray-300">
          <p className="text-lg">
              Dernière mise à jour : 24 février 2025
            </p>

            <h2>1. Informations légales</h2>
            <p>
              Le site du Groupe Clinique Akdital est édité par :
            </p>
            <p>
              <strong>Raison sociale</strong> : Groupe Clinique Akdital<br />
              <strong>Forme juridique</strong> : Société Anonyme (SA)<br />
              <strong>Capital social</strong> : 300 000 000 MAD<br />
              <strong>Siège social</strong> : 31 Boulevard d’Anfa, Casablanca, Maroc<br />
              <strong>RC</strong> : 431149 (Casablanca)<br />
              <strong>IF</strong> : 40483974<br />
              <strong>Directeur de la publication</strong> : Dr Rochdi Talib, Président Directeur Général
            </p>

            <h2>2. Hébergement</h2>
            <p>
              Le site du Groupe Clinique Akdital est hébergé par :
            </p>
            <p>
              <strong>Raison sociale</strong> : XYZ Hosting Maroc SARL<br />
              <strong>Adresse</strong> : Technopark, Casablanca, Maroc<br />
              <strong>Téléphone</strong> : +212 5 22 45 67 89<br />
              <strong>Email</strong> : support@xyzhosting.ma
            </p>
            <p>
              XYZ Hosting Maroc SARL est certifié conforme aux normes de sécurité et de protection des données de santé au Maroc.
            </p>

            <h2>3. Propriété intellectuelle</h2>
            <p>
              L'ensemble des éléments constituant le site du Groupe Clinique Akdital (textes, graphismes, logiciels, photographies, images, vidéos, sons, logos, marques, etc.)
              ainsi que le site lui-même, sont la propriété exclusive du Groupe Clinique Akdital ou de ses partenaires. Ces éléments sont protégés par les lois relatives
              à la propriété intellectuelle au Maroc.
            </p>
            <p>
              Toute reproduction, représentation, modification, publication, adaptation ou exploitation de tout ou partie des éléments du site, 
              quel que soit le moyen ou le procédé utilisé, est interdite sans l'autorisation écrite préalable du Groupe Clinique Akdital.
            </p>

            <h2>4. Protection des données personnelles</h2>
            <p>
              Le Groupe Clinique Akdital s'engage à respecter la confidentialité des données personnelles communiquées par les utilisateurs du site.
              Ces données sont traitées conformément à la loi n° 09-08 relative à la protection des personnes physiques à l'égard du traitement des données à caractère personnel au Maroc.
            </p>
            <p>
              Pour plus d'informations sur la collecte et le traitement des données personnelles, veuillez consulter notre
              <Link to="/privacy" className="text-medical-blue-600 dark:text-medical-blue-400 hover:underline"> Politique de confidentialité</Link>.
            </p>

            <h2>5. Délégué à la protection des données</h2>
            <p>
              Le Groupe Clinique Akdital a désigné un Délégué à la Protection des Données (DPO) que vous pouvez contacter pour toute question relative 
              à la protection de vos données personnelles :
            </p>
            <p>
              <strong>Email</strong> : dpo@akdital.ma<br />
              <strong>Adresse postale</strong> : DPO Akdital, 31 Boulevard d’Anfa, Casablanca, Maroc
            </p>

            <h2>6. Déclaration à la CNDP</h2>
            <p>
              Conformément à la loi n° 09-08, le traitement des données personnelles mis en œuvre dans le cadre du site du Groupe Clinique Akdital a été déclaré auprès de la 
              Commission Nationale de Contrôle de la Protection des Données à Caractère Personnel (CNDP) sous le numéro D-2025-123456.
            </p>

            <h2>7. Cookies</h2>
            <p>
              Le site du Groupe Clinique Akdital utilise des cookies pour améliorer l'expérience utilisateur et analyser le trafic. 
              Pour plus d'informations sur l'utilisation des cookies, veuillez consulter notre 
              <Link to="/privacy" className="text-medical-blue-600 dark:text-medical-blue-400 hover:underline"> Politique de confidentialité</Link>.
            </p>

            <h2>8. Liens hypertextes</h2>
            <p>
              Le site du Groupe Clinique Akdital peut contenir des liens hypertextes vers d'autres sites internet. Le Groupe Clinique Akdital n'exerce aucun contrôle 
              sur ces sites et décline toute responsabilité quant à leur contenu.
            </p>

            <h2>9. Droit applicable et juridiction compétente</h2>
            <p>
              Les présentes mentions légales sont soumises au droit marocain. En cas de litige, les tribunaux de Casablanca seront seuls compétents.
            </p>

            <h2>10. Contact</h2>
            <p>
              Pour toute question concernant ces mentions légales, vous pouvez nous contacter à :
            </p>
            <p>
              <strong>Email</strong> : legal@akdital.ma<br />
              <strong>Adresse</strong> : 31 Boulevard d’Anfa, Casablanca, Maroc<br />
              <strong>Téléphone</strong> : +212 5 22 45 67 89
            </p>

            
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}