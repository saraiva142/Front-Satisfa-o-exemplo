import { Menu } from 'antd';
import { FileTextOutlined, MailOutlined } from '@ant-design/icons';
import { useLocation, useNavigate } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';

const ITEMS = [
  { key: ROUTES.email, icon: <MailOutlined />, label: 'Envio E-mail' },
  { key: ROUTES.report, icon: <FileTextOutlined />, label: 'Relatório' },
];

export default function SideMenu() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <Menu
      mode="inline"
      items={ITEMS}
      selectedKeys={[pathname]}
      onClick={({ key }) => navigate(key)}
    />
  );
}