import {
  AppBar,
  Avatar,
  Container,
  IconButton,
  Toolbar,
  Tooltip,
} from '@mui/material';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { RootState } from '../../store/store';
import DropdownMenu from './DropdownMenu';

const Wrapper = styled(AppBar)`
  width: 100%;

  background-color: ${({ theme }) => theme.colors.orange};
`;

const CustomContainer = styled(Container)`
  margin: 0;
  width: 100%;
  max-width: none;
`;

const CustomToolbar = styled(Toolbar)`
  width: 100%;
  display: flex;
  padding: 0;

  justify-content: space-between;
  align-items: center;
  & h1 {
    font-size: 1.5rem;
    color: white;
  }
`;

function Layout() {
  const { pathname } = useLocation();
  const { me } = useSelector((state: RootState) => state.user);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Wrapper>
      <CustomContainer>
        <CustomToolbar>
          <Link to="/">
            <h1>Logo</h1>
          </Link>

          <div>
            {pathname === '/login' || pathname === '/signup' ? null : (
              <>
                {me ? (
                  <Tooltip title="Open Menu">
                    <IconButton onClick={handleOpenUserMenu}>
                      <Avatar src={me?.avatarUrl} />
                    </IconButton>
                  </Tooltip>
                ) : (
                  <Link to="/login">Log In</Link>
                )}
              </>
            )}

            <DropdownMenu
              anchorElUser={anchorElUser}
              setAnchorElUser={setAnchorElUser}
              handleCloseUserMenu={handleCloseUserMenu}
            />
          </div>
        </CustomToolbar>
      </CustomContainer>
    </Wrapper>
  );
}

export default Layout;
