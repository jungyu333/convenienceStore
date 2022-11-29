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
import styled from 'styled-components';

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
  justify-content: space-between;
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
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
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
