import { Button, Upload } from 'antd';
import { FileOutlined, PaperClipOutlined } from '@ant-design/icons';

export function AttachmentList({ files = [], onRemove }) {
  return (
    <div className="attachments">
      {files.map((file) => (
        <button
          key={file.uid}
          type="button"
          className="attachments__item"
          title={`Remover ${file.name}`}
          onClick={() => onRemove(file.uid)}
        >
          <FileOutlined className="attachments__icon" />
          <span className="attachments__name">{file.name}</span>
        </button>
      ))}
    </div>
  );
}

export function AttachButton({ files = [], onChange }) {
  return (
    <Upload
      multiple
      showUploadList={false}
      fileList={files}
      beforeUpload={() => false}
      onChange={({ fileList }) => onChange(fileList)}
    >
      <Button type="text" icon={<PaperClipOutlined style={{ fontSize: 28 }} />} />
    </Upload>
  );
}