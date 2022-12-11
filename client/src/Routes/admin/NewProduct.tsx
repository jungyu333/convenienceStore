import React, { useRef } from 'react';
import styled from 'styled-components';
import { Container } from '@mui/material';
import Dropzone from 'react-dropzone';
import Input from '../../components/common/Input';
import { useForm } from 'react-hook-form';
import SubmitButton from '../../components/common/SubmitButton';

const Wrapper = styled(Container)`
  background-color: ${({ theme }) => theme.colors.lightgray};
  height: 100vh;
  min-width: 500px;
  margin: 0 auto;
  padding: 2rem;
  padding-top: 6rem;
  min-height: 900px;
  @media ${({ theme }) => theme.device.laptop} {
    width: 60%;
    margin-top: 10rem;
    height: 100%;
    min-height: 600px;
    padding-top: 4rem;
    border-radius: 10px;
    box-shadow: 4px 4px 4px ${({ theme }) => theme.colors.lightgray};
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media ${({ theme }) => theme.device.laptop} {
    width: 100%;
  }
`;

const Header = styled.div`
  width: 100%;
  @media ${({ theme }) => theme.device.laptop} {
    display: flex;
    align-items: center;
    margin-bottom: 2rem;
    height: 100%;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media ${({ theme }) => theme.device.laptop} {
    display: inline;
    margin-right: 30px;
  }
`;

const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 2rem 0 1rem 0;
  & span {
    display: flex;
    justify-content: center;
    width: 100%;
    & div {
      width: 50%;
      margin: 0 3px;
    }
  }

  @media ${({ theme }) => theme.device.laptop} {
    margin: 0;
    min-width: 200px;
  }
`;

const Image = styled.div`
  border: 2px dashed black;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 350px;
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

const TextAreaContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const TextArea = styled.textarea`
  width: 100%;
  border-radius: 10px;
  font-size: 1.1rem;
  padding: 5px;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  background-color: transparent;
  &:focus {
    outline: none;
    border: 1px solid ${({ theme }) => theme.colors.darkOrange};
  }
`;

function NewProduct() {
  const imageInput = useRef<HTMLInputElement>(null);
  const onClickAvatarUpload = () => {
    imageInput.current?.click();
  };
  const imageUpload = () => {
    // if (event.target.files) {
    //   const file = event.target.files[0];
    //   const avatarFormData = new FormData();
    //   avatarFormData.append('avatar', file);
    //   dispatch(uploadAvatar(avatarFormData));
    //   event.target.value = '';
    // }
    console.log('onchange');
  };
  const { register, handleSubmit } = useForm();
  return (
    <Wrapper>
      <Form>
        <Header>
          <ImageContainer>
            <Dropzone onDrop={imageUpload} multiple={false}>
              {({ getRootProps, getInputProps }) => (
                <Image {...getRootProps()}>
                  <input {...getInputProps()} />
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path d="M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM323.8 202.5c-4.5-6.6-11.9-10.5-19.8-10.5s-15.4 3.9-19.8 10.5l-87 127.6L170.7 297c-4.6-5.7-11.5-9-18.7-9s-14.2 3.3-18.7 9l-64 80c-5.8 7.2-6.9 17.1-2.9 25.4s12.4 13.6 21.6 13.6h96 32H424c8.9 0 17.1-4.9 21.2-12.8s3.6-17.4-1.4-24.7l-120-176zM112 192c26.5 0 48-21.5 48-48s-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48z" />
                    </svg>
                  </div>
                </Image>
              )}
            </Dropzone>
          </ImageContainer>
          <InputContainer>
            <Input
              type="text"
              label="상품 명"
              register={register('name', {
                required: '상품 명 을 입력해주세요.',
              })}
            />
            <span>
              <Input
                type="number"
                label="상품 가격"
                register={register('price', {
                  required: '개별 가격을 입력해주세요.',
                })}
              />
              <Input
                type="number"
                label="상품 수량"
                register={register('stock', {
                  required: '상품 수량을 입력해주세요.',
                })}
              />
            </span>
          </InputContainer>
        </Header>

        <TextAreaContainer>
          <TextArea rows={8} />
        </TextAreaContainer>
        <SubmitButton text="UpLoad" />
      </Form>
    </Wrapper>
  );
}

export default NewProduct;
