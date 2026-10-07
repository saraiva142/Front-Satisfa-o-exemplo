import { Button, Card, Form, Input, Typography, message } from 'antd';
import { SendOutlined } from '@ant-design/icons';

import { EMAIL_SUBJECT } from '../../constants/emailTemplate';
import EmailDescription from './EmailDescription';
import { AttachButton, AttachmentList } from './EmailAttachments';
import './EmailForm.css';

export default function EmailForm() {
  const [form] = Form.useForm();
  const attachments = Form.useWatch('attachments', form) ?? [];

  const setAttachments = (files) => form.setFieldValue('attachments', files);
  const removeAttachment = (uid) => setAttachments(attachments.filter((f) => f.uid !== uid));

  const handleSubmit = (values) => {
    console.log(values);
    message.success('Pesquisa enviada com sucesso!');
    form.resetFields();
  };

  return (
    <Card className="email-form">
      <Typography.Title level={5}>
        Envio Pesquisa de Satisfação - Resultado da Concessão
      </Typography.Title>

      <Form
        form={form}
        layout="vertical"
        initialValues={{ subject: EMAIL_SUBJECT }}
        onFinish={handleSubmit}
      >
        <Form.Item
          name="recipient"
          label="Destinatário:"
          rules={[
            { required: true, message: 'Informe o destinatário' },
            { type: 'email', message: 'Email inválido' },
          ]}
        >
          <Input className="email-form__field--short" />
        </Form.Item>

        <Form.Item name="subject" label="Assunto:">
          <Input className="email-form__field--short" />
        </Form.Item>

        <Form.Item label="Descrição:">
          <EmailDescription />
        </Form.Item>

        <Form.Item
          name="link"
          label="Link do Diário Oficial:"
          rules={[
            { required: true, message: 'Informe o link' },
            { type: 'url', message: 'Link inválido' },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item name="attachments" hidden />

        <div className="email-form__footer">
          <AttachmentList files={attachments} onRemove={removeAttachment} />

          <div className="email-form__actions">
            <AttachButton files={attachments} onChange={setAttachments} />
            <Button type="primary" htmlType="submit" icon={<SendOutlined />} iconPosition="end">
              Enviar
            </Button>
          </div>
        </div>
      </Form>
    </Card>
  );
}