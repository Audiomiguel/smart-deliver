import {
	TextField,
	Box,
	Typography,
	Divider,
	Paper,
	List,
	ListItem,
} from "@mui/material";
import { PARCEL_STATUS, PARCEL_STATUS_TYPES } from "src/constants";
import { IRowParcel } from "src/interfaces/row-parcel-table.interface";
import { getNextParcelStatus } from "src/utils";

import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import { statusConditions } from "./data-condition";
interface Props {
	rowTravel: IRowParcel;
}
export const CreatedParcelStatus = ({ rowTravel }: Props) => {
	const statusCondition = statusConditions.find(
		(s) => s.status === rowTravel.status
	) || {
		description: "Error",
		status: PARCEL_STATUS_TYPES.CREATED,
		steps: [],
	};
	const getNextParcelStatusLabel = (actualStatus: PARCEL_STATUS_TYPES) => {
		const status = getNextParcelStatus(actualStatus);
		if (status !== undefined) {
			return PARCEL_STATUS[status].label;
		} else {
			return "Error";
		}
	};
	return (
		<Box>
			<Box display="flex" columnGap={2} alignItems="center" sx={{ mb: 3 }}>
				{/* <Typography>Cambio de estado:</Typography> */}

				<TextField
					id="status-form"
					label="Estado actual Encomienda"
					value={PARCEL_STATUS[statusCondition.status].label}
					variant="outlined"
				/>

				<ArrowCircleRightIcon fontSize="large" />

				<TextField
					id="status-form"
					disabled
					label="Estado siguiente"
					value={getNextParcelStatusLabel(statusCondition.status)}
					variant="outlined"
				/>
			</Box>
			<Divider sx={{ mb: 2 }} />

			<Box>
				<Typography>Descripcion:</Typography>
				<Typography variant="subtitle1" sx={{ mb: 2 }}>
					{statusCondition.description}
				</Typography>
				<Divider sx={{ mb: 2 }} />

				<Typography sx={{ mb: 2 }}>
					Para que pase al siguiente estado de la encomienda se requiere cumplir
					las siguientes reglas:
				</Typography>

				<Paper elevation={4}>
					<List sx={{ width: "100%" }}>
						{statusCondition.steps.map((s, index) => (
							<ListItem key={`${index}-item`}>{s}</ListItem>
						))}
					</List>
				</Paper>
			</Box>
		</Box>
	);
};
