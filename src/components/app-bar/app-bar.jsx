import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { observer } from "mobx-react-lite";
import { useNavigate } from 'react-router-dom';


import gender from '../../store/gender';
import authorization from '../../store/authorization';

import './app-bar.css';
import { GENDER_BOY } from "../../constants/constants";
import { isMasculineGender } from "../../helpers/helpers";

export const MenuAppBar = observer(() => {
  const [isMasculine, setIsMasculine] = React.useState(isMasculineGender());
  const [anchorEl, setAnchorEl] = React.useState(null);

  const navigate = useNavigate();

  const { token } = authorization;


  const handleChange = (event) => {
    isMasculineGender() ? gender.setGirlGender() : gender.setBoyGender();
    setIsMasculine(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    // navigate('/signin')
    setAnchorEl(null);
  };

  const handleLogIn = () => {
    navigate('/signin');

    setAnchorEl(null);
  };


  const handleLogOut = () => {
    console.log('LOg Out');
    authorization.logOut();
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar color={isMasculine ? 'primary' : "secondary"}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Choose name
          </Typography>
          <div>
            <FormGroup>
              <FormControlLabel
                control={
                  <Switch
                    checked={isMasculine}
                    onChange={handleChange}
                    aria-label="login switch"
                    color="default"
                  />
                }
                label={gender.gender}
              />
            </FormGroup>
          </div>
          <div>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={token ? handleLogOut : handleLogIn}>{token ? 'Log Out' : 'Log in'}</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
});