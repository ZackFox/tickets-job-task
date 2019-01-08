import currencies from "../stubs/currencies";

export const setCurrency = currencyName => dispatch => {
  const currency = { name: currencyName, value: currencies[currencyName] };
  dispatch({ type: "SET_ACTIVE_CURRENCY", currency });
};

export const checkStops = stops => dispatch => {
  dispatch({ type: "CHECK_STOPS", stops });
};
