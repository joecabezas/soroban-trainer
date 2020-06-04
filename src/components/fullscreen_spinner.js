import {Box, CssBaseline, Grid, Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexGrow: 1,
    height: '100vh',
  },
}));

const FullscreenSpinner = () => {
  const classes = useStyles();

  return (
    <Box
      className={classes.root}
    >
      <Box
        m="auto"
      >
        <CssBaseline />
        <Grid
          container
          justify="center"
          spacing={2}
        >
          <Grid
            container
            item
            justify="center"
          >
            <CircularProgress />
          </Grid>
          <Grid
            item
          >
            <Typography variant="body2">
              Loading...
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default FullscreenSpinner;
