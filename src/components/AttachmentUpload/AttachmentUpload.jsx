import { Upload } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

export default function AttachmentUpload({ value, onChange }) {
  return (
    <Upload
      listType="picture-card"
      fileList={value}
      onChange={({ fileList }) => onChange?.(fileList)}
      beforeUpload={() => false} // evita upload automático
      maxCount={1}
    >
      {!value?.length && <PlusOutlined style={{ fontSize: 32 }} />}
    </Upload>
  );
}