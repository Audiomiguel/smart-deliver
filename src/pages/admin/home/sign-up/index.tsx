import {
	Grid,
	Container,
	Paper,
	Box,
	Typography,
	TextField,
	Button,
	FormControl,
	InputLabel,
	Select,
	MenuItem,
} from "@mui/material";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

export const SignUpPage = () => {
	const [loginData, setLoginData] = useState({
		username: "",
		password: "",
	});

	const updateLoginData = (e: ChangeEvent<HTMLInputElement>) => {
		setLoginData({
			...loginData,
			[e.target.name]: e.target.value,
		});
	};

	const navigate = useNavigate();

	return (
		<Container maxWidth="sm">
			<Grid
				container
				direction="column"
				alignItems="center"
				justifyContent="center"
				sx={{
					minHeight: "90vh",
				}}>
				<Grid item>
					<Paper
						sx={{
							padding: "1.2em",
							borderRadius: "0.5em",
						}}>
						<Typography variant="h4" sx={{ mt: 1, mb: 1 }}>
							Regístrese
						</Typography>
						<Box component="form" onSubmit={() => {}}>
							<TextField
								name="username"
								margin="normal"
								type="text"
								fullWidth
								label="Nombre de usuario"
								sx={{ mt: 2, mb: 1.5 }}
								required
								onChange={updateLoginData}
							/>
							<TextField
								name="username"
								margin="normal"
								type="text"
								fullWidth
								label="Nombre Completo"
								sx={{ mt: 2, mb: 1.5 }}
								required
								onChange={updateLoginData}
							/>
							<TextField
								name="username"
								margin="normal"
								type="text"
								fullWidth
								label="N° de Documento"
								sx={{ mt: 2, mb: 1.5 }}
								required
								onChange={updateLoginData}
							/>
							<TextField
								name="password"
								margin="normal"
								type="password"
								fullWidth
								label="Contraseña"
								sx={{ mt: 1, mb: 1.5 }}
								required
								onChange={updateLoginData}
							/>

							{/* <TextField
								name="password"
								margin="normal"
								type="password"
								fullWidth
								label="Confirme su Contraseña"
								sx={{ mt: 1, mb: 1.5 }}
								required
								onChange={updateLoginData}
							/> */}

							<FormControl fullWidth sx={{ mt: 1, mb: 1.5 }}>
								<InputLabel id="demo-simple-select-label">
									Tipo de Usuario
								</InputLabel>
								<Select
									labelId="demo-simple-select-label"
									id="demo-simple-select"
									value={10}
									disabled
									label="Age"
									onChange={() => {}}>
									<MenuItem value={10}>Cliente</MenuItem>
								</Select>
							</FormControl>

							<TextField
								name="username"
								margin="normal"
								type="text"
								fullWidth
								label="Número de Celular"
								sx={{ mt: 2, mb: 1.5 }}
								required
								onChange={updateLoginData}
							/>

							<TextField
								name="username"
								margin="normal"
								type="email"
								fullWidth
								label="Correo Electrónico"
								sx={{ mt: 2, mb: 1.5 }}
								required
								onChange={updateLoginData}
							/>

							<Button
								fullWidth
								type="submit"
								size="large"
								variant="contained"
								sx={{ mt: 1.5, mb: 3 }}
								onClick={() => {}}>
								Registrarse
							</Button>
						</Box>
					</Paper>
				</Grid>
			</Grid>
		</Container>
	);
};
