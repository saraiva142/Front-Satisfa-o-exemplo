import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ConfigProvider } from 'antd';
import ptBR from 'antd/locale/pt_BR';
import 'dayjs/locale/pt-br';

import App from './App';
import { antdTheme } from './constants/theme';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ConfigProvider theme={antdTheme} locale={ptBR}>
      <App />
    </ConfigProvider>
  </StrictMode>
);