import clsx from 'clsx';
import React from 'react';
import {hot} from 'react-hot-loader/root';

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ClearIcon from '@material-ui/icons/Clear';
import FunctionsIcon from '@material-ui/icons/Functions';
import MenuIcon from '@material-ui/icons/Menu';
import TuneIcon from '@material-ui/icons/Tune';
import ViewComfyIcon from '@material-ui/icons/ViewComfy';
import {makeStyles} from '@material-ui/core/styles';

import ConfigurationForm from './configuration_form';
import MenuAbout from './menu_about';
import MenuSection from './menu_section';
import SumatoryForm from './sumatory_form';

import {
  AppBar,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  Toolbar,
  Typography,
} from '@material-ui/core';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
}));

const sections = [
  {
    icon: <FunctionsIcon />,
    label: 'Summatory',
    content: <SumatoryForm />,
  },
  {
    icon: <ClearIcon />,
    label: 'Multiplications',
    content: null,
  },
  {
    icon: <ViewComfyIcon />,
    label: 'Divisions',
    content: null,
  },
  {
    divider: true,
  },
  {
    icon: <TuneIcon />,
    label: 'Configuration',
    content: <ConfigurationForm />,
  },
];

function App() {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  function handleDrawerOpen() {
    setOpen(true);
  }

  function handleDrawerClose() {
    setOpen(false);
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar
          disableGutters={!open}
        >
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">
            Soroban Trainer
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List component="nav">
          {sections.map(
              (section, i) => {
                return section.divider ?
                <Divider key={i} /> :
                <MenuSection key={i} {...section} />;
              },
          )}
          <Divider />
          <MenuAbout />
          <Divider />
        </List>
      </Drawer>
    </div>
  );
}

export default hot(App);
