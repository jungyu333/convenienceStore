import { Menu, MenuItem } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled(Menu)`
  margin-top: 45px;
`;

const CustomMenuItem = styled(MenuItem)`
  min-width: 150px;
`;

interface IDropdownMenuProps {
  handleCloseUserMenu: (event: React.MouseEvent<HTMLElement>) => void;
  anchorElUser: null | HTMLElement;
}

function DropdownMenu({
  handleCloseUserMenu,
  anchorElUser,
}: IDropdownMenuProps) {
  return (
    <Wrapper
      anchorEl={anchorElUser}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={Boolean(anchorElUser)}
      onClose={handleCloseUserMenu}
    >
      <CustomMenuItem onClick={handleCloseUserMenu}>
        <div>Profile</div>
      </CustomMenuItem>
      <CustomMenuItem onClick={handleCloseUserMenu}>
        <div>Cart</div>
      </CustomMenuItem>
      <CustomMenuItem onClick={handleCloseUserMenu}>
        <div>LogOut</div>
      </CustomMenuItem>
    </Wrapper>
  );
}

export default DropdownMenu;
