import { Container, Grid, Paper, Typography } from "@mui/material";
import AdminProfileImage from "src/assets/image/admin-profile.png";
import { ParcelTableComponent } from "./table/parcelTable.component";

export const AdminHomePage = () => {
	return (
		<Container sx={{ mt: 2 }}>
			<Paper sx={{ mb: 2 }} elevation={2}>
				<Grid
					container
					alignItems="center"
					alignContent="center"
					justifyContent="center">
					<Grid item xs={6} sx={{ width: "100%" }}>
						<img
							loading="lazy"
							src={AdminProfileImage}
							alt="courier"
							width="60%"
							height="60%"
							style={{ maxWidth: "250px" }}
						/>
					</Grid>

					<Grid item xs={6}>
						<Typography fontWeight="400" variant="h5" sx={{}}>
							Resumen de pedidos de encomiendas
						</Typography>
					</Grid>
				</Grid>
			</Paper>
			<ParcelTableComponent />
		</Container>
	);
};
