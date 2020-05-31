import {Button, List, ListItem} from '@material-ui/core';
import { connect } from 'react-redux';
import React, { useState } from 'react';

import { SUMMARY } from './redux/excercise_types';
import {
  createRange,
  createOptionsFromArray,
} from './utils/array_utils';
import { startExcercise } from './redux/actions';
import SelectInput from './select_input';

const maxNumberOfDigits = 10;
const maxNumbersPerProblem = 10;


const SummatoryForm = ({
  startExcercise
}) => {
  const [numberOfDigits, setNumberOfDigits] = useState(1);
  const [numberOfDigitsPerProblem, setNumberOfDigitsPerProblem] = useState(1);

  const onNumberOfDigitsChange = (value) => {
    setNumberOfDigits(parseInt(value));
  };
  const onNumberOfNumbersPerProblemChange = (value) => {
    setNumberOfDigitsPerProblem(parseInt(value))
  };

  const inputData = [
    {
      label: 'Number of digits',
      options: createOptionsFromArray(createRange(1, maxNumberOfDigits)),
      onChange: onNumberOfDigitsChange,
    },
    {
      label: 'Number of numbers per problem',
      options: createOptionsFromArray(createRange(1, maxNumbersPerProblem)),
      onChange: onNumberOfNumbersPerProblemChange,
    },
  ];

  const handleStartButtonClick = (event) => {
    startExcercise({
      type: SUMMARY,
      data: {
        numberOfDigits: numberOfDigits,
        numberOfDigitsPerProblem: numberOfDigitsPerProblem,
      }
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
}

export default connect(
  null,
  {startExcercise},
)(SummatoryForm);
