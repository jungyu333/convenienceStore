import { Container } from '@mui/material';
import React, { useState } from 'react';
import styled from 'styled-components';
import SelectButton from '../components/call/SelectButton';

const Wrapper = styled(Container)`
  margin: 7rem 0;
  width: 100%;
  padding: 0 30px;
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.2rem;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  & h1 {
    margin-right: 10px;
  }
`;

const CallButton = styled.div`
  font-size: 0.9rem;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.gray};
  &:hover {
    color: ${({ theme }) => theme.colors.black};
  }
`;

function Call() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Wrapper>
      <HeaderContainer>
        <Header>
          <h1>호출 위치</h1>
          <SelectButton
            handleClose={handleClose}
            handleClick={handleClick}
            open={open}
            anchorEl={anchorEl}
          />
        </Header>

        <CallButton>호출 하기</CallButton>
      </HeaderContainer>
    </Wrapper>
  );
}

export default Call;
