import React from "react";
import PropTypes from "prop-types";

function GroceryItem(props) {
  return (
    <div className="d-flex justify-content-between">
      <div className="form-check">
        <input className="form-check-input" type="checkbox" id={props.itemId} />
        <label className="form-check-label" htmlFor={props.itemId}>
          {props.name}
        </label>
      </div>
      <span>x</span>
    </div>
  );
}

GroceryItem.propTypes = {
  name: PropTypes.string,
  itemId: PropTypes.string
};

export default GroceryItem;