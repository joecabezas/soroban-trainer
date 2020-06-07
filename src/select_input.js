import {
  FormControl,
  FormHelperText,
  MenuItem,
  Select,
} from '@material-ui/core';
import React from 'react';

import PropTypes from 'prop-types';

const SelectInput = ({
  label,
  options,
  onChange,
}) => {
  const [selectedOption, setSelectedOption] = React.useState(Object.keys(options)[0]);

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
    onChange(event.target.value);
  };

  return (
    <FormControl
      variant="outlined"
      fullWidth
    >
      <FormHelperText>{label}</FormHelperText>
      <Select
        value={selectedOption}
        onChange={handleChange}
      >
        {Object.keys(options).map(
            (key) =>
              <MenuItem
                key={key}
                value={key}
              >
                {options[key]}
              </MenuItem>,
        )}
      </Select>
    </FormControl>
  );
};

SelectInput.defaultProps = {
  maxNumber: 10,
};

SelectInput.propTypes = {
  label: PropTypes.string,
  options: PropTypes.object,
  onChange: PropTypes.func,
};

export default SelectInput;
