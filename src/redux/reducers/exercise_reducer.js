const initialState = {
  type: null,
};

const exerciseReducer = (state = initialState, action) => {
  return {
    ...state,
    ...action.value,
  };
};

export default exerciseReducer;
