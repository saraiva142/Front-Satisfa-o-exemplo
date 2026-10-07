import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import SideMenu from './SideMenu';
import './Layout.css';

export default function AppLayout({ title }) {
  return (
    <Layout className="app-layout">
      <Header title={title} />
      <Layout>
        <Layout.Sider width={300} theme="light" className="app-layout__sider">
          <SideMenu />
        </Layout.Sider>
        <Layout.Content className="app-layout__content">
          <Outlet />
        </Layout.Content>
      </Layout>
    </Layout>
  );
}