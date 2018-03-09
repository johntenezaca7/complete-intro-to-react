const DEFAULT_STATE = {
  searchTerm: ""
};

const rootReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default rootReducer; // Top level reducer for any store, no side effects, fully functional
