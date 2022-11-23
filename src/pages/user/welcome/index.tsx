import {
	Container,
	Box,
	Typography,
	Grid,
	TextField,
	Paper,
	Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import CourierImage from "src/assets/image/banner-parcel-register.png";
export const WelcomePage = () => {
	const navigate = useNavigate();
	const steps = [
		"Datos personales",
		"Datos del paquete",
		"Datos del destinatario",
		"Metodos de pago",
	];

	return (
		<Container sx={{ mt: 3 }}>
			<Paper sx={{ mb: 2 }}>
				<Grid
					container
					alignItems="center"
					alignContent="center"
					justifyContent="center">
					<Grid item xs={6} sx={{ width: "100%" }}>
						<img
							loading="lazy"
							src={CourierImage}
							alt="courier"
							width="90%"
							height="90%"
						/>
					</Grid>

					<Grid item xs={6}>
						<Typography fontWeight="400" variant="h5" sx={{}}>
							Registra tu encomienda
						</Typography>
					</Grid>
				</Grid>
			</Paper>

			<Box component="form" onSubmit={() => {}}>
				<Typography>Datos personales del Emisor:</Typography>

				<Grid container rowSpacing={0}>
					<Grid item xs={12}>
						<TextField
							name="name1"
							margin="normal"
							type="text"
							fullWidth
							label="Tipo de documento"
							required
							// onChange={updateLoginData}
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							name="name2"
							margin="normal"
							type="text"
							fullWidth
							label="Numero de Documento"
							required
							// onChange={updateLoginData}
						/>
					</Grid>
				</Grid>

				<Typography sx={{ mt: 2 }}>Datos de origen y destino:</Typography>

				<Grid container>
					<Grid item xs={12}>
						<TextField
							name="name2"
							margin="normal"
							type="text"
							fullWidth
							label="Oficina de Origen"
							required
							// onChange={updateLoginData}
						/>
					</Grid>

					<Grid item xs={12}>
						<TextField
							name="name2"
							margin="normal"
							type="text"
							fullWidth
							label="Oficina de Destino"
							required
							// onChange={updateLoginData}
						/>
					</Grid>
				</Grid>

				<Typography sx={{ mt: 2 }}>Datos del paquete:</Typography>

				<Grid container>
					<Grid item xs={12}>
						<TextField
							name="name2"
							margin="normal"
							type="text"
							fullWidth
							label="Nombre del objeto"
							required
							// onChange={updateLoginData}
						/>
					</Grid>

					<Grid item xs={12}>
						<TextField
							name="name2"
							margin="normal"
							type="text"
							fullWidth
							label="Valor aproximado"
							required
							// onChange={updateLoginData}
						/>
					</Grid>
				</Grid>

				<Typography sx={{ mt: 2 }}>Datos del destinatario:</Typography>

				<Grid container>
					<Grid item xs={12}>
						<TextField
							name="name2"
							margin="normal"
							type="text"
							fullWidth
							label="Nombre Completo"
							required
							// onChange={updateLoginData}
						/>
					</Grid>

					<Grid item xs={12}>
						<TextField
							name="name2"
							margin="normal"
							type="text"
							fullWidth
							label="N° de Identidad"
							required
							// onChange={updateLoginData}
						/>
					</Grid>
				</Grid>

				<Box
					display="flex"
					justifyContent="end"
					alignItems="center"
					style={{
						height: "70px",
					}}>
					<Button
						size="large"
						fullWidth
						variant="contained"
						onClick={() => navigate("/courier-chain/user/payment")}>
						PAGAR
					</Button>
				</Box>
			</Box>
		</Container>
	);
};
