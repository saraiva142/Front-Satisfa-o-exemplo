import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import AppLayout from './components/Layout/AppLayout';
import Header from './components/Header/Header';
import EmailPage from './pages/EmailPage';
import ReportPage from './pages/ReportPage';
import SurveyPage from './pages/SurveyPage';
import { ROUTES } from './constants/routes';
import './App.css';

const TITLE = 'Pesquisa de Satisfação – Processo de Aposentadoria';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout title={TITLE} />}>
          <Route index element={<Navigate to={ROUTES.email} replace />} />
          <Route path={ROUTES.email} element={<EmailPage />} />
          <Route path={ROUTES.report} element={<ReportPage />} />
        </Route>

        <Route
          path={ROUTES.survey}
          element={
            <>
              <Header title={TITLE} />
              <main className="page-content">
                <SurveyPage />
              </main>
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}