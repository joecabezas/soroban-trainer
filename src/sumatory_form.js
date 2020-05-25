import React from 'react';

import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import NumberInput from './number_input';

const numberInputs = [
  {
    label: 'Number of digits',
  },
  {
    label: 'Number of numbers per problem',
  },
];

function SumatoryForm(props) {
  return (
    <form>
      <List>
        {numberInputs.map((values, i) => (
          <ListItem key={i}>
            <NumberInput {...values}/>
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
