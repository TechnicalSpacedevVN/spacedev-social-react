import { useRoutes } from 'react-router-dom';
import './assets/tailwind.scss';
import { AuthProvider } from './components/AuthProvider';
import { DarkModeProvider } from './components/DarkModeProvider';
import { routes } from './routes';

function App() {
  const element = useRoutes(routes);
  return (
    <DarkModeProvider>
      <AuthProvider>{element}</AuthProvider>
    </DarkModeProvider>
  );
}

export default App;
