import { NotificationProvider } from './context/notification.context';
import { Web3ReactProvider } from '@web3-react/core';
import { AppRouter } from './routers/router';
import { Web3CommonsProvider } from './context/web3.context';

function App() {
  return (
    <NotificationProvider>
      <AppRouter />
    </NotificationProvider>
  );
}

export default App;
