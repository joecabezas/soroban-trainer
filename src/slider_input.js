import {Box, Slider, Typography} from '@material-ui/core';
import React from 'react';

import PropTypes from 'prop-types';

const SliderInput = (props) => {
  return (
    <Box
      width={1}
    >
      <Typography
        variant="body2"
      >
        {props.label}
      </Typography>
      <Slider
        defaultValue={1}
        step={0.1}
        min={0}
        max={2}
        valueLabelDisplay="auto"
        onChange={props.onChange}
      />
    </Box>
  );
};

SliderInput.propTypes = {
  onChange: PropTypes.func,
  label: PropTypes.string,
};


export default SliderInput;
