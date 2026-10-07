import { Divider, Typography } from 'antd';

export default function SurveyThanks() {
  return (
    <section className="survey__text">
      <Divider />
      <Typography.Title level={5}>Agradecemos sua participação!</Typography.Title>
      <Typography.Paragraph>
        Sua opinião é importante para o aprimoramento contínuo dos serviços prestados pela Goiás
        Previdência - GOIASPREV e para a melhoria da experiência dos segurados.
      </Typography.Paragraph>
      <Typography.Paragraph>
        Desejamos sucesso nesta nova etapa de sua vida e agradecemos por sua contribuição ao
        serviço público do Estado de Goiás.
      </Typography.Paragraph>
    </section>
  );
}