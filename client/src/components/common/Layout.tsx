import {
  AppBar,
  Avatar,
  Box,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
} from '@mui/material';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { RootState } from '../../store/store';

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

const CustomMenu = styled(Menu)`
  margin-top: 45px;
`;

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Layout() {
  const { pathname } = useLocation();

  const { me } = useSelector((state: RootState) => state.user);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpenUserMenu = () => {
    setIsOpen(true);
  };

  const handleCloseUserMenu = () => {
    setIsOpen(false);
  };

  return (
    <Wrapper>
      <CustomContainer>
        <CustomToolbar>
          <h1>Logo</h1>

          <Box>
            {pathname === '/login' || pathname === '/signup' ? null : (
              <>
                {me ? (
                  <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu}>
                      <Avatar src={me?.avatarUrl} />
                    </IconButton>
                  </Tooltip>
                ) : (
                  <Link to="/login">Log In</Link>
                )}
              </>
            )}

            <CustomMenu
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(isOpen)}
              onClose={handleCloseUserMenu}
            >
              {settings.map(setting => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <div>{setting}</div>
                </MenuItem>
              ))}
            </CustomMenu>
          </Box>
        </CustomToolbar>
      </CustomContainer>
    </Wrapper>
  );
}

export default Layout;
