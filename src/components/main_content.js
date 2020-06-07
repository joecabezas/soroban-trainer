import {connect} from 'react-redux';
import React from 'react';

import {MULTIPLICATION, SUMMARY} from '../redux/exercise_types';
import DefaultPage from './exercises/default_page';
import SummatoryPage from './exercises/summatory_page';

const MainContent = ({
  exercise,
}) => {
  const getPage = () => {
    switch (exercise.type) {
      case SUMMARY:
        return <SummatoryPage {...exercise.data} />;
      case MULTIPLICATION:
      default:
        return <DefaultPage {...exercise.data} />;
    }
  };

  return getPage();
};

const mapStateToProps = (state) => {
  return {
    exercise: state.exercise,
  };
};

export default connect(
    mapStateToProps,
)(MainContent);
