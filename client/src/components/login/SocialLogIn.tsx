import React from 'react';
import styled from 'styled-components';
import SocialButton from './SocialButton';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 20px;
`;

function SocialLogIn() {
  return (
    <Wrapper>
      <SocialButton type="kakao" />
      <SocialButton type="google" />
    </Wrapper>
  );
}

export default SocialLogIn;
