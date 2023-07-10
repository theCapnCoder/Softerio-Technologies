import { Box, BoxProps, Button, Stack, Typography } from "@mui/material";
import { Cup, Rocket } from "../../assets/icons";

const containerStyle: BoxProps["sx"] = {
  pt: 5,
  borderRadius: 2.5,
  backgroundColor: "#3980FF",
};

const iconStyles: BoxProps["sx"] = {
  // mr: 2.1,
  maxWidth: 36,
  height: 36,
};

export const Main = () => {
  return (
    <Box sx={containerStyle}>
      <Typography variant="h1">
        Разработка мобильных приложений и сервисов
      </Typography>

      <Box>
        <Stack direction={"row"}>
          <Rocket sx={iconStyles} />
          <Typography variant="textWhite">
            Знаем, как решить вашу задачу оптимальным способом
          </Typography>
        </Stack>

        <Stack direction={"row"}>
          <Cup sx={iconStyles} />
          <Typography variant="textWhite">
            Подберем подходящее решение с учетом целей и возможностей
          </Typography>
        </Stack>
      </Box>

      <Button>Заказать приложение</Button>
      <Button>Онлайн-консультация</Button>
    </Box>
  );
};
