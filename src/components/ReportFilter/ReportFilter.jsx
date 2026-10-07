import { Button, Card, DatePicker, Form, Typography } from 'antd';
import { FileExcelOutlined } from '@ant-design/icons';

const DATE_FORMAT = 'DD/MM/YYYY';

export default function ReportFilter() {
  const [form] = Form.useForm();

  const handleSubmit = ({ startDate, endDate }) => {
    console.log({
      startDate: startDate.format('YYYY-MM-DD'),
      endDate: endDate.format('YYYY-MM-DD'),
    });
  };

  return (
    <Card>

        {/* <Typography.Title level={5}>Envio Pesquisa de Satisfação:</Typography.Title> */}

      <Form
        form={form}
        layout="inline"
        onFinish={handleSubmit}
        style={{ justifyContent: 'space-between', alignItems: 'flex-end' }}
      >
        <div style={{ display: 'flex', gap: 16 }}>
          <Form.Item
            name="startDate"
            label="Data de início"
            layout="vertical"
            rules={[{ required: true, message: 'Informe a data' }]}
          >
            <DatePicker format={DATE_FORMAT} placeholder="00/00/0000" />
          </Form.Item>

          <Form.Item
            name="endDate"
            label="Data de final"
            layout="vertical"
            rules={[{ required: true, message: 'Informe a data' }]}
          >
            <DatePicker format={DATE_FORMAT} placeholder="00/00/0000" />
          </Form.Item>
        </div>

        <Form.Item>
          <Button type="primary" htmlType="submit" icon={<FileExcelOutlined />} iconPosition="end">
            Emitir Relatório
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
}