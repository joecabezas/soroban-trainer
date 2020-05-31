import React from 'react';

import { SUMMARY, MULTIPLICATION } from '../redux/excercise_types';
import DefaultExercise from './exercises/default_exercise';
import SummatoryExercise from './exercises/summatory_exercise';

const MainContent = ({
  exercise
}) => {
  const getExercise = () => {
    switch(exercise){
      case SUMMARY:
        return <SummatoryExercise />
      case MULTIPLICATION:
      default:
        return <DefaultExercise />
    }
  };

  return getExercise();
};

export default MainContent;
