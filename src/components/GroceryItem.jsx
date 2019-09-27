import React from "react";
import PropTypes from "prop-types";

function GroceryItem(props) {
  return (
    <div className="d-flex justify-content-between">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" id={props.itemId} />
        <label class="form-check-label" for={props.itemId}>
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