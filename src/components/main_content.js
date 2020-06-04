import {connect} from 'react-redux';
import React from 'react';

import {MULTIPLICATION, SUMMARY} from '../redux/exercise_types';
import DefaultExercise from './exercises/default_exercise';
import SummatoryExercise from './exercises/summatory_exercise';

const MainContent = ({
  exercise,
}) => {
  const getExercise = () => {
    switch (exercise.type) {
      case SUMMARY:
        return <SummatoryExercise {...exercise} />;
      case MULTIPLICATION:
      default:
        return <DefaultExercise {...exercise} />;
    }
  };

  return getExercise();
};

const mapStateToProps = (state) => {
  return {
    exercise: state.exercise,
  };
};

export default connect(
    mapStateToProps,
)(MainContent);
