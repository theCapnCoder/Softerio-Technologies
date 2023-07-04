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
  Typography,
} from "@mui/material";
import { red } from "@mui/material/colors";
import React from "react";
import { MenuIcon } from "../../assets/icons";
import { Adb } from "@mui/icons-material";

export const TestNavBar = () => (
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
        <IconButton edge="start" color="primary" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          My App
        </Typography>
        <IconButton edge="end" color="primary" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          My App
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>

      <Toolbar>
        <Adb sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
        <Adb sx={{ display: "flex" }} />
        <Typography>One</Typography>
        <Typography>Two</Typography>
        <Typography>Three</Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>

      <List>
        {["One", "Two", "Three"].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Box>
        <Button variant="contained" color="warning">
          Anchor
        </Button>
        <Drawer anchor="right" elevation={8} open={true} sx={{maxWidth: "100px"}}>
          <Box sx={{maxWidth: "360px"}}>

          hello Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, nisi!
          </Box>
        </Drawer>
      </Box>

      <Box></Box>
    </Container>
  </AppBar>
);
