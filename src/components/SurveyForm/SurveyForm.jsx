import { Button, Card, Form, Input, Typography } from 'antd';
import { SendOutlined } from '@ant-design/icons';
import AttachmentUpload from '../AttachmentUpload/AttachmentUpload';

export default function SurveyForm() {
  const [form] = Form.useForm();

  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <Card>
      <Typography.Title level={4}>Envio Pesquisa de Satisfação:</Typography.Title>

      <Form form={form} layout="vertical" onFinish={handleSubmit}>
        <Form.Item
          name="email"
          label="Email do Servidor:"
          rules={[
            { required: true, message: 'Informe o email' },
            { type: 'email', message: 'Email inválido' },
          ]}
        >
          <Input style={{ maxWidth: 400 }} />
        </Form.Item>

        <Form.Item
          name="link"
          label="Link do Diário Oficial:"
          rules={[{ required: true, message: 'Informe o link' }]}
        >
          <Input style={{ maxWidth: 800 }} />
        </Form.Item>

        <Form.Item name="attachment" label="Anexo do Diário Oficial:">
          <AttachmentUpload />
        </Form.Item>

        <Form.Item style={{ textAlign: 'right', marginBottom: 0 }}>
          <Button type="primary" htmlType="submit" icon={<SendOutlined />} iconPosition="end">
            Enviar Pesquisa
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
}