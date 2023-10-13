import { QueryClientProvider } from '@tanstack/react-query';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import { queryClient } from './store/queryClient.ts';
import { SocketProvider } from '@hooks/useSocket.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
  <BrowserRouter>
    <SocketProvider>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </SocketProvider>
  </BrowserRouter>,
  // </React.StrictMode>,
);
