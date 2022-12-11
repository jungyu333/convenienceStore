import React from 'react';
import styled from 'styled-components';
import { Container } from '@mui/material';
import Input from '../../components/common/Input';
import { useForm } from 'react-hook-form';
import SubmitButton from '../../components/common/SubmitButton';
import ProductImageInput from '../../components/upload/ProductImageInput';

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
    margin-bottom: 2rem;
    height: 100%;
    align-items: center;
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
    margin-bottom: 4rem;
    min-width: 200px;
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
  const { register, handleSubmit } = useForm();
  return (
    <Wrapper>
      <Form>
        <Header>
          <ProductImageInput />

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
