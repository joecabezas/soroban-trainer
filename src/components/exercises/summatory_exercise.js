import {Divider, Grid, Paper} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import React from 'react';

import PropTypes from 'prop-types';

import {generateNumbers} from '../../utils/excercise_utils';
import ExerciseNumber from './exercise_number';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
}));

const SummatoryExercise = ({
  numberOfDigits,
  numberOfNumbers,
}) => {
  const classes = useStyles();

  const numbers = generateNumbers(numberOfNumbers, numberOfDigits);

  const getTotal = () => {
    return numbers.reduce((acc, cur) => acc + cur);
  };

  return (
    <Grid container>
      <Grid>
        <Paper
          className={classes.paper}
        >
          {numbers.map((number, i) => (
            <ExerciseNumber
              key={i}
              number={number}
            />
          ),
          )}
          <Divider />
          <ExerciseNumber number={getTotal()} />
        </Paper>
      </Grid>
    </Grid>
  );
};

SummatoryExercise.propTypes = {
  numberOfDigits: PropTypes.number,
  numberOfNumbers: PropTypes.number,
};

export default SummatoryExercise;
