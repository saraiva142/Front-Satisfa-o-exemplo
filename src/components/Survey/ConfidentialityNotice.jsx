import { Alert } from 'antd';

export default function ConfidentialityNotice() {
  return (
    <Alert
      type="warning"
      showIcon
      message={
        <>
          <strong>Aviso de Confidencialidade:</strong> Este formulário não requer a identificação 
          de dados pessoais e tem como único objetivo coletar feedbacks para a melhoria contínua do 
          processo de aposentadoria
        </>
      }
    />
  );
}