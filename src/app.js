import { hot } from 'react-hot-loader/root';
import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Divider from '@material-ui/core/Divider';

function App() {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setIsOpen(true);
  };

  const handleDrawerClose = () => {
    setIsOpen(false);
  };

  return (
    <React.Fragment key={'left'}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={handleDrawerOpen}
          >
            <MenuIcon />
          </IconButton
          >
          <Typography variant="h6">
            Soroban Trainer
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer anchor={'left'} open={isOpen}>
        <IconButton onClick={handleDrawerClose}>
          <ChevronLeftIcon />
        </IconButton>
        <Divider />
      </Drawer>
    </React.Fragment>
  );
}

export default hot(App);
