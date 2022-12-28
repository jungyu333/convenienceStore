export interface ISelectButtonProps {
  open: boolean;
  handleClick: (event: React.MouseEvent<HTMLElement>) => void;
  handleClose: () => void;
  anchorEl: HTMLElement | null;
}
