import Header from './components/Header/Header';
import ReportFilter from './components/ReportFilter/ReportFilter';
import SurveyForm from './components/SurveyForm/SurveyForm';
import './App.css';

export default function App() {
  return (
    <>
      <Header title="Pesquisa de Satisfação – Processo de Aposentadoria" />
      <main className="page-content">
        <ReportFilter />
        <SurveyForm />
      </main>
    </>
  );
}