import { TranslateProvider } from '@components/atoms/TranslateProvider';
import { BrowserRouter, useRoutes } from 'react-router-dom';
import './assets/tailwind.css';
import { AuthProvider } from './components/features/AuthProvider';
import { DarkModeProvider } from './components/features/DarkModeProvider';
import en from './locales/en.json';
import vi from './locales/vi.json';
import { routes } from './routes';
import { SocketProvider } from '@hooks/useSocket';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@store/queryClient';

function App() {
  return (
    <BrowserRouter>
      <SocketProvider>
        <QueryClientProvider client={queryClient}>
          <DarkModeProvider>
            <TranslateProvider defaultLang="en" translate={{ vi, en }}>
              <AuthProvider>
                <Router />
              </AuthProvider>
            </TranslateProvider>
          </DarkModeProvider>
        </QueryClientProvider>
      </SocketProvider>
    </BrowserRouter>
  );
}

const Router = () => {
  const element = useRoutes(routes);
  return element;
};

export default App;
