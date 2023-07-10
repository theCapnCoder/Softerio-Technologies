import { Box, BoxProps, Button, Stack, Typography } from "@mui/material";
import { Cup, Rocket } from "../../assets/icons";

const containerStyle: BoxProps["sx"] = {
  mx: 0.5,
  pt: 5,
  borderRadius: 2.5,
  backgroundColor: "#3980FF",
};

const iconStyles: BoxProps["sx"] = {
  width: 36,
  height: 36,
};

export const Main = () => {
  return (
    <Box sx={containerStyle}>
      <Typography variant="h1" sx={{ m: "0 auto", mb: 3.37, maxWidth: 257 }}>
        Разработка мобильных приложений и сервисов
      </Typography>

      <Box>
        <Stack
          mb={1.4}
          direction={"row"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Rocket sx={iconStyles} />
          <Typography variant="mainText" sx={{ ml: 2.1, maxWidth: 248 }}>
            Знаем, как решить вашу задачу оптимальным способом
          </Typography>
        </Stack>

        <Stack
          direction={"row"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Cup sx={iconStyles} />
          <Typography variant="mainText" sx={{ ml: 2.1, maxWidth: 248 }}>
            Подберем подходящее решение с учетом целей и возможностей
          </Typography>
        </Stack>
      </Box>

      <Button>Заказать приложение</Button>
      <Button>Онлайн-консультация</Button>
    </Box>
  );
};
