import { Form, Input } from 'antd';

export default function QuestionText({ name, label, rows = 4 }) {
  return (
    <Form.Item name={name} label={label}>
      <Input.TextArea rows={rows} />
    </Form.Item>
  );
}