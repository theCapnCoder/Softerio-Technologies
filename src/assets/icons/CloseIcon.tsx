import { SvgIcon, SvgIconProps } from "@mui/material";

export const CloseIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g id="Vector">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0.341708 15.191C-0.113903 14.7353 -0.113903 13.9966 0.341709 13.541L13.541 0.341709C13.9966 -0.113903 14.7353 -0.113903 15.191 0.341708C15.6466 0.79732 15.6466 1.53601 15.1909 1.99162L1.99162 15.1909C1.53601 15.6466 0.79732 15.6466 0.341708 15.191Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0.341757 0.341978C0.797368 -0.113634 1.53606 -0.113634 1.99167 0.341978L15.191 13.5413C15.6466 13.9969 15.6466 14.7356 15.191 15.1912C14.7354 15.6468 13.9967 15.6468 13.5411 15.1912L0.341757 1.99189C-0.113854 1.53628 -0.113854 0.797589 0.341757 0.341978Z"
          fill="white"
        />
      </g>
    </SvgIcon>
  );
};
