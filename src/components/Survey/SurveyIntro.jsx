import { Typography } from 'antd';

const { Paragraph, Text } = Typography;

export default function SurveyIntro() {
  return (
    <section className="survey__text">
      <Paragraph strong>Prezado(a) segurado(a),</Paragraph>
      <Paragraph>
        A conclusão do processo de aposentadoria representa o encerramento de uma importante etapa
        de sua trajetória profissional.
      </Paragraph>
      <Paragraph>
        Para a Goiás Previdência - GOIASPREV, conhecer a experiência dos segurados é fundamental
        para o aperfeiçoamento dos serviços prestados.
      </Paragraph>
      <Paragraph>
        Por isso, convidamos você a participar desta{' '}
        <Text strong>Pesquisa de Satisfação sobre o Processo de Aposentadoria.</Text>
      </Paragraph>
      <Paragraph>
        Suas respostas contribuirão para identificar pontos positivos e oportunidades de melhoria
        nos procedimentos e no atendimento prestado aos segurados.
      </Paragraph>
      <Paragraph strong>O preenchimento leva aproximadamente 5 minutos.</Paragraph>
      <Paragraph>Agradecemos antecipadamente pela sua participação e contribuição.</Paragraph>
    </section>
  );
}