import { Avatar, Container } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { RootState } from '../store/store';

const Wrapper = styled(Container)`
  margin-top: 15rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 30px;
`;

const CustomAvatar = styled(Avatar)`
  width: 90px;
  height: 90px;
`;

const Header = styled.div`
  display: flex;
  margin: 40px 0;
  font-size: 1.8rem;
  & span {
    margin-right: 5px;
    color: ${({ theme }) => theme.colors.orange};
  }
`;

const InfoContainer = styled.div`
  border: 1px solid lightgray;
  box-shadow: 2px 2px 2px lightgray;
  border-radius: 10px;
  width: 100%;
  max-width: 500px;
  height: 30vh;
  min-height: 300px;
  padding: 20px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InfoItem = styled.div`
  display: flex;
  width: 100%;
  height: 33%;
  margin: 20px 0;
  justify-content: space-between;
  align-items: center;
  font-size: 1.1rem;
  border-bottom: 1px dashed ${({ theme }) => theme.colors.gray};
  & div:last-child {
    font-size: 0.9rem;
    color: ${({ theme }) => theme.colors.gray};
  }
  & span {
    font-size: 0.9rem;
    color: ${({ theme }) => theme.colors.gray};
    :hover {
      color: ${({ theme }) => theme.colors.orange};
    }
  }
`;

function Profile() {
  const { me } = useSelector((state: RootState) => state.user);

  return (
    <Wrapper>
      <CustomAvatar src={me?.avatarUrl} />
      <Header>
        <span>{me?.nickname}</span>
        <p>님 어서오세요</p>
      </Header>
      <InfoContainer>
        <InfoItem>
          <div>Email ID</div>
          <div>{me?.email}</div>
        </InfoItem>
        <InfoItem>
          <div>Nick Name</div>
          <div>{me?.nickname}</div>
        </InfoItem>
        <InfoItem>
          <div>Cart</div>
          <Link to="/">
            <span>go!</span>
          </Link>
        </InfoItem>
      </InfoContainer>
    </Wrapper>
  );
}

export default Profile;
