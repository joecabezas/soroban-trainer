import { connect } from 'react-redux';
import React from 'react';

import { MULTIPLICATION, SUMMARY } from '../redux/exercise_types';
import DefaultExercise from './exercises/default_exercise';
import SummatoryExercise from './exercises/summatory_exercise';

const MainContent = ({
  exerciseType
}) => {
  const getExercise = () => {
    switch(exerciseType){
      case SUMMARY:
        return <SummatoryExercise />
      case MULTIPLICATION:
      default:
        return <DefaultExercise />
    }
  };

  return getExercise();
};

const mapStateToProps = (state) => {
  return {
    exerciseType: state.exercise.type
  }
};

export default connect(
    mapStateToProps,
)(MainContent);
