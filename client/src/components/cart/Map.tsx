import { Container } from '@mui/material';
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { FiRefreshCw } from 'react-icons/fi';
import { RootState, useAppDispatch } from '../../store/store';
import { loadStorePosition } from '../../action/store';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Wrapper = styled(Container)`
  margin: 50px 0;
  width: 100%;
  height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Header = styled.div`
  font-size: 1.1rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  & h1 {
    color: ${({ theme }) => theme.colors.gray};
  }
`;

const MapContainer = styled.div`
  width: 90%;
  height: 40vh;
  margin-top: 2rem;
`;

const HeaderButton = styled.div`
  display: flex;
  align-items: center;
  & a {
    margin-right: 20px;
    color: ${({ theme }) => theme.colors.gray};
    &:hover {
      color: ${({ theme }) => theme.colors.black};
    }
  }

  & svg {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.gray};
    &:hover {
      color: ${({ theme }) => theme.colors.black};
    }
  }
`;

function Map() {
  const dispatch = useAppDispatch();
  const { storePosition } = useSelector((state: RootState) => state.store);
  const mapElement = useRef(null);
  useEffect(() => {
    if (!mapElement.current || !naver) return;

    const location = new window.naver.maps.LatLng(
      Number(process.env.REACT_APP_CENTER_LATITUDE!),
      Number(process.env.REACT_APP_CENTER_LONGITUDE!),
    );
    const mapOptions: naver.maps.MapOptions = {
      center: location,
      zoom: 17,
      minZoom: 17,
      zoomControl: false,
    };
    const map = new naver.maps.Map(mapElement.current, mapOptions);
    if (!storePosition) {
      dispatch(loadStorePosition());
    }
    if (storePosition) {
      new naver.maps.Marker({
        position: new naver.maps.LatLng(storePosition.lat, storePosition.log),
        map: map,
      });
    }

    return () => {};
  }, [storePosition]);

  const onClickMark = () => {
    dispatch(loadStorePosition());
  };

  return (
    <Wrapper>
      <Header>
        <h1>편의점 위치보기</h1>
        <HeaderButton>
          <Link to="/call">호출하기</Link>
          <FiRefreshCw onClick={onClickMark} />
        </HeaderButton>
      </Header>
      <MapContainer ref={mapElement} />
    </Wrapper>
  );
}

export default Map;
