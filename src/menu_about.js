import React from 'react';

import GitHubIcon from '@material-ui/icons/GitHub';
import InfoIcon from '@material-ui/icons/Info';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import {makeStyles} from '@material-ui/core/styles';

import AboutBackground from './assets/images/about-background.png';

import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Dialog,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '45ch',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
  media: {
    height: 140,
  },
}));

function MenuAbout() {
  const classes = useStyles();

  const [isDialogOpen, setIsDialogOpen] = React.useState(false);

  const handleAboutClick = () => {
    setIsDialogOpen(true);
  };

  const handleClose = () => {
    setIsDialogOpen(false);
  };

  return (
    <React.Fragment>
      <ListItem
        button
        onClick={handleAboutClick}
      >
        <ListItemIcon>
          <InfoIcon />
        </ListItemIcon>
        <ListItemText primary="About" />
      </ListItem>
      <Dialog
        onClose={handleClose}
        open={isDialogOpen}
      >
        <Card
        >
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={AboutBackground}
            />
            <CardContent>
              <List className={classes.root}>
                <ListItem>
                  <Typography gutterBottom variant="h5" component="h2">
                    About this page
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                  >
                    My name is Joe Cabezas Campos, I created this in order to practice with the soroban without having to look at the screen while the numbers are read out loud, it works for me and I made it opensource, if you have suggestions, please let me know, have fun!
                  </Typography>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <GitHubIcon />
                  </ListItemIcon>
                  <ListItemText primary="github.com/joecabezas" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <LinkedInIcon />
                  </ListItemIcon>
                  <ListItemText primary="linkedin.com/in/joecabezas" />
                </ListItem>
              </List>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button
              size="small"
              color="primary"
              href="https://github.com/joecabezas/soroban-trainer"
            >
              Github Repository
            </Button>
          </CardActions>
        </Card>
      </Dialog>
    </React.Fragment>
  );
}

export default MenuAbout;
