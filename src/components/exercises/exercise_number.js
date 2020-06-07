import {Typography} from '@material-ui/core';
import React from 'react';

import PropTypes from 'prop-types';

const ExerciseNumber = ({
  number,
}) => {
  return (
    <Typography
      variant="h3"
      align="right"
    >
      {number}
    </Typography>

  );
};

ExerciseNumber.propTypes = {
  number: PropTypes.number,
};

export default ExerciseNumber;
