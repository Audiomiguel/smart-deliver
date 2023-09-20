import { NotificationProvider } from './context/notification.context';
import { Web3CommonsProvider } from './context/web3.context';
import { AppRouter } from './routers/router';

function App() {
  return (
    <NotificationProvider>
      <Web3CommonsProvider>
        <AppRouter />
      </Web3CommonsProvider>
    </NotificationProvider>
  );
}

export default App;
