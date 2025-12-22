import { createTheme } from "@mui/material";

export const theme = createTheme({
  typography: {
    fontFamily: ["Forum", "serif"].join(","),
    fontSize: 20,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none", // removes the uppercase transformation,
          fontWeight: "bold",
          letterSpacing: 1,
          color: "black",
        },
      },
    },
  },
});
