import { NotificationProvider } from "./context/notification.context";

import { AppRouter } from "./routers/router";

function App() {
	return (
		<NotificationProvider>
			<AppRouter />
		</NotificationProvider>
	);
}

export default App;
