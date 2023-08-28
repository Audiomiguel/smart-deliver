import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import DetailContractImage from "src/assets/image/detail-contract.png";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import EmojiTransportationIcon from "@mui/icons-material/EmojiTransportation";

import InventoryIcon from "@mui/icons-material/Inventory";
import {
	orderedParcelStatuses,
	PARCEL_STATUS,
	PARCEL_STATUS_TYPES,
} from "src/constants";

export const UserReceiptPage = () => {
	return (
		<Container sx={{ mt: 2 }}>
			<Paper sx={{ mb: 2, p: 1 }} elevation={3}>
				<Grid
					container
					alignItems="center"
					alignContent="center"
					justifyContent="center">
					<Grid item xs={6} sx={{ width: "100%" }}>
						<img
							loading="lazy"
							src={DetailContractImage}
							alt="courier"
							width="60%"
							height="60%"
							style={{ maxWidth: "150px" }}
						/>
					</Grid>

					<Grid item xs={6}>
						<Typography fontWeight="400" variant="h5">
							Miguel, Gracias por confiar en CourierChain
						</Typography>
					</Grid>
				</Grid>
			</Paper>

			<Box component="section" sx={{ mt: 2, mb: 3 }}>
				<Typography variant="h6" fontWeight="400" sx={{ mb: 3 }}>
					Numero de pedido: <b>19825431</b>
				</Typography>

				<Typography variant="h5" fontWeight="600" sx={{ mb: 3 }}>
					Pasos de tu encomienda
				</Typography>

				<Grid
					container
					columnGap={2}
					rowGap={3}
					justifyContent="space-around"
					sx={{ mb: 3 }}>
					{orderedParcelStatuses.map((type, index) => (
						<Paper sx={{ p: 1, width: "120px" }} elevation={3} style={ index===0 ?{
									 border:'2px solid black',
									 
								}:undefined}>
							<Grid
								item
								display="flex"
								flexDirection="column"
								alignItems="center"
								rowGap={1}
								textAlign="center"
								sx={{ height: "100%" }}
								
								key={`step-${index}`}>
								{PARCEL_STATUS[type].icon}

								<Typography variant="h6">Paso {index + 1}</Typography>

								<Typography>{PARCEL_STATUS[type].label}</Typography>
							</Grid>
						</Paper>
					))}
				</Grid>

				<Box sx={{ mb: 2 }}>
					<Typography variant="h5" fontWeight="600" sx={{ mb: 2 }}>
						Resumen
					</Typography>

					<Box display="flex" columnGap={1} sx={{ mb: 1 }}>
						<LocalShippingIcon />
						<Typography>Oficina Miraflores</Typography>
					</Box>
					<Box display="flex" columnGap={1}>
						<EmojiTransportationIcon />
						<Typography>Oficina Plaza Norte</Typography>
					</Box>
				</Box>

				<Paper
					elevation={3}
					sx={{
						display: "flex",
						columnGap: 3,
						p: 2,
						justifyContent: "space-around",
						alignItems: "center",
					}}>
					<Typography>x1</Typography>
					<Box display="flex" columnGap={1} sx={{ width: "100%" }}>
						<InventoryIcon fontSize="large" />
						<Box>
							<Typography fontWeight="600">
								LAPTOP 14' PULGADAS EN CAJA
							</Typography>
							<Typography>Caja de 1.00 x 0.20 x 1.10</Typography>
						</Box>
					</Box>
					<Box textAlign="right" minWidth="100px">
						<Typography>100 CRC</Typography>
						<Typography variant="subtitle1">* S/. 50</Typography>
					</Box>
				</Paper>
			</Box>
		</Container>
	);
};
