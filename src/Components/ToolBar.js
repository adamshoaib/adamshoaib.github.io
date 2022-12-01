import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import LocationCityIcon from "@mui/icons-material/LocationCity";

class ToolBar extends React.Component {
  render() {
    return (
      <AppBar>
        <Toolbar>
          <LocationCityIcon fontSize={"large"} style={{ marginRight: 20 }} />
          <Typography
            variant="h5"
            noWrap
            sx={{
              mr: 2,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            APARTMENT FINDER
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

export default ToolBar;
