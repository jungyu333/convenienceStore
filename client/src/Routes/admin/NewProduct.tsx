import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Container } from '@mui/material';
import Input from '../../components/common/Input';
import { useForm } from 'react-hook-form';
import SubmitButton from '../../components/common/SubmitButton';
import ProductImageInput from '../../components/upload/ProductImageInput';
import { RootState, useAppDispatch } from '../../store/store';
import { resetImages } from '../../reducer/product';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { uploadProduct } from '../../action/product';
import { IProductData } from '../../@types/upload';
import { useNavigate } from 'react-router-dom';

const Wrapper = styled(Container)`
  background-color: ${({ theme }) => theme.colors.lightgray};
  height: 100vh;
  margin: 0 auto;
  padding: 2rem;
  min-height: 950px;
  @media ${({ theme }) => theme.device.laptop} {
    width: 60%;
    margin-top: 8rem;
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
  padding-top: 50px;
  height: 100%;
  @media ${({ theme }) => theme.device.laptop} {
    width: 100%;
    padding: 0;
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
  margin: 1rem 0;
  & span {
    display: flex;
    justify-content: center;
    width: 100%;
    & div {
      width: 50%;
      margin: 0;
    }
    & input {
      margin: 0 3px;
      margin-bottom: 10px;
    }
  }

  @media ${({ theme }) => theme.device.laptop} {
    margin: 0;
    margin-bottom: 4rem;
    min-width: 200px;
  }
`;

function NewProduct() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IProductData>();
  const navigation = useNavigate();
  const { uploadProductDone } = useSelector(
    (state: RootState) => state.product,
  );
  const dispatch = useAppDispatch();
  const { imagePath } = useSelector((state: RootState) => state.product);
  const onValid = (data: IProductData) => {
    if (imagePath.length === 0) {
      toast.error('상품 이미지를 등록해주세요', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1000,
        hideProgressBar: true,
      });
    } else {
      const formData = new FormData();
      formData.append('name', data.name);
      formData.append('price', data.price);
      formData.append('stock', data.stock);
      formData.append('description', data.description);
      imagePath.forEach(image => {
        formData.append('image', image);
      });
      dispatch(uploadProduct(formData));
    }
  };

  useEffect(() => {
    dispatch(resetImages());
  }, [dispatch]);

  useEffect(() => {
    if (uploadProductDone) {
      navigation('/admin/upload');
    }
  }, [navigation, uploadProductDone]);

  return (
    <Wrapper>
      <Form encType="multipart/form-data" onSubmit={handleSubmit(onValid)}>
        <Header>
          <ProductImageInput />

          <InputContainer>
            <Input
              type="text"
              label="상품 명"
              error={errors.name}
              register={register('name', {
                required: '상품 명 을 입력해주세요.',
              })}
            />
            <span>
              <Input
                type="number"
                label="상품 가격"
                error={errors.price}
                register={register('price', {
                  required: '개별 가격을 입력해주세요.',
                })}
              />
              <Input
                type="number"
                label="상품 수량"
                error={errors.stock}
                register={register('stock', {
                  required: '상품 수량을 입력해주세요.',
                })}
              />
            </span>
          </InputContainer>
        </Header>

        <Input
          type="textarea"
          label="상품 설명"
          error={errors.description}
          register={register('description', {
            required: '상품 설명을 입력해주세요.',
          })}
        />
        <SubmitButton text="UpLoad" />
      </Form>
    </Wrapper>
  );
}

export default NewProduct;
