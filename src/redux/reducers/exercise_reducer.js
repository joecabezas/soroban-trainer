const initialState = {
  type: null,
};

const exerciseReducer = (state = initialState, action) => {
  return {
    ...action.value,
  };
};

export default exerciseReducer;
