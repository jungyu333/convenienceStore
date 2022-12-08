import { Menu, MenuItem } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { IDropdownMenuProps } from '../../@types/common';
import { userLogOut } from '../../action/user';
import { RootState, useAppDispatch } from '../../store/store';

const Wrapper = styled(Menu)`
  margin-top: 45px;
`;

const CustomMenuItem = styled(MenuItem)`
  min-width: 150px;
`;

function DropdownMenu({
  handleCloseUserMenu,
  setAnchorElUser,
  anchorElUser,
}: IDropdownMenuProps) {
  const dispatch = useAppDispatch();
  const { me } = useSelector((state: RootState) => state.user);
  const onClickLogOut = () => {
    setAnchorElUser(null);
    dispatch(userLogOut());
  };
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
        <Link to="/profile">Profile</Link>
      </CustomMenuItem>
      {me?.role === 0 ? (
        <CustomMenuItem onClick={handleCloseUserMenu}>
          <div>Cart</div>
        </CustomMenuItem>
      ) : (
        <CustomMenuItem onClick={handleCloseUserMenu}>
          <Link to="/admin/upload">Upload</Link>
        </CustomMenuItem>
      )}
      <CustomMenuItem onClick={onClickLogOut}>
        <div>LogOut</div>
      </CustomMenuItem>
    </Wrapper>
  );
}

export default DropdownMenu;
