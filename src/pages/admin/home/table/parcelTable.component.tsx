import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { DataTableParcel } from "./data-mock";
import { PARCEL_STATUS } from "src/constants";
import { IRowParcel } from "src/interfaces/row-parcel-table.interface";
import { ChipTableAdminComponent } from "./chipTable.component";
import ReadMoreIcon from "@mui/icons-material/ReadMore";
import { SeeMoreTableAdminComponent } from "./seeMore.component";
export const ParcelTableComponent = () => {
	const StyledTableCell = styled(TableCell)(({ theme }) => ({
		[`&.${tableCellClasses.head}`]: {
			backgroundColor: theme.palette.common.black,
			color: theme.palette.common.white,
		},
		// [`&.${tableCellClasses.body}`]: {
		// 	fontSize: 14,
		// },
	}));

	const StyledTableRow = styled(TableRow)(({ theme }) => ({
		"&:nth-of-type(odd)": {
			backgroundColor: theme.palette.action.hover,
		},
		// hide last border
		"&:last-child td, &:last-child th": {
			border: 0,
		},
	}));

	const getChipInformationByParcel = (rowTravel: IRowParcel) => {
		console.log("ROW ", rowTravel);
		const foundStatus = PARCEL_STATUS[rowTravel.status];

		return (
			<ChipTableAdminComponent
				label={foundStatus.label}
				color={foundStatus.color}
				rowTravel={rowTravel}
			/>
		);
	};

	return (
		<TableContainer component={Paper}>
			<Table sx={{ minWidth: 700 }} aria-label="customized table">
				<TableHead>
					<TableRow>
						<StyledTableCell>Codigo de Encomienda</StyledTableCell>
						<StyledTableCell align="right">
							Oficina de Recepcion
						</StyledTableCell>
						<StyledTableCell align="right">Oficina de Recojo</StyledTableCell>
						<StyledTableCell align="right">Monto</StyledTableCell>

						<StyledTableCell align="right">Fecha estimada</StyledTableCell>
						<StyledTableCell align="right">Situación</StyledTableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{DataTableParcel.map((row, index) => (
						<StyledTableRow key={index}>
							<StyledTableCell component="th" scope="row">
								{row.key}
							</StyledTableCell>
							<StyledTableCell align="right">{row.origin}</StyledTableCell>
							<StyledTableCell align="right">{row.destiny}</StyledTableCell>
							<StyledTableCell align="right">{row.price}</StyledTableCell>
							<StyledTableCell align="right">
								{row.estimatedDate}
							</StyledTableCell>
							<StyledTableCell
								align="right"
								style={{ display: "flex", columnGap: 6, alignItems: "center" }}>
								{getChipInformationByParcel(row)}
								<SeeMoreTableAdminComponent rowTravel={row} />
							</StyledTableCell>
						</StyledTableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};
