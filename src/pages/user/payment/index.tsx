import { Container, Box, Typography, Paper, Grid, Button } from "@mui/material";
import DetailContractImage from "src/assets/image/detail-contract.png";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const PaymentPage = () => {
	const navigate = useNavigate();
	const clauses = [
		"1) En el caso de que exista alguna perdida del pedido, se reembolsara el monto indicado en el formulario",
		"2) Si el cliente no reclama su pedido en los días asignados, la encomienda será transportada al almacen de objetos olvidados, el cual generará un costo de almacenaje durante los días de su estadia.",
		"3) Se generara automaticamente un codigo Hash para el usuario que recogera este pedido. Por lo tanto, debe identificarse con su numero de Documento y con su codigo hash.",
		"4) No se podra realizar alguna modificacion del contrato al ser un Smart Contract por ninguna persona.",
	];
	const [checkCondition, setCheckCondition] = useState(false);
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
							src={DetailContractImage}
							alt="courier"
							width="60%"
							height="60%"
						/>
					</Grid>

					<Grid item xs={6}>
						<Typography fontWeight="400" variant="h5" sx={{}}>
							Detalle del contrato
						</Typography>
					</Grid>
				</Grid>
			</Paper>
			<Box component="section" sx={{ mt: 2, mb: 3 }}>
				<Typography>
					Se estima que el paquete llegara a la oficina de Plaza Norte entre los
					dias estimados de:
				</Typography>
				<Box sx={{ width: "100%" }}>
					<Paper>
						<Grid
							sx={{
								mt: 2,
								mb: 2,
								py: 2,
							}}
							container
							alignItems="center"
							alignContent="center"
							justifyContent="center">
							<Typography color="secondary" pr={1}>
								10 de nov{" "}
							</Typography>
							<Typography>{" - "}</Typography>

							<Typography color="primary" pl={1}>
								15 de nov
							</Typography>
						</Grid>
					</Paper>
				</Box>
				<Typography mb={2}>
					Las clausulas del contrato se veran regidas por:
				</Typography>

				<Paper>
					<List
						sx={{
							width: "100%",
						}}
						aria-label="contacts">
						{clauses.map((clause, index) => (
							<ListItem key={`clause-${index}`}>
								<ListItemText
									style={{ textAlign: "justify" }}
									primary={clause}
								/>
							</ListItem>
						))}
					</List>
				</Paper>
			</Box>
			<Typography mb={2}>
				Si se encuentra conforma con la informacion, puede continuar con la
				vista de detalle de venta:
			</Typography>

			<Paper>
				<Grid
					container
					alignItems="center"
					justifyContent="center"
					alignContent="center"
					sx={{ pt: 2, pb: 2, pl: 2 }}>
					<FormGroup>
						<FormControlLabel
							control={
								<Checkbox
									value={checkCondition}
									onChange={() => setCheckCondition(!checkCondition)}
								/>
							}
							color="secondary"
							label="Aceptas los terminos y condiciones que conlleva el envio de encomiendas utilizando Smart Contracts"
						/>
					</FormGroup>
					{checkCondition && (
						<Grid
							container
							alignItems="center"
							justifyContent="flex-end"
							sx={{ mt: 2, mb: 1 }}>
							<Button
								variant="contained"
								size="medium"
								sx={{}}
								onClick={() => navigate("/user/payment-detailt")}>
								Continuar al proceso de venta
							</Button>
						</Grid>
					)}
				</Grid>
			</Paper>
		</Container>
	);
};
