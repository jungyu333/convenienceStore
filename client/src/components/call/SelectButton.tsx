import React from 'react';
import { Button, Menu, MenuItem } from '@mui/material';
import { ISelectButtonProps } from '../../@types/call';
import styled from 'styled-components';

const CustomButton = styled(Button)`
  border: 1px solid ${({ theme }) => theme.colors.lightgray};
  font-family: COOKIE;
  font-size: 0.8rem;

  color: ${({ theme }) => theme.colors.gray};
`;

const CustomMenuItem = styled(MenuItem)`
  font-family: COOKIE;
  font-size: 0.8rem;
  display: flex;
  justify-content: center;
  width: 90px;
  color: ${({ theme }) => theme.colors.lightgray};
  &:hover {
    color: ${({ theme }) => theme.colors.black};
  }
`;

function SelectButton({
  anchorEl,
  handleClose,
  open,
  handleClick,
}: ISelectButtonProps) {
  return (
    <div>
      <CustomButton onClick={handleClick}>선택해주세요</CustomButton>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <CustomMenuItem onClick={handleClose} disableRipple>
          청심대
        </CustomMenuItem>
        <CustomMenuItem onClick={handleClose} disableRipple>
          공대 앞
        </CustomMenuItem>
      </Menu>
    </div>
  );
}

export default SelectButton;
