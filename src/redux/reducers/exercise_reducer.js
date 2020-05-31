const exerciseReducer = (state = {}, action) => {
  return {
    ...action.value
  };
};

export default exerciseReducer;
