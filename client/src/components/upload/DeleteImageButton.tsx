import React from 'react';
import styled from 'styled-components';
import { IDeleteImageButton } from '../../@types/upload';
import { deleteImage } from '../../reducer/product';
import { useAppDispatch } from '../../store/store';

const DeleteButton = styled.div`
  cursor: pointer;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 5px;
  right: 5px;
  width: 15px;
  height: 15px;
  background-color: transparent;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  &:hover {
    border-color: ${({ theme }) => theme.colors.red};
  }
  & svg {
    width: 90%;
    height: 90%;
    fill: ${({ theme }) => theme.colors.gray};
    &:hover {
      fill: ${({ theme }) => theme.colors.red};
    }
  }
`;

function DeleteImageButton({ image }: IDeleteImageButton) {
  const dispatch = useAppDispatch();
  const onClickDelete = () => {
    dispatch(deleteImage(image));
  };
  return (
    <DeleteButton onClick={onClickDelete}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
        <path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z" />
      </svg>
    </DeleteButton>
  );
}

export default DeleteImageButton;
