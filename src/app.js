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
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import FunctionsIcon from '@material-ui/icons/Functions';
import ClearIcon from '@material-ui/icons/Clear';
import ViewComfyIcon from '@material-ui/icons/ViewComfy';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';

function App() {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setIsOpen(true);
  };

  const handleDrawerClose = () => {
    setIsOpen(false);
  };

  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <React.Fragment key={'left'}>
      <CssBaseline />
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
        <List component="nav">
          <ListItem button>
            <ListItemIcon>
              <FunctionsIcon />
            </ListItemIcon>
            <ListItemText primary="Summatory" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <ClearIcon />
            </ListItemIcon>
            <ListItemText primary="Multiplications" />
          </ListItem>
          <ListItem button onClick={handleClick}>
            <ListItemIcon>
              <ViewComfyIcon />
            </ListItemIcon>
            <ListItemText primary="Divisions" />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="Starred" />
              </ListItem>
            </List>
          </Collapse>
        </List>
      </Drawer>
    </React.Fragment>
  );
}

export default hot(App);
