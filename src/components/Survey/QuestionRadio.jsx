import { Form, Radio, Space, Typography } from 'antd';

export default function QuestionRadio({ name, label, options, legend }) {
  return (
    <Form.Item
      name={name}
      label={<strong>{label}</strong>}
      rules={[{ required: true, message: 'Selecione uma opção' }]}
    >
      <Radio.Group>
        {legend && (
          <div className="survey__legend">
            {legend.map((item) => (
              <Typography.Text key={item}>{item}</Typography.Text>
            ))}
          </div>
        )}
        <Space direction="vertical">
          {options.map(({ label: optionLabel, value }) => (
            <Radio key={value} value={value}>
              {optionLabel}
            </Radio>
          ))}
        </Space>
      </Radio.Group>
    </Form.Item>
  );
}