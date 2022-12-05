export interface ISubmitButtonProps {
  text: string;
}

export interface IDropdownMenuProps {
  setAnchorElUser: React.Dispatch<React.SetStateAction<HTMLElement | null>>;
  handleCloseUserMenu: () => void;
  anchorElUser: null | HTMLElement;
}
