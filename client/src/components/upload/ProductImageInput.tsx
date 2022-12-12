import React, { useRef } from 'react';
import Dropzone from 'react-dropzone';
import styled from 'styled-components';
import { uploadImage } from '../../action/product';
import { useAppDispatch } from '../../store/store';
import ProductPreview from './ProductPreview';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 300px;
  overflow-x: auto;
  @media ${({ theme }) => theme.device.laptop} {
    display: inline;
    margin-right: 20px;
  }
`;

const Image = styled.div`
  border: 2px dashed black;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-width: 300px;
  max-width: 430px;
  min-height: 300px;
  height: 30vh;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.gray};
  }
  & svg {
    width: 80px;
    height: 80px;
  }
  & div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media ${({ theme }) => theme.device.laptop} {
    min-width: 250px;
  }
`;

function ProductImageInput() {
  const dispatch = useAppDispatch();
  const imageInput = useRef<HTMLInputElement>(null);
  const onClickAvatarUpload = () => {
    imageInput.current?.click();
  };
  const imageUpload = (files: File[]) => {
    const imageForm = new FormData();
    imageForm.append('image', files[0]);
    dispatch(uploadImage(imageForm));
  };

  return (
    <Wrapper>
      <Dropzone onDrop={imageUpload} multiple={false}>
        {({ getRootProps, getInputProps }) => (
          <Image {...getRootProps()}>
            <input {...getInputProps()} />
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM323.8 202.5c-4.5-6.6-11.9-10.5-19.8-10.5s-15.4 3.9-19.8 10.5l-87 127.6L170.7 297c-4.6-5.7-11.5-9-18.7-9s-14.2 3.3-18.7 9l-64 80c-5.8 7.2-6.9 17.1-2.9 25.4s12.4 13.6 21.6 13.6h96 32H424c8.9 0 17.1-4.9 21.2-12.8s3.6-17.4-1.4-24.7l-120-176zM112 192c26.5 0 48-21.5 48-48s-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48z" />
              </svg>
            </div>
          </Image>
        )}
      </Dropzone>
      <ProductPreview />
    </Wrapper>
  );
}

export default ProductImageInput;
