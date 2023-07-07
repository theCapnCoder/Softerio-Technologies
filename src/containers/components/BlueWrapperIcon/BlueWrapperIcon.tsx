import { IconButton } from "@mui/material";
import { FC } from "react";

type Props = {
  icon: React.ElementType;
  sizeIcon?: number;
  size?: string;
  onClick?: () => void;
};

export const BlueWrapperIcon: FC<Props> = ({
  icon: Icon,
  sizeIcon,
  size, 
  onClick,
}) => {
  return (
    <IconButton
      disableRipple
      onClick={onClick}
      sx={{
        p: 0,
        width: size ? size : "50px",
        height: size ? size : "50px",
        borderRadius: 1.25,
        backgroundColor: "#3980FF",
      }}
    >
      <Icon
        sx={{
          width: sizeIcon ? sizeIcon : 15.5,
          height: sizeIcon ? sizeIcon : 15.5,
        }}
      />
    </IconButton>
  );
};
