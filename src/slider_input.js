import {Box, Slider, Typography} from '@material-ui/core';
import React, {useState} from 'react';

import PropTypes from 'prop-types';

const SliderInput = ({
  value,
  label,
  onChangeCommitted,
}) => {
  const [internalValue, setInternalValue] = useState(value);

  const handleInternalValue = (event, value) => {
    setInternalValue(value);
  };

  const handleInternalValueCommitted = (event, value) => {
    setInternalValue(value);
    onChangeCommitted(value);
  };

  return (
    <Box
      width={1}
    >
      <Typography
        variant="body2"
      >
        {label}
      </Typography>
      <Slider
        defaultValue={1}
        step={0.1}
        min={0}
        max={2}
        value={internalValue}
        valueLabelDisplay="auto"
        onChange={handleInternalValue}
        onChangeCommitted={handleInternalValueCommitted}
      />
    </Box>
  );
};

SliderInput.propTypes = {
  value: PropTypes.number,
  label: PropTypes.string,
  onChangeCommitted: PropTypes.func,
};


export default SliderInput;
