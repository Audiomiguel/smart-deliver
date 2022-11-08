import { ThemeProvider } from "@mui/material";
import { CssBaseline } from "@mui/material";
import { createTheme } from "@mui/material";
import React from "react";
import { themePalette } from "./palette.config";

type ThemeProp = {
	children: JSX.Element;
};

const theme = createTheme({
	palette: {
		mode: "dark",
		background: {
			default: themePalette.BG,
		},
		primary: {
			main: themePalette.LIME,
		},
	},
	// typography: {
	// 	fontFamily: themePalette.FONT_GLOBAL,
	// },
	components: {
		MuiButton: {
			defaultProps: {
				style: {
					textTransform: "none",
					boxShadow: "none",
					borderRadius: "0.5em",
				},
			},
		},
		MuiAlert: {
			defaultProps: {
				style: {
					borderRadius: "0.8em",
					fontSize: "1em",
				},
			},
			styleOverrides: {
				standardError: {
					border: `1px solid ${themePalette.ERROR_MAIN}`,
					background: themePalette.BG_ERROR_MAIN
				}
			}
		},
	},
});

export const ThemeConfig: React.FC<ThemeProp> = ({ children }) => {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			{children}
		</ThemeProvider>
	);
};
