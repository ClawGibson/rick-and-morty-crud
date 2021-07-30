import MainLayout from './components/layouts/MainLayout';
import Paths from './routes/Paths';

import './styles/App.scss';
import 'antd/dist/antd.css';

require('dotenv').config();

function App() {
  return (
    <MainLayout>
      <Paths />
    </MainLayout>
  );
}

export default App;
