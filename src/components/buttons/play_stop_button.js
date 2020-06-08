import {Button} from '@material-ui/core';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import React, {useState} from 'react';
import StopIcon from '@material-ui/icons/Stop';

import PropTypes from 'prop-types';

const PlayStopButton = ({
  play,
  stop,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleClick = () => {
    isPlaying? stop() : play();
    setIsPlaying(!isPlaying);
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
  play: PropTypes.func,
  stop: PropTypes.func,
};

export default PlayStopButton;
