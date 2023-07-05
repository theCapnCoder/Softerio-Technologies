import { IconButton } from "@mui/material";
import { FC } from "react";

type Props = {
  icon: React.ElementType;
  onClick: () => void;
};

export const BlueWrapperIcon: FC<Props> = ({ icon: Icon, onClick }) => {
  return (
    <IconButton
      onClick={onClick}
      sx={{
        p: 0,
        width: "50px",
        height: "50px",
        borderRadius: 1.25,
        backgroundColor: "#3980FF",
      }}
    >
      <Icon sx={{ width: 15.5, height: 15.5 }} />
    </IconButton>
  );
};
