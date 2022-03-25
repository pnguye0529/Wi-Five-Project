import React from "react";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({ 
    palette: {
        secondary: {
            main: "#FFD93D"
        }
    }
})
const Filter = (props) => {
  return (
    <div direction="row" spacing={2}>
      <Button variant="outlined" color="error" onClick={props.heatMapLow}>
        Low Traffic
      </Button>
      <ThemeProvider theme={theme}><Button color="secondary" onClick={props.heatMapMedium}>
        Medium Traffic
      </Button></ThemeProvider>     
      <Button variant="contained" color="success" onClick={props.heatMapHigh}>
        High Traffic
      </Button>
    </div>
  );
};

export default Filter;