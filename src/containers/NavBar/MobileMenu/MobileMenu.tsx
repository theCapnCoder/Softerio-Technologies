import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import Box from "@mui/material/Box";
import { menuData } from "./menuData";
import {
  CloseIcon,
  LogoIcon,
  MailIcon,
  PhoneIcon,
  TelegramIcon,
  WhatsappIcon,
} from "../../../assets/icons";
import { FC } from "react";
import React from "react";
import styled from "@emotion/styled";
import { BlueWrapperIcon } from "../../../components/BlueWrapperIcon";

const ContactTypography = styled(Typography)({
  fontSize: 20,
  color: "#4386FF",
  fontWeight: 600,
  lineHeight: "148.6%",
});

const styles = {
  box: {
    backgroundColor: "#FEF4FF",
    "& .MuiListItemButton-root": {
      padding: "21px 51px",
    },
    "& .MuiListItemText-root": {
      margin: 0,
    },
  },
  itemText: {
    "& .MuiTypography-root": {
      color: "#000",
      fontSize: 16,
      lineHeight: "142.6%",
    },
  },
};

type Props = {
  onClose: () => void;
};

export const MobileMenu: FC<Props> = ({ onClose }) => {
  return (
    <Box sx={styles.box}>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        sx={{ padding: "18px 15px 43px" }}
      >
        <LogoIcon sx={{ width: "221px", height: "56px" }} />

        <BlueWrapperIcon icon={CloseIcon} onClick={onClose} />
      </Stack>

      <List disablePadding sx={{ marginBottom: 3.75 }}>
        {menuData.map((text) => (
          <React.Fragment key={text}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText sx={styles.itemText} primary={text} />
              </ListItemButton>
            </ListItem>
            <Divider />
          </React.Fragment>
        ))}
      </List>

      <Stack
        mb={1}
        direction={"row"}
        gap={1.37}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <PhoneIcon sx={{ width: 20, height: 20 }} />
        <ContactTypography>8 (499) 348-82-16</ContactTypography>
      </Stack>

      <Stack
        mb={4}
        direction={"row"}
        gap={1.37}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <MailIcon sx={{ width: 20, height: 20 }} />
        <ContactTypography>hello@softerio.ru</ContactTypography>
      </Stack>

      <Stack
        direction={"row"}
        justifyContent={"center"}
        gap={1.37}
        alignItems={"center"}
      >
        <BlueWrapperIcon icon={WhatsappIcon} sizeIcon={26} />
        <TelegramIcon sx={{ width: 50, height: 50, cursor: "pointer" }} />
      </Stack>
    </Box>
  );
};
