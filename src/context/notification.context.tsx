import { createContext, useContext, useState } from "react";
import { Notification } from "src/components";
import { AlertColor } from "@mui/material/Alert";
type ContextProps = {
	getError: (msg: string) => void;
};
export const NotificationContext = createContext<ContextProps | null>(null);

//--------------------------------------------------------------------------------

type NotificationProviderProps = {
	children: JSX.Element;
};
export const NotificationProvider = ({
	children,
}: NotificationProviderProps) => {
	const [message, setMessage] = useState("");
	const [open, setOpen] = useState(false);
	const [severity, setSeverity] = useState<AlertColor | undefined>(undefined);

	const getError = (msg: string) => {
		setSeverity("error");
		setOpen(true);
		setMessage(msg);
	};

	const handleClose = () => {
		setOpen(false);
	};
	const value = {
		getError,
	};
	return (
		<NotificationContext.Provider value={value}>
			<Notification
				open={open}
				message={message}
				severity={severity}
				handleClose={handleClose}
			/>
			{children}
		</NotificationContext.Provider>
	);
};

export const useNotification = () => {
	const context = useContext(NotificationContext);
	if (!context) throw new Error("No existe contexto");

	return context;
};
