import {Button, List, ListItem} from '@material-ui/core';
import {connect} from 'react-redux';
import React, {useState} from 'react';

import PropTypes from 'prop-types';

import {SUMMARY} from './redux/exercise_types';
import {
  createRange,
  createOptionsFromArray,
} from './utils/array_utils';
import {startExercise} from './redux/actions';
import SelectInput from './select_input';

const maxNumberOfDigits = 10;
const maxNumbersPerProblem = 10;


const SummatoryForm = ({
  startExercise,
}) => {
  const [numberOfDigits, setNumberOfDigits] = useState(1);
  const [numberOfNumbers, setNumberOfNumbers] = useState(1);

  const onNumberOfDigitsChange = (value) => {
    setNumberOfDigits(parseInt(value));
  };
  const onNumberOfNumbersPerProblemChange = (value) => {
    setNumberOfNumbers(parseInt(value));
  };

  const inputData = [
    {
      label: 'Number of digits',
      options: createOptionsFromArray(createRange(1, maxNumberOfDigits)),
      onChange: onNumberOfDigitsChange,
    },
    {
      label: 'Ammount of numbers',
      options: createOptionsFromArray(createRange(1, maxNumbersPerProblem)),
      onChange: onNumberOfNumbersPerProblemChange,
    },
  ];

  const handleStartButtonClick = (event) => {
    startExercise({
      type: SUMMARY,
      data: {
        numberOfDigits: numberOfDigits,
        numberOfNumbers: numberOfNumbers,
      },
    });
  };

  return (
    <form>
      <List>
        {inputData.map((data, i) => (
          <ListItem key={i}>
            <SelectInput
              {...data}
            />
          </ListItem>
        ))}
        <ListItem
        >
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={handleStartButtonClick}
            fullWidth
          >
            Start
          </Button>
        </ListItem>
      </List>
    </form>
  );
};

SummatoryForm.propTypes = {
  startExercise: PropTypes.func,
};

export default connect(
    null,
    {startExercise},
)(SummatoryForm);
