import React from 'react';

import PropTypes from 'prop-types';

import SummatoryExercise from './summatory_exercise';

const SummatoryPage = ({
  numberOfDigits,
  numberOfNumbers,
}) => {
  return (
    <>
      <SummatoryExercise
        numberOfDigits={numberOfDigits}
        numberOfNumbers={numberOfNumbers}
      />
    </>
  );
};

SummatoryPage.propTypes = {
  numberOfDigits: PropTypes.number,
  numberOfNumbers: PropTypes.number,
};

export default SummatoryPage;
