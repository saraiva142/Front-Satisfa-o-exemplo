import { Divider, Typography } from 'antd';
import QuestionRadio from './QuestionRadio';

export default function SurveySection({ title, questions }) {
  return (
    <section>
      <Divider />
      <Typography.Title level={5}>{title}</Typography.Title>
      {questions.map((question) => (
        <QuestionRadio key={question.name} {...question} />
      ))}
    </section>
  );
}