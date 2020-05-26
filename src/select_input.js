import {
  FormControl,
  FormHelperText,
  MenuItem,
  Select,
} from '@material-ui/core';
import React from 'react';

import PropTypes from 'prop-types';

function SelectInput(props) {
  const [selectedOption, setSelectedOption] = React.useState(Object.keys(props.options)[0]);

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
    props.onChange(event);
  };

  return (
    <FormControl
      variant="outlined"
      fullWidth
    >
      <FormHelperText>{props.label}</FormHelperText>
      <Select
        value={selectedOption}
        onChange={handleChange}
      >
        {Object.keys(props.options).map(
            (key) =>
              <MenuItem
                key={key}
                value={key}
              >
                {props.options[key]}
              </MenuItem>,
        )}
      </Select>
    </FormControl>
  );
}

SelectInput.defaultProps = {
  maxNumber: 10,
};

SelectInput.propTypes = {
  onChange: PropTypes.function,
  options: PropTypes.object,
  label: PropTypes.string,
};

export default SelectInput;
