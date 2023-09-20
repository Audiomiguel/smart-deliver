import { NotificationProvider } from './context/notification.context';
import { Web3ReactProvider } from '@web3-react/core';
import { AppRouter } from './routers/router';

function App() {
  return (
    <NotificationProvider>
      <AppRouter />
    </NotificationProvider>
  );
}

export default App;
