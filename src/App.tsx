import { MetaMaskUIProvider } from '@metamask/sdk-react-ui';
import { NotificationProvider } from './context/notification.context';
import { AppRouter } from './routers/router';
import metamaskConfig from './config/metamask.config';

function App() {
  return (
    <NotificationProvider>
      <MetaMaskUIProvider debug={true} sdkOptions={metamaskConfig}>
        <AppRouter />
      </MetaMaskUIProvider>
    </NotificationProvider>
  );
}

export default App;
