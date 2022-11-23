import { Container, Paper, Grid, Typography, Button } from "@mui/material";
import DetailContractImage from "src/assets/image/detail-contract.png";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import BusinessIcon from "@mui/icons-material/Business";
import EmojiTransportationIcon from "@mui/icons-material/EmojiTransportation";
import PaymentIcon from "@mui/icons-material/Payment";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import MoneyIcon from "@mui/icons-material/Money";

export const PaymentDetailPage = () => {
	const navigate = useNavigate();

	const tablePaymentInformation = [
		{
			icon: <AccessTimeFilledIcon />,
			title: "Fecha de recepción:",
			description: "31 de octubre",
		},
		{
			icon: <EmojiTransportationIcon />,
			title: "Oficina de recepción:",
			description: "Oficina Chorrillos",
		},
		{
			icon: <AccessTimeFilledIcon />,
			title: "Fecha de recojo:",
			description: "31 de octubre",
		},
		{
			icon: <BusinessIcon />,
			title: "Oficina de recojo:",
			description: "Oficina Plaza Norte",
		},
	];

	const getDateToday = () => {
		return new Date().toLocaleDateString(undefined, {
			weekday: "long",
			year: "numeric",
			month: "long",
			day: "numeric",
		});
	};
	return (
		<Container sx={{ mt: 2 }}>
			<Paper sx={{ mb: 2, pl: 1, pr: 1, pt: 1, pb: 1 }} elevation={2}>
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
							Detalle de Pre-venta
						</Typography>
					</Grid>
				</Grid>
			</Paper>
			<Box component="section" sx={{ mt: 2, mb: 3 }}>
				<Typography variant="h6" fontWeight="400" sx={{ mb: 2 }}>
					Corrobore la información brindada:
				</Typography>
				{tablePaymentInformation.map((t, index) => (
					<Box
						key={index}
						sx={{ display: "flex", pl: 1, pr: 1, pb: 1 }}
						alignItems="center"
						justifyContent="space-between">
						<Box
							sx={{
								display: "flex",
								columnGap: 1,
							}}>
							{t.icon}
							<Typography>{t.title}</Typography>
						</Box>
						<div>
							<Typography>{t.description}</Typography>
						</div>
					</Box>
				))}
			</Box>

			<Box component="section" sx={{ mt: 2, mb: 1 }}>
				<Typography variant="h6" fontWeight="400" sx={{ mb: 2 }}>
					Información de pago:
				</Typography>

				<Paper sx={{ paddingInline: 2, pt: 2, pb: 2 }}>
					<Box
						sx={{ display: "flex" }}
						alignItems="center"
						justifyContent="space-between">
						<Box
							sx={{
								display: "flex",
								columnGap: 1,
							}}>
							<PaymentIcon />
							<Typography>Monto a pagar</Typography>
						</Box>
						<div>
							<Typography>0.001 ETH</Typography>
						</div>
					</Box>
				</Paper>
			</Box>
			<Typography textAlign="center" variant="subtitle1">
				El monto a conversión de soles al día de hoy ({getDateToday()})
				referencial es de S/50
			</Typography>

			<Button
				sx={{
					position: "fixed",
					bottom: 20,
					left: "50%",
					transform: "translateX(-50%)",
				}}
				onClick={() => navigate("/user/receipt")}
				startIcon={<MoneyIcon />}
				variant="contained"
				size="large">
				PAGAR
			</Button>
		</Container>
	);
};
