import { Box, Stack, Typography, styled } from "@mui/material";
import { BlueWrapperIcon } from "../../components/BlueWrapperIcon";
import { TelegramIcon, WhatsappIcon } from "../../../assets/icons";

const PhoneTypography = styled(Typography)({
  color: "#4386FF",
  fontSize: 20,
  fontWeight: 600,
  lineHeight: "148.6%",
});

const EmailTypography = styled(Typography)({
  fontSize: 16,
  lineHeight: "142.6%",
});

export const Contacts = () => {
  return (
    <Stack
      direction={"row"}
      justifyContent={"space-between"}
      sx={{
        width: "100%",
        maxWidth: "289px",
        display: { xs: "none", lg: "flex" },
      }}
    >
      <Box>
        <PhoneTypography>8 (499) 348-82-16</PhoneTypography>
        <EmailTypography>hello@softerio.ru</EmailTypography>
      </Box>

      <Stack
        direction={"row"}
        justifyContent={"center"}
        gap={1.37}
        alignItems={"center"}
      >
        <BlueWrapperIcon icon={WhatsappIcon} size={"48px"} sizeIcon={26} />
        <TelegramIcon sx={{ width: 48, height: 48, cursor: "pointer" }} />
      </Stack>
    </Stack>
  );
};
