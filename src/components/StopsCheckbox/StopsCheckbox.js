import React from "react";
import { connect } from "react-redux";

import { checkStops } from "../../actions/filterActions";

import "./StopsCheckbox.css";

const StopsCheckbox = ({ children, stops, checkedStops, checkStops }) => {
  const checkHandler = () => {
    checkStops(stops);
  };

  return (
    <label htmlFor={`stops_${stops}`} className="stops-checkbox">
      <input
        type="checkbox"
        id={`stops_${stops}`}
        checked={checkedStops[stops]}
        onChange={checkHandler}
      />
      <span>{children}</span>
    </label>
  );
};

export default connect(
  state => ({
    checkedStops: state.filters.checkedStops,
  }),
  { checkStops },
)(StopsCheckbox);
