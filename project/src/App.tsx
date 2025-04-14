
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { ThemeProvider } from './contexts/ThemeContext';
import { AuthProvider } from './contexts/AuthContext';
import { LoginPage } from './pages/auth/LoginPage';
import { HomePage } from './pages/home/HomePage';
import { PatientDashboard } from './pages/dashboard/patient/PatientDashboard';
import { DoctorDashboard } from './pages/dashboard/doctor/DoctorDashboard';
import { AssistantDashboard } from './pages/dashboard/assistant/AssistantDashboard';
import { LegalNoticePage } from './pages/Apropos/LegalNoticePage';

// Patient Routes
import { PatientAppointments } from './pages/dashboard/patient/PatientAppointments';
import { PatientRecords } from './pages/dashboard/patient/PatientRecords';
import { PatientMessages } from './pages/dashboard/patient/PatientMessages';
import { PatientSettings } from './pages/dashboard/patient/PatientSettings';

// Doctor Routes
import { DoctorPatients } from './pages/dashboard/doctor/DoctorPatients';
import { DoctorConsultations } from './pages/dashboard/doctor/DoctorConsultations';
import { DoctorRecords } from './pages/dashboard/doctor/DoctorRecords';
import { DoctorMessages } from './pages/dashboard/doctor/DoctorMessages';
import { DoctorBilling } from './pages/dashboard/doctor/DoctorBilling';
import { DoctorSettings } from './pages/dashboard/doctor/DoctorSettings';
import {Chatbot} from './pages/dashboard/doctor/Chatbot';

// Assistant Routes
import { AssistantAppointments } from './pages/dashboard/assistant/AssistantAppointments';
import { AssistantMessages } from './pages/dashboard/assistant/AssistantMessages';
import { AssistantSettings } from './pages/dashboard/assistant/AssistantSettings';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/about" element={<LegalNoticePage />} />
            
            <Route path="/dashboard" element={<Layout />}>
              <Route index element={<Navigate to="/login" replace />} />
              
              {/* Patient Routes */}
              <Route path="patient" element={<PatientDashboard />} />
              <Route path="patient/appointments" element={<PatientAppointments />} />
              <Route path="patient/records" element={<PatientRecords />} />
              <Route path="patient/messages" element={<PatientMessages />} />
              <Route path="patient/settings" element={<PatientSettings />} />
              
              {/* Doctor Routes */}
              <Route path="doctor" element={<DoctorDashboard />} />
              <Route path="doctor/patients" element={<DoctorPatients />} />
              <Route path="doctor/consultations" element={<DoctorConsultations />} />
              <Route path="doctor/records" element={<DoctorRecords />} />
              <Route path="doctor/messages" element={<DoctorMessages />} />
              <Route path="doctor/billing" element={<DoctorBilling />} />
              <Route path="doctor/settings" element={<DoctorSettings />} />
              <Route path='doctor/chatbot' element={<Chatbot/>} />

              {/* Assistant Routes */}
              <Route path="assistant" element={<AssistantDashboard />} />
              <Route path="assistant/appointments" element={<AssistantAppointments />} />
              <Route path="assistant/messages" element={<AssistantMessages />} />
              <Route path="assistant/settings" element={<AssistantSettings />} />
            </Route>
            
            <Route path="*" element={<Navigate to="/login" replace />} />
          </Routes>
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;