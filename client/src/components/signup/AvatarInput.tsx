import { Avatar } from '@mui/material';
import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { resetAvatar, setAvatar } from '../../reducer/user';
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
  const { avatarFile } = useSelector((state: RootState) => state.user);
  const onClickAvatarUpload = () => {
    avatarInput.current?.click();
  };

  const onChangeImage = () => {
    if (avatarInput.current?.files) {
      const file = avatarInput.current.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        dispatch(setAvatar({ file: reader.result, path: file.name }));
      };
    }
  };

  const resetAvatars = () => {
    dispatch(resetAvatar());
  };
  return (
    <AvatarContainer>
      <CustomAvatar
        src={
          avatarFile ? avatarFile : 'https://www.gravatar.com/avatar?d=mp&f=y'
        }
      />
      {avatarFile ? (
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
