import { Typography } from 'antd';
import logo from '../../assets/logo-goias-previdencia.png';
import './Header.css';

export default function Header({ title }) {
  return (
    <header className="header">
      <img src={logo} alt="Goiás Previdência" className="header__logo" />
      <Typography.Title level={3} className="header__title">
        {title}
      </Typography.Title>
    </header>
  );
}