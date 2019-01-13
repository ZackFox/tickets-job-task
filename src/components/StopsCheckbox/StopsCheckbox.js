import React from "react";
import { connect } from "react-redux";

import { checkStops } from "../../actions/filterActions";

import "./StopsCheckbox.css";

const StopsCheckbox = ({ children, stops, checkedStops, checkStops }) => {
  const checkHandler = () => {
    checkStops(stops);
  };

  return (
    <label htmlFor={`stops_${stops}`} className="stops-checker">
      <input
        type="checkbox"
        id={`stops_${stops}`}
        className="checkbox"
        checked={checkedStops[stops]}
        onChange={checkHandler}
      />
      <span className="checkbox-proxy" />
      <span className="checkbox-title">{children}</span>
    </label>
  );
};

export default connect(
  state => ({
    checkedStops: state.filters.checkedStops,
  }),
  { checkStops },
)(StopsCheckbox);
