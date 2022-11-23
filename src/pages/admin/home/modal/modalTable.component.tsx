import { Box, Typography, Chip, Paper, Grid } from "@mui/material";
import { ModalComponent } from "src/components/modal";
import { PARCEL_STATUS } from "src/constants";
import { ColorsMui } from "src/interfaces";
import { IRowParcel } from "src/interfaces/row-parcel-table.interface";
import { ParcelModalHeaderInfo } from "./headers-mock";

interface Props {
	rowTravel: IRowParcel;
}

const mockData = {
	userRequester: "Miguel Bustillos",
	userRequesterCode: "75151351",
	userReceiver: "Enzo Hinostroza",
	userReceiverCode: "5435439",
};
export const ModalTableAdminComponent = ({ rowTravel }: Props) => {
	const foundStatus = PARCEL_STATUS[rowTravel.status];

	const getTextRowModal = (key: string, type: "text" | "chip") => {
		return (
			<Typography variant="subtitle1">
				{(rowTravel as any)[key] || (mockData as any)[key] || "Error"}
			</Typography>
		);
	};

	return (
		<ModalComponent>
			<Typography id="modal-modal-title" variant="h6" component="h2">
				Encomienda: <b>{rowTravel.key}</b>
			</Typography>

			{/* <Typography id="modal-modal-description" sx={{ mt: 2 }}>
				Puede realizar los cambios de estados necesarios para continuar con el
				proceso de envio de encomiendas:
			</Typography> */}

			<Typography>Informacion Completa:</Typography>

			<Paper sx={{ mt: 2, p: 2 }}>
				<Grid container spacing={2} justifyContent="space-between">
					{ParcelModalHeaderInfo.map((header, index) => (
						<Grid item xs={5.8}>
							<Box
								display="flex"
								justifyContent="space-between"
								alignItems="center">
								<Typography variant="subtitle2" fontWeight={700}>
									{header.title}
								</Typography>
								{getTextRowModal(header.key, header.type)}
							</Box>
						</Grid>
					))}
				</Grid>
			</Paper>
		</ModalComponent>
	);
};
