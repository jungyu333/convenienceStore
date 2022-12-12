import React, { useEffect } from 'react';
import { Container, TableContainer } from '@mui/material';
import styled from 'styled-components';
import TableHeader from '../../components/upload/TableHeader';
import TableRow from '../../components/upload/TableRow';
import UpLoadButton from '../../components/upload/UpLoadButton';
import { useAppDispatch } from '../../store/store';
import { resetProductDone } from '../../reducer/product';

const Wrapper = styled(Container)`
  margin-top: 10rem;
`;

const CustomTableContainer = styled(TableContainer)`
  box-shadow: 3px 2px 2px ${({ theme }) => theme.colors.lightgray};
  border: none;
`;

function UpLoad() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(resetProductDone());
  }, [resetProductDone, dispatch]);
  return (
    <Wrapper>
      <CustomTableContainer>
        <TableHeader />
        <TableRow />
      </CustomTableContainer>
      <UpLoadButton />
    </Wrapper>
  );
}

export default UpLoad;
