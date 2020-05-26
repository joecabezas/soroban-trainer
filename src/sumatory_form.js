import {Button, List, ListItem} from '@material-ui/core';
import React from 'react';

import {
  createRange,
  createOptionsFromArray,
} from './utils/array_utils';
import SelectInput from './select_input';

const maxNumberOfDigits = 10;
const maxNumbersPerProblem = 10;

const inputData = [
  {
    label: 'Number of digits',
    options: createOptionsFromArray(createRange(1, maxNumberOfDigits)),
  },
  {
    label: 'Number of numbers per problem',
    options: createOptionsFromArray(createRange(1, maxNumbersPerProblem)),
  },
];

function SumatoryForm(props) {
  return (
    <form>
      <List>
        {inputData.map((data, i) => (
          <ListItem key={i}>
            <SelectInput {...data} />
          </ListItem>
        ))}
        <ListItem
        >
          <Button
            variant="contained"
            color="primary"
            size="large"
            fullWidth
          >
            Start
          </Button>
        </ListItem>
      </List>
    </form>
  );
}

export default SumatoryForm;
