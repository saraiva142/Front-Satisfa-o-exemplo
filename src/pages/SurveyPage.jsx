import { Button, Divider, Form, message } from 'antd';
import { SendOutlined } from '@ant-design/icons';

import ConfidentialityNotice from '../components/Survey/ConfidentialityNotice';
import QuestionRadio from '../components/Survey/QuestionRadio';
import QuestionText from '../components/Survey/QuestionText';
import SurveyIntro from '../components/Survey/SurveyIntro';
import SurveySection from '../components/Survey/SurveySection';
import SurveyThanks from '../components/Survey/SurveyThanks';
import { SURVEY_SECTIONS } from '../constants/surveyQuestions';
import '../components/Survey/Survey.css';

const YES_NO = [
  { label: 'Não', value: false },
  { label: 'Sim', value: true },
];

export default function SurveyPage() {
  const [form] = Form.useForm();
  const hasDifficulty = Form.useWatch('q5_1', form);

  const handleSubmit = (values) => {
    console.log(values);
    message.success('Pesquisa enviada com sucesso!');
    form.resetFields();
  };

  return (
    <Form form={form} layout="vertical" onFinish={handleSubmit} className="survey">
      <SurveyIntro />
      <ConfidentialityNotice />

      {SURVEY_SECTIONS.map((section) => (
        <SurveySection key={section.title} {...section} />
      ))}

      <Divider />
      <h4><strong>5. CONTRIBUIÇÃO DO SEGURADO</strong></h4>

      <QuestionRadio
        name="q5_1"
        label="5.1. Durante o processo de aposentadoria, você enfrentou alguma dificuldade que considera importante registrar?"
        options={YES_NO}
      />
      {hasDifficulty && <QuestionText name="q5_1_description" label="Se sim, descreva:" />}

      <QuestionText
        name="q5_2"
        label="5.2. Utilize este espaço para registrar sugestões, elogios, críticas ou outras considerações que possam contribuir para o aprimoramento dos serviços relacionados ao processo de aposentadoria."
      />

      <SurveyThanks />

      <div className="survey__actions">
        <Button type="primary" htmlType="submit" icon={<SendOutlined />} iconPosition="end">
          Enviar
        </Button>
      </div>
    </Form>
  );
}