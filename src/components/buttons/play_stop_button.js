import {Button} from '@material-ui/core';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import React from 'react';
import StopIcon from '@material-ui/icons/Stop';

import PropTypes from 'prop-types';

const PlayStopButton = ({
  isPlaying,
  play,
  stop,
}) => {
  const handleClick = () => {
    isPlaying? stop() : play();
  };

  return (
    <Button
      variant="contained"
      color="primary"
      size="small"
      startIcon={isPlaying ? <StopIcon /> : <PlayArrowIcon />}
      onClick={handleClick}
      disableElevation
      fullWidth
    >
      {isPlaying ? 'Stop' : 'Play'}
    </Button>
  );
};

PlayStopButton.propTypes = {
  isPlaying: PropTypes.bool,
  play: PropTypes.func,
  stop: PropTypes.func,
};

export default PlayStopButton;
