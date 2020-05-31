import { Typography } from '@material-ui/core';
import React from 'react';

import PropTypes from 'prop-types';

const SummatoryExercise = ({
  data
}) => {
  return (
    <Typography
      variant="body2"
    >
      summatory: {JSON.stringify(data)}
    </Typography>
  );
};

SummatoryExercise.propTypes = {
  data: PropTypes.object
};

export default SummatoryExercise;
