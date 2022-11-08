import {
	Grid,
	Container,
	Paper,
	Box,
	Typography,
	TextField,
	Button,
} from "@mui/material";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
	const navigate = useNavigate();

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

	const handleSubmit = (e: FormEvent<HTMLInputElement>) => {
		e.preventDefault();
		console.log(loginData);
		if (loginData.username === "admin") {
			navigate("/admin");
		} else {
			navigate("/user");
		}
	};

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
							Inicia Sesion
						</Typography>
						<Box component="form" onSubmit={handleSubmit}>
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
								name="password"
								margin="normal"
								type="password"
								fullWidth
								label="Contraseña"
								sx={{ mt: 1, mb: 1.5 }}
								required
								onChange={updateLoginData}
							/>

							<Button
								fullWidth
								type="submit"
								variant="contained"
								sx={{ mt: 1.5, mb: 3 }}
								onClick={() => {}}>
								Ingresar
							</Button>
						</Box>
					</Paper>
				</Grid>
			</Grid>
		</Container>
	);
};
