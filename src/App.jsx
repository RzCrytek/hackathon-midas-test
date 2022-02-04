import { AuthProvider } from './context/AuthContext';

import AppRouter from './routes/AppRouter';

import logo from './logo.svg';
import './styles/App.scss';

function App() {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
}

export default App;
