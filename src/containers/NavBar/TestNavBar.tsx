import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";
import { CloseIcon, MenuIcon } from "../../assets/icons";
import { Adb } from "@mui/icons-material";
import { MobileMenu } from "./MobileMenu";

export const TestNavBar = () => {
  const [state, setState] = React.useState(true);

  const toggleDrawer = () => {
    console.log("toggle");
    setState((prev) => !prev);
  };

  return (
    <AppBar color="primary" position="static">
      <Container
        sx={{
          "@media (min-width:360px)": {
            backgroundColor: "green",
            padding: "18px 0 22px",
          },
          "@media (min-width:1973px)": {
            backgroundColor: "red",
            maxWidth: "1288px",
            padding: "19px 0 17px",
          },
        }}
      >
        <Toolbar variant="regular" disableGutters>
          <IconButton size="large" color="primary" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My App
          </Typography>

          <Tooltip title="Open Menu">
            <IconButton
              onClick={toggleDrawer}
              sx={{
                p: 0,
                width: "50px",
                height: "50px",
                borderRadius: 1.25,
                backgroundColor: "#3980FF",
              }}
            >
              <MenuIcon sx={{ width: 28, height: 28 }} />
            </IconButton>
          </Tooltip>
        </Toolbar>

        <Box>
          <Button variant="contained" color="warning" onClick={toggleDrawer}>
            Anchor
          </Button>
          <Drawer
            anchor="right"
            elevation={8}
            open={state}
            sx={{ maxWidth: "100px" }}
            PaperProps={{
              sx: {
                maxWidth: 360,
                width: "100%",
                backgroundColor: "#FEF4FF",
              },
            }}
            onClose={toggleDrawer}
          >
            <MobileMenu onClose={toggleDrawer} />
          </Drawer>
        </Box>

        <Box></Box>
      </Container>
    </AppBar>
  );
};
