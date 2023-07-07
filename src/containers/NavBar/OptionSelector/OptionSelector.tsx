import React, { useEffect, useState } from "react";
import {
  FormControl,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
import { DropDown } from "../../../assets/icons";

export type optionTime = {
  value: string;
  label: string;
  defaultValue: boolean;
};

interface LanguageSelectorProps {
  data: optionTime[];
}

export const OptionSelector: React.FC<LanguageSelectorProps> = ({ data }) => {
  const [selectedOption, setSelectedOption] = useState<string>("");

  const handleLanguageChange = (event: SelectChangeEvent<string>) => {
    setSelectedOption(event.target.value);
  };

  useEffect(() => {
    const defaultOption = data.find((option) => option.defaultValue);
    if (defaultOption) {
      setSelectedOption(defaultOption.value);
    }
  }, [data]);

  return (
    <FormControl sx={{ "& fieldset": { border: "none" } }}>
      <Select
        value={selectedOption}
        onChange={handleLanguageChange}
        IconComponent={DropDown}
        displayEmpty
        SelectDisplayProps={{
          style: {
            paddingLeft: 0,
            color: "#000",
            fontSize: 16,
            lineHeight: "148.6%",
          },
        }}
        sx={{
          "& .MuiSvgIcon-root": {
            width: "12px",
            marginRight: "7px",
            color: "transparent",
          },
        }}
      >
        {data &&
          data.map(({ value, label }) => (
            <MenuItem key={value} value={value}>
              {label}
            </MenuItem>
          ))}
      </Select>
    </FormControl>
  );
};
