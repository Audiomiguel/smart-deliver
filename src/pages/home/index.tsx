import { Button, Container, Grid } from "@mui/material";
import SmartContractImage from "src/assets/image/smart-contracts.png";
import { HeaderComponent } from "src/components";
import { useNotification } from "src/context/notification.context";

export const HomePage = () => {
	const { getError } = useNotification();

	const handleClick = () => {
		getError("Hola mundo");
	};

	return (
		<Container sx={{ mt: 9 }} maxWidth="xl">
			<HeaderComponent
				title={"COURIER CHAIN"}
				description={
					"Ingresa con tu usuario y envia tus Smart Encomiendas desde un click de distancia!"
				}
				image={
					<img
						src={SmartContractImage}
						alt="Smart Contract"
						width="50%"
						height="50%"
					/>
				}
			/>
			<Grid
				container
				alignItems="center"
				justifyContent="center"
				sx={{
					mt: 2,
				}}>
				<Grid item>
					<Button variant="contained" size="large">
						Empieza ya
					</Button>
				</Grid>
			</Grid>
		</Container>
	);
};
