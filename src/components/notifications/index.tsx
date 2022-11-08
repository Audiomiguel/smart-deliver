import { Alert, AlertColor, Snackbar, Typography } from "@mui/material";

type NotificationProps = {
	open: boolean;
	message: string;
	severity: AlertColor | undefined;
	handleClose: () => void;
};
export const Notification = ({
	open,
	message,
	severity,
	handleClose,
}: NotificationProps) => {
	return (
		<Snackbar
			anchorOrigin={{ vertical: "top", horizontal: "center" }}
			autoHideDuration={4000}
			open={open}
			onClose={handleClose}>
			<Alert onClose={handleClose} severity={severity}>
				<Typography>{message}</Typography>
			</Alert>
		</Snackbar>
	);
};
