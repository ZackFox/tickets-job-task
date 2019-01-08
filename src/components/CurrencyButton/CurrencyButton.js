import React from "react";
import { connect } from "react-redux";

import { setCurrency } from "../../actions/filterActions";

import "./CurrencyButton.css";

const Button = ({ children, currencyName, activeCurrency, setCurrency }) => {
  const setActive = () => {
    if (currencyName === activeCurrency.name) return;
    setCurrency(currencyName);
  };

  const isActive = () => {
    return currencyName === activeCurrency.name ? "active" : "";
  };

  return (
    <button onClick={setActive} className={`btn btn-currency ${isActive()}`}>
      {children}
    </button>
  );
};

export default connect(
  state => ({
    activeCurrency: state.filters.activeCurrency,
  }),
  { setCurrency },
)(Button);
