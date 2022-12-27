import { Container } from '@mui/material';
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { FiRefreshCw } from 'react-icons/fi';

const Wrapper = styled(Container)`
  margin-top: 50px;
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
  & svg {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.gray};
    &:hover {
      color: ${({ theme }) => theme.colors.black};
    }
  }
`;

const MapContainer = styled.div`
  width: 90%;
  height: 40vh;
  margin-top: 2rem;
`;

function Map() {
  const mapElement = useRef(null);
  useEffect(() => {
    if (!mapElement.current || !naver) return;
    const location = new window.naver.maps.LatLng(
      37.5415535032815,
      127.0793650549112,
    );
    const mapOptions: naver.maps.MapOptions = {
      center: location,
      zoom: 17,
      minZoom: 17,
      zoomControl: false,
    };

    const map = new naver.maps.Map(mapElement.current, mapOptions);

    return () => {};
  }, []);
  return (
    <Wrapper>
      <Header>
        <h1>편의점 위치보기</h1>
        <div>
          <FiRefreshCw />
        </div>
      </Header>
      <MapContainer ref={mapElement} />
    </Wrapper>
  );
}

export default Map;
