const initialState = {
  activeCurrency: { name: "rub", value: 0 },
  checkedStops: { 0: false, 1: false, 2: false, 3: false },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_ACTIVE_CURRENCY": {
      return { ...state, activeCurrency: action.currency };
    }
    case "CHECK_STOPS": {
      return {
        ...state,
        checkedStops: {
          ...state.checkedStops,
          [action.stops]: !state.checkedStops[action.stops],
        },
      };
    }
    default:
      return state;
  }
};
