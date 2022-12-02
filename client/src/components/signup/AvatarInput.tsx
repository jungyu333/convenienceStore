import { Avatar } from '@mui/material';
import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { uploadAvatar } from '../../action/signUp';
import { resetAvatar } from '../../reducer/user';
import { RootState, useAppDispatch } from '../../store/store';

const AvatarContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const CustomAvatar = styled(Avatar)`
  width: 60px;
  height: 60px;
  margin-right: 20px;
  box-shadow: 2px 2px 2px gray;
`;

const Input = styled.input`
  visibility: hidden;
`;

const AvatarButton = styled.div`
  cursor: pointer;
  padding: 8px 10px;
  border: 1px solid gray;
  border-radius: 5px;
  &:hover {
    background-color: ${({ theme }) => theme.colors.lightgray};
  }
`;

function AvatarInput() {
  const dispatch = useAppDispatch();
  const avatarInput = useRef<HTMLInputElement>(null);
  const { avatarPath } = useSelector((state: RootState) => state.user);
  const onClickAvatarUpload = () => {
    avatarInput.current?.click();
  };

  const onChangeImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const file = event.target.files[0];
      const avatarFormData = new FormData();
      avatarFormData.append('avatar', file);
      dispatch(uploadAvatar(avatarFormData));
      event.target.value = '';
    }
  };

  const resetAvatars = () => {
    dispatch(resetAvatar());
  };
  return (
    <AvatarContainer>
      <CustomAvatar
        src={
          avatarPath
            ? `${process.env.REACT_APP_SERVER_URL}/${avatarPath}`
            : 'https://www.gravatar.com/avatar?d=mp&f=y'
        }
      />
      {avatarPath ? (
        <AvatarButton onClick={resetAvatars}>Reset</AvatarButton>
      ) : (
        <AvatarButton onClick={onClickAvatarUpload}>Image</AvatarButton>
      )}
      <Input
        onChange={onChangeImage}
        ref={avatarInput}
        type="file"
        accept="image/*"
      />
    </AvatarContainer>
  );
}

export default AvatarInput;
