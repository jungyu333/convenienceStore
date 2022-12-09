import React from 'react';
import { Container, TableContainer } from '@mui/material';
import styled from 'styled-components';
import TableHeader from '../../components/upload/TableHeader';
import TableRow from '../../components/upload/TableRow';

const Wrapper = styled(Container)`
  margin-top: 10rem;
`;

const CustomTableContainer = styled(TableContainer)`
  box-shadow: 3px 2px 2px ${({ theme }) => theme.colors.lightgray};
  border: none;
`;

function UpLoad() {
  return (
    <Wrapper>
      <CustomTableContainer>
        <TableHeader />
        <TableRow />
      </CustomTableContainer>
    </Wrapper>
  );
}

export default UpLoad;
