import {
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  Tooltip,
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
import { BlueWrapperIcon } from "../../components/BlueWrapperIcon";

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

        <Tooltip title="Open Menu">
          <BlueWrapperIcon icon={CloseIcon} onClick={onClose} />
        </Tooltip>
          <WhatsappIcon />
          <PhoneIcon />
          <MailIcon />
          <TelegramIcon />
      </Stack>

      <List disablePadding>
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
    </Box>
  );
};
