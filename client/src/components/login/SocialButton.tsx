import React from 'react';
import { RiKakaoTalkFill, RiGoogleFill } from 'react-icons/ri';
import styled from 'styled-components';
import { ISocialButtonProps } from '../../@types/login';

const Wrapper = styled.div`
  width: 40%;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.colors.black};
  border-radius: 5px;
  &:hover {
    background-color: ${({ theme }) => theme.colors.lightgray};
  }
`;
const SocialIcon = styled.div`
  width: 100%;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  & a {
    width: 100%;
    height: 100%;
    fill: ${({ theme }) => theme.colors.black};
    & svg {
      width: 100%;
      height: 100%;
    }
  }
`;

function SocialButton({ type }: ISocialButtonProps) {
  if (type === 'kakao') {
    return (
      <Wrapper>
        <SocialIcon>
          <a href={`${process.env.REACT_APP_SERVER_URL}/api/user/kakao`}>
            <RiKakaoTalkFill />
          </a>
        </SocialIcon>
      </Wrapper>
    );
  } else if (type === 'google') {
    return (
      <Wrapper>
        <SocialIcon>
          <a href={`${process.env.REACT_APP_SERVER_URL}/api/user/google`}>
            <RiGoogleFill />
          </a>
        </SocialIcon>
      </Wrapper>
    );
  } else {
    return null;
  }
}

export default SocialButton;
