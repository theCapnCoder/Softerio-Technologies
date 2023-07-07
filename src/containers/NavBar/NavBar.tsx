import {
  AppBar,
  Autocomplete,
  AutocompleteRenderInputParams,
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
  styled,
} from "@mui/material";
import React from "react";
import {
  CloseIcon,
  LogoIcon,
  MenuIcon,
  TelegramIcon,
  WhatsappIcon,
} from "../../assets/icons";
import { Adb } from "@mui/icons-material";
import { MobileMenu } from "./MobileMenu";
import { BlueWrapperIcon } from "../components/BlueWrapperIcon";
import { Contacts } from "./Contacts";
import { OptionSelector } from "./OptionSelector";
import { selectData } from "./selectData";

const NavTypography = styled(Typography)({
  cursor: "pointer",
  color: "#000",
  fontSize: 16,
  lineHeight: "148.6%",
  "&:hover": {
    color: "#4386FF",
  },
});

export const NavBar = () => {
  const [state, setState] = React.useState(false);

  const toggleDrawer = () => {
    console.log("toggle");
    setState((prev) => !prev);
  };

  return (
    <AppBar color="transparent" elevation={0} position="static">
      <Container
        sx={{
          "@media (min-width:360px)": {
            padding: "18px 0 22px",
            maxWidth: "1288px",
          },
        }}
        maxWidth="xl"
      >
        <Toolbar
          variant="regular"
          disableGutters
          sx={{ px: 2, justifyContent: "space-between" }}
        >
          <LogoIcon
            sx={{
              width: "221px",
              height: "56px",
              "@media (min-width:1793px)": { width: "285px", height: "72px" },
            }}
          />

          <Stack
            component={"nav"}
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
            flexGrow={1}
            pl={6.38}
            pr={4}
            sx={{ display: { md: "flex", xs: "none" } }}
          >
            <NavTypography>Главная</NavTypography>
            <NavTypography>О нас</NavTypography>
            <NavTypography>Наши услуги</NavTypography>
            <NavTypography>Этапы работы</NavTypography>
            <NavTypography>Стоимость</NavTypography>
            <OptionSelector data={selectData} />
          </Stack>

          <Tooltip title="Open Menu">
            <IconButton
              onClick={toggleDrawer}
              sx={{
                display: { xs: "flex", md: "none" },
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

          <Contacts />
        </Toolbar>

        <Box>
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
      </Container>
    </AppBar>
  );
};
