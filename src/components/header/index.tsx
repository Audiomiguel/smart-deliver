import { Box, Grid, Typography, Divider } from "@mui/material";
type HeaderProps = {
	title: string;
	description: string;
	image?: React.ReactNode | null;
};
export const HeaderComponent = ({ description, title, image }: HeaderProps) => {
	return (
		<div>
			<Box
				sx={{
					width: "100%",
					height: "350px",
				}}>
				<Grid
					container
					direction="row"
					justifyContent="center"
					alignItems="center"
					sx={{
						height: "100%",
					}}>
					<Grid item xs={10}>
						<Grid
							container
							direction="column"
							justifyContent="center"
							alignItems="center"
							sx={{
								height: "100%",
							}}>
							{image !== undefined && (
								<Grid
									textAlign="center"
									item
									sx={{
										mb: 4,
									}}>
									{image}
								</Grid>
							)}
							<Grid item textAlign="center">
								<Typography>{description}</Typography>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Box>
			<Divider />
		</div>
	);
};
