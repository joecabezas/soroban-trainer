
import React from 'react';
import PropTypes from 'prop-types';

import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

function NumberInput(props) {
  const [selectedNumber, setSelectedNumber] = React.useState(1);

  const handleChange = (event) => {
    setSelectedNumber(event.target.value);
  };

  return (
    <FormControl
      variant="outlined"
      fullWidth
    >
      <FormHelperText>{props.label}</FormHelperText>
      <Select
        value={selectedNumber}
        onChange={handleChange}
      >
        {Array(props.maxNumber).fill(1).map((_, i) => i + 1).map(
            (n) => <MenuItem key={n} value={n}>{n}</MenuItem>,
        )}
      </Select>
    </FormControl>
  );
}

NumberInput.defaultProps = {
  maxNumber: 10,
};

NumberInput.propTypes = {
  maxNumber: PropTypes.number,
  label: PropTypes.string,
};

export default NumberInput;
