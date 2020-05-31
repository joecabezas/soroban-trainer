import drawerReducer from './drawer_reducer';

const initialState = {
  ui: {
    drawer: {
      section:null
    }
  }
}

const uiReducer = (state = initialState, action) => {
  return {
    drawer: drawerReducer(state.drawer, action)
  };
};

export default uiReducer;
